from django.shortcuts import render
from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
import json


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


@csrf_exempt
def send_contact_email(request):
    """Handle contact form submission and send email"""
    if request.method == "POST":
        try:
            # Get form data
            name = request.POST.get("name", "").strip()
            email = request.POST.get("email", "").strip()
            message = request.POST.get("message", "").strip()

            # Validate required fields
            if not name or not email or not message:
                return JsonResponse(
                    {"success": False, "message": "All fields are required."},
                    status=400,
                )

            # Prepare email content
            subject = f"Contact Form: {name}"
            email_body = f"""
New contact form submission from YUTU Studio website:

Name: {name}
Email: {email}

Message:
{message}

---
This email was sent from the contact form at yutustudio.com
"""

            # Send email
            send_mail(
                subject=subject,
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[email],
                fail_silently=False,
            )

            return JsonResponse(
                {
                    "success": True,
                    "message": "Thank you for your message! We'll get back to you soon.",
                }
            )

        except Exception as e:
            print(f"Email sending error: {e}")
            return JsonResponse(
                {
                    "success": False,
                    "message": "An error occurred while sending your message. Please try again later.",
                },
                status=500,
            )

    return JsonResponse(
        {"success": False, "message": "Invalid request method."}, status=405
    )
