#!/usr/bin/env python
"""
Django management wrapper for src layout.
This wrapper allows running 'python manage.py' from the project root
instead of 'python src/manage.py'.
"""

import os
import sys
from pathlib import Path

if __name__ == "__main__":
    # Add src directory to Python path
    src_path = Path(__file__).resolve().parent / "src"
    sys.path.insert(0, str(src_path))

    # Set Django settings module
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "yutu_config.settings")

    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    execute_from_command_line(sys.argv)
