from django.shortcuts import render


def index(request):
    """Home page"""
    return render(request, "index.html")


def we(request):
    """We/About page"""
    return render(request, "we.html")


def business(request):
    """Business page"""
    return render(request, "business.html")


def join(request):
    """Join/Careers page"""
    return render(request, "join.html")


def projects(request):
    """Projects page"""
    return render(request, "projects.html")


def contact(request):
    """Contact page"""
    return render(request, "contact.html")
