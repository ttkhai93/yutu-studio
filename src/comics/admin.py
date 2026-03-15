from django.contrib import admin
from .models import Comic, Chapter, Page


class PageInline(admin.TabularInline):
    """Inline admin for pages within a chapter"""

    model = Page
    extra = 1
    fields = ["number", "image"]


class ChapterInline(admin.TabularInline):
    """Inline admin for chapters within a comic"""

    model = Chapter
    extra = 0
    fields = ["number", "title"]
    show_change_link = True


@admin.register(Comic)
class ComicAdmin(admin.ModelAdmin):
    """Admin interface for comics"""

    list_display = ["title", "created_at", "updated_at"]
    search_fields = ["title", "description"]
    inlines = [ChapterInline]


@admin.register(Chapter)
class ChapterAdmin(admin.ModelAdmin):
    """Admin interface for chapters"""

    list_display = ["__str__", "comic", "number", "created_at"]
    list_filter = ["comic"]
    search_fields = ["title", "comic__title"]
    inlines = [PageInline]


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    """Admin interface for pages"""

    list_display = ["__str__", "chapter", "number", "image"]
    list_filter = ["chapter__comic"]
    search_fields = ["chapter__title"]
