from django.urls import path
from . import views

app_name = "comics"

urlpatterns = [
    path("comic.html", views.comic_reader, name="reader"),
    path("api/comic-data/", views.get_comic_data, name="comic_data"),
]
