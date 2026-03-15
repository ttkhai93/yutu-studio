import os
import sys

# Add your project directory to the sys.path
project_home = os.path.dirname(os.path.abspath(__file__))
src_path = os.path.join(project_home, "src")

# Add both project root and src directory to path
if project_home not in sys.path:
    sys.path.insert(0, project_home)
if src_path not in sys.path:
    sys.path.insert(0, src_path)

# Set environment variable for Django settings
os.environ["DJANGO_SETTINGS_MODULE"] = "yutu_config.settings"

# Activate your virtual environment
# Note: Update this path based on your cPanel virtual environment location
activate_this = os.path.join(project_home, "virtualenv/bin/activate_this.py")
if os.path.exists(activate_this):
    exec(open(activate_this).read(), {"__file__": activate_this})

# Import Django WSGI application
from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
