from django.db import models


class Comic(models.Model):
    """A comic/webtoon series"""

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title


class Chapter(models.Model):
    """A chapter within a comic"""

    comic = models.ForeignKey(Comic, on_delete=models.CASCADE, related_name="chapters")
    number = models.IntegerField()
    title = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["number"]
        unique_together = ["comic", "number"]

    def __str__(self):
        return f"{self.comic.title} - Chapter {self.number}: {self.title}"


class Page(models.Model):
    """A page within a chapter"""

    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE, related_name="pages")
    number = models.IntegerField()
    image = models.ImageField(upload_to="comics/%Y/%m/%d/")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["number"]
        unique_together = ["chapter", "number"]

    def __str__(self):
        return f"{self.chapter} - Page {self.number}"
