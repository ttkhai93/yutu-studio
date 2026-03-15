# Local Development Guide

## 🚀 Quick Start

Your Django project is ready to run locally!

### 1. Activate Virtual Environment

```bash
source .venv/bin/activate
```

Or on Windows:
```bash
.venv\Scripts\activate
```

### 2. Run Development Server

```bash
python manage.py runserver
```

Visit: http://localhost:8000

### 3. Access Admin Panel

Visit: http://localhost:8000/admin/

Create superuser if you haven't:
```bash
python manage.py createsuperuser
```

## 📄 Available Pages

All your original pages work at these URLs:

- http://localhost:8000/ - Home page (index.html)
- http://localhost:8000/we.html - About/We page
- http://localhost:8000/business.html - Business page
- http://localhost:8000/join.html - Join/Careers page
- http://localhost:8000/projects.html - Projects page
- http://localhost:8000/contact.html - Contact page
- http://localhost:8000/comic.html - Comic reader

## 🛠 Common Commands

### Database Operations

```bash
# Create migrations after model changes
python manage.py makemigrations

# Apply migrations
python manage.py migrate

# Reset database (careful!)
rm db.sqlite3
python manage.py migrate
python manage.py createsuperuser
```

### Static Files

```bash
# Collect static files for production
python manage.py collectstatic

# Clear collected static files
python manage.py collectstatic --clear
```

### Admin User

```bash
# Create superuser
python manage.py createsuperuser

# Change password
python manage.py changepassword <username>
```

### Shell Access

```bash
# Django shell (with ORM access)
python manage.py shell

# Example queries in shell:
from comics.models import Comic, Chapter, Page
Comic.objects.all()
Chapter.objects.filter(number=1)
```

## 📊 Adding Comics via Admin

1. Start server: `python manage.py runserver`
2. Go to: http://localhost:8000/admin/
3. Click "Comics" → "Add comic"
4. Fill in title and description
5. Save and add chapters
6. Add pages with images to each chapter

## 🧪 Testing Comic Reader

### Option 1: Use Existing Static Data (Current)

The comic reader currently uses hardcoded data in `static/js/comic-reader.js`.
It works with demo images in `static/images/COMICS/`.

### Option 2: Switch to Database (Future)

To use database-stored comics:

1. Add comics via admin panel
2. Update `comic-reader.js` to fetch from `/api/comic-data/`
3. The API endpoint is already ready at: http://localhost:8000/api/comic-data/

## 📁 Project Structure

```
yutu-studio/
├── manage.py                 # Django management script
├── yutu_config/              # Project settings
│   ├── settings.py          # Main configuration
│   ├── urls.py              # URL routing
│   └── wsgi.py              # WSGI config
├── pages/                    # Static pages app
│   ├── views.py             # Page views
│   └── urls.py              # URL patterns
├── comics/                   # Comic reader app
│   ├── models.py            # Database models
│   ├── views.py             # Views and API
│   ├── admin.py             # Admin interface
│   └── urls.py              # URL patterns
├── templates/                # HTML templates
├── static/                   # Static files (CSS, JS, images)
├── media/                    # User uploads
└── db.sqlite3               # SQLite database
```

## 🔧 Development Workflow

### Making Changes to Models

1. Edit `comics/models.py` or create new models
2. Run: `python manage.py makemigrations`
3. Run: `python manage.py migrate`
4. Update admin.py if needed
5. Test changes

### Adding New Pages

1. Create view in `pages/views.py`
2. Add URL pattern in `pages/urls.py`
3. Create template in `templates/`
4. Test the page

### Modifying Templates

Just edit files in `templates/` directory.
Changes appear immediately (no restart needed).

### Updating Static Files

Edit files in `static/` directory.
For production, run: `python manage.py collectstatic`

## 🐛 Debugging

### Enable Debug Toolbar (Optional)

Install Django Debug Toolbar for development:
```bash
pip install django-debug-toolbar
```

Add to `INSTALLED_APPS` in settings.py:
```python
INSTALLED_APPS = [
    ...
    'debug_toolbar',
]
```

### View SQL Queries

In Django shell:
```python
from django.db import connection
print(connection.queries)
```

### Check Logs

Django prints errors directly to console when running `runserver`.

## 📦 Installing New Packages

```bash
# Activate virtual environment first
source .venv/bin/activate

# Install package
pip install package-name

# Update requirements.txt
pip freeze > requirements.txt
```

## 🔄 Syncing with Production

### Before Deploying to cPanel

1. Test locally
2. Update `requirements.txt` if you added packages
3. Set `DEBUG = False` in settings.py
4. Run: `python manage.py check --deploy`
5. Fix any issues shown

### After Deployment

Test all pages:
- [ ] Home page
- [ ] All navigation links
- [ ] Comic reader
- [ ] Admin panel
- [ ] Static files load correctly
- [ ] Images display correctly

## 💡 Tips

### Auto-reload on Template Changes

Templates auto-reload - no server restart needed!

### Database GUI Tools

View/edit database with:
- DB Browser for SQLite (https://sqlitebrowser.org/)
- Or VS Code SQLite extension

### Performance Testing

```bash
# Check for issues
python manage.py check

# Run system checks
python manage.py check --deploy
```

## 🎨 Frontend Development

Your original workflow is unchanged:
- Edit CSS in `static/css/`
- Edit JS in `static/js/`
- Edit HTML in `templates/`

Just refresh browser to see changes!

## 📚 Learning Resources

- Django Documentation: https://docs.djangoproject.com/
- Django Tutorial: https://docs.djangoproject.com/en/stable/intro/tutorial01/
- Django Girls Tutorial: https://tutorial.djangogirls.org/

## ✅ Everything Working?

Checklist:
- [ ] Server runs: `python manage.py runserver`
- [ ] Home page loads: http://localhost:8000/
- [ ] Admin accessible: http://localhost:8000/admin/
- [ ] Static files load (CSS, JS, images)
- [ ] Comic reader works
- [ ] Can add comics via admin

If all checked - you're good to go! 🎉
