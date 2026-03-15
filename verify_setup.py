#!/usr/bin/env python
"""
Quick verification script to check Django setup
Run this after migration to ensure everything is configured correctly
"""

import os
import sys
from pathlib import Path
import django

# Add src directory to Python path for src layout
src_path = Path(__file__).resolve().parent / "src"
sys.path.insert(0, str(src_path))

# Setup Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "yutu_config.settings")
django.setup()


def check_imports():
    """Check that all required modules can be imported"""
    print("✓ Checking imports...")
    try:
        import django
        import PIL
        from comics.models import Comic, Chapter, Page
        from pages import views as page_views
        from comics import views as comic_views

        print("  ✓ All imports successful")
        return True
    except ImportError as e:
        print(f"  ✗ Import error: {e}")
        return False


def check_database():
    """Check database connection and tables"""
    print("✓ Checking database...")
    try:
        from django.db import connection

        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
        print("  ✓ Database connection successful")

        from comics.models import Comic

        Comic.objects.all().count()
        print("  ✓ Database tables exist")
        return True
    except Exception as e:
        print(f"  ✗ Database error: {e}")
        return False


def check_templates():
    """Check that templates exist"""
    print("✓ Checking templates...")
    templates = [
        "index.html",
        "we.html",
        "business.html",
        "join.html",
        "projects.html",
        "contact.html",
        "comic.html",
    ]
    template_dir = "templates"

    all_exist = True
    for template in templates:
        path = os.path.join(template_dir, template)
        if os.path.exists(path):
            print(f"  ✓ {template}")
        else:
            print(f"  ✗ {template} not found")
            all_exist = False

    return all_exist


def check_static():
    """Check static files directory"""
    print("✓ Checking static files...")
    static_dirs = ["static/css", "static/js", "static/images"]

    all_exist = True
    for static_dir in static_dirs:
        if os.path.exists(static_dir):
            print(f"  ✓ {static_dir}")
        else:
            print(f"  ✗ {static_dir} not found")
            all_exist = False

    return all_exist


def check_settings():
    """Check Django settings"""
    print("✓ Checking settings...")
    from django.conf import settings

    checks = []

    # Check INSTALLED_APPS
    if "pages" in settings.INSTALLED_APPS and "comics" in settings.INSTALLED_APPS:
        print("  ✓ Apps registered")
        checks.append(True)
    else:
        print("  ✗ Apps not registered")
        checks.append(False)

    # Check TEMPLATES
    if settings.TEMPLATES[0]["DIRS"]:
        print("  ✓ Template directories configured")
        checks.append(True)
    else:
        print("  ✗ Template directories not configured")
        checks.append(False)

    # Check STATIC_URL
    if settings.STATIC_URL:
        print(f"  ✓ STATIC_URL: {settings.STATIC_URL}")
        checks.append(True)
    else:
        print("  ✗ STATIC_URL not set")
        checks.append(False)

    # Check MEDIA_URL
    if hasattr(settings, "MEDIA_URL") and settings.MEDIA_URL:
        print(f"  ✓ MEDIA_URL: {settings.MEDIA_URL}")
        checks.append(True)
    else:
        print("  ✗ MEDIA_URL not set")
        checks.append(False)

    return all(checks)


def check_wsgi():
    """Check WSGI configuration"""
    print("✓ Checking WSGI...")

    if os.path.exists("passenger_wsgi.py"):
        print("  ✓ passenger_wsgi.py exists")
        return True
    else:
        print("  ✗ passenger_wsgi.py not found")
        return False


def check_requirements():
    """Check requirements.txt"""
    print("✓ Checking requirements...")

    if os.path.exists("requirements.txt"):
        with open("requirements.txt", "r") as f:
            reqs = f.read()
            if "Django" in reqs and "Pillow" in reqs:
                print("  ✓ requirements.txt has required packages")
                return True
            else:
                print("  ✗ Missing required packages in requirements.txt")
                return False
    else:
        print("  ✗ requirements.txt not found")
        return False


def main():
    """Run all checks"""
    print("=" * 60)
    print("YUTU Studio Django Setup Verification")
    print("=" * 60)
    print()

    results = []

    results.append(("Imports", check_imports()))
    results.append(("Database", check_database()))
    results.append(("Templates", check_templates()))
    results.append(("Static Files", check_static()))
    results.append(("Settings", check_settings()))
    results.append(("WSGI", check_wsgi()))
    results.append(("Requirements", check_requirements()))

    print()
    print("=" * 60)
    print("Summary")
    print("=" * 60)

    all_passed = True
    for name, result in results:
        status = "✓ PASS" if result else "✗ FAIL"
        print(f"{status}: {name}")
        if not result:
            all_passed = False

    print()
    if all_passed:
        print("🎉 All checks passed! Your Django setup is ready.")
        print()
        print("Next steps:")
        print("1. Run: python manage.py runserver")
        print("2. Visit: http://localhost:8000")
        print("3. Admin: http://localhost:8000/admin/")
        print()
        print("For deployment, see: DJANGO_DEPLOYMENT_GUIDE.md")
    else:
        print("⚠️  Some checks failed. Please review the errors above.")
        print("See documentation for troubleshooting.")

    print("=" * 60)

    return 0 if all_passed else 1


if __name__ == "__main__":
    sys.exit(main())
