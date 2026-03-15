from django.shortcuts import render
from django.http import JsonResponse
from .models import Comic, Chapter


def comic_reader(request):
    """Comic reader page"""
    return render(request, "comic.html")


def get_comic_data(request):
    """API endpoint to get comic data as JSON"""
    try:
        # Get all comics with their chapters and pages
        comics = Comic.objects.prefetch_related("chapters__pages").all()

        comic_data = []
        for comic in comics:
            chapters = []
            for chapter in comic.chapters.all():
                pages = [
                    page.image.url for page in chapter.pages.all().order_by("number")
                ]
                chapters.append(
                    {"id": chapter.id, "title": chapter.title, "pages": pages}
                )

            comic_data.append(
                {"id": comic.id, "title": comic.title, "chapters": chapters}
            )

        # Return first comic for now, or all comics
        if comic_data:
            return JsonResponse({"comic": comic_data[0]})
        else:
            # Return default static data if no comics in database
            return JsonResponse({"comic": None})

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
