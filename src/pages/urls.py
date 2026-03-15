from django.urls import path
from . import views

app_name = "pages"

urlpatterns = [
    path("", views.index, name="index"),
    path("index.html", views.index, name="index"),
    path("we.html", views.we, name="we"),
    path("business.html", views.business, name="business"),
    path("join.html", views.join, name="join"),
    path("projects.html", views.projects, name="projects"),
    path("contact.html", views.contact, name="contact"),
]
