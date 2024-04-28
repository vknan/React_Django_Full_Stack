"""
WSGI config for myproject project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""


import os
import sys

# Add your project directory to the sys.path
project_home = '/home/vknan/NAVIKONLKINE/React_Django_Full_Stack/Vijay_Portfolio/'  # Path to your Django project directory
if project_home not in sys.path:
    sys.path.append(project_home)

# Set environment variable to use your project's settings
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "myproject.settings.production")

# Configure Django application
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
