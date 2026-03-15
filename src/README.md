# src/ Directory

This directory contains all Django Python code for the YUTU Studio web application.

## Structure

```
src/
├── yutu_config/       # Django project settings and configuration
│   ├── settings.py    # Main settings
│   ├── urls.py        # URL routing
│   └── wsgi.py        # WSGI application
├── pages/             # Static pages Django app
│   ├── views.py       # View functions for static pages
│   └── urls.py        # URL patterns
├── comics/            # Comic reader Django app
│   ├── models.py      # Database models (Comic, Chapter, Page)
│   ├── views.py       # Comic reader views
│   ├── admin.py       # Admin interface configuration
│   └── urls.py        # URL patterns
└── manage.py          # Django management command line
```

## Why src/ Layout?

The src layout is a Python packaging best practice that:
- Separates application code from project configuration
- Makes the codebase more organized and maintainable
- Clearly distinguishes between Python modules and other assets
- Prevents accidental imports of project files

## Running Commands

You can run Django commands in two ways:

### From Project Root (Recommended)
```bash
python manage.py runserver
python manage.py migrate
python manage.py createsuperuser
```

### From src/ Directory
```bash
cd src
python manage.py runserver
python manage.py migrate
python manage.py createsuperuser
```

The root-level `manage.py` is a convenience wrapper that automatically configures the Python path to find the modules in `src/`.

## Deployment

When deploying to cPanel, the entire `src/` directory should be uploaded along with other project files. The `passenger_wsgi.py` file at the project root adds `src/` to the Python path, allowing Passenger to find the Django modules.
