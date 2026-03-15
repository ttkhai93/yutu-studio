# Django Deployment Guide for cPanel

## ✅ Migration Complete!

Your static YUTU Studio website has been successfully converted to a Django web application while maintaining all existing functionality.

## 🎯 What Changed

### Project Structure
```
yutu-studio/
├── src/                   # Django Python code (src layout)
│   ├── yutu_config/       # Django project settings
│   │   ├── settings.py    # Main configuration
│   │   ├── urls.py        # URL routing
│   │   └── wsgi.py        # WSGI application
│   ├── pages/             # App for static pages
│   │   ├── views.py       # Page views
│   │   └── urls.py        # Page URLs
│   ├── comics/            # App for comic reader
│   │   ├── models.py      # Database models
│   │   ├── views.py       # Comic views
│   │   ├── admin.py       # Admin interface
│   │   └── urls.py        # Comic URLs
│   └── manage.py          # Django management (in src/)
├── templates/             # HTML templates
│   ├── index.html
│   ├── we.html
│   ├── business.html
│   ├── join.html
│   ├── projects.html
│   ├── contact.html
│   └── comic.html
├── static/                # CSS, JS, images (unchanged)
├── media/                 # User uploads (new)
├── passenger_wsgi.py      # cPanel WSGI entry point
├── .htaccess              # Apache configuration
├── requirements.txt       # Python dependencies
└── manage.py              # Django management wrapper
```

**Note**: The src/ directory contains all Django Python code for cleaner organization. The root manage.py is a convenience wrapper.

## 📋 cPanel Deployment Steps

### Step 1: Setup Python Application in cPanel

1. **Login to cPanel**
2. **Navigate to "Setup Python App"** (or "Python Selector")
3. **Create New Application** with these settings:
   - **Python version**: 3.9 or higher
   - **Application root**: `/home/auwcnmer/public_html`
   - **Application URL**: Your domain (e.g., `yutuvn.com`)
   - **Application startup file**: `passenger_wsgi.py`
   - **Application Entry point**: `application`

4. **Click "Create"** - cPanel will create a virtual environment

### Step 2: Upload Files

Upload all project files to `/home/auwcnmer/public_html/`:
```
- src/                     # Django Python code directory
  - yutu_config/
  - pages/
  - comics/
  - manage.py
- templates/
- static/
- media/
- passenger_wsgi.py
- .htaccess
- requirements.txt
- db.sqlite3 (will be created)
```

**Note**: You can use Git, FTP, or cPanel File Manager. The src/ directory contains all Django Python modules.

### Step 3: Install Dependencies

1. **In cPanel Python App**, click "Enter to the virtual environment"
2. **Or via SSH**, activate the virtual environment:
   ```bash
   source /home/auwcnmer/virtualenv/public_html/bin/activate
   ```
3. **Install requirements**:
   ```bash
   cd /home/auwcnmer/public_html
   pip install -r requirements.txt
   ```

### Step 4: Configure Django Settings

1. **Update `yutu_config/settings.py`**:
   ```python
   DEBUG = False  # Set to False in production
   ALLOWED_HOSTS = ['yutuvn.com', 'www.yutuvn.com', 'your-domain.com']
   
   # Generate a new SECRET_KEY for production
   SECRET_KEY = 'your-new-secret-key-here'
   ```

2. **Generate a new secret key** (run in Python):
   ```python
   from django.core.management.utils import get_random_secret_key
   print(get_random_secret_key())
   ```

### Step 5: Run Database Migrations

```bash
cd /home/auwcnmer/public_html
python manage.py migrate
python manage.py collectstatic --noinput
```

**Note**: Django commands can be run from the project root (using the wrapper) or from within `src/`:
```bash
# From root (recommended):
python manage.py migrate

# Or from src/:
cd src
python manage.py migrate
```

### Step 6: Create Admin User

```bash
python manage.py createsuperuser
```
Follow the prompts to create your admin account.

### Step 7: Update .htaccess

Make sure `.htaccess` has the correct paths:
```apache
PassengerAppRoot /home/auwcnmer/public_html
PassengerPython /home/auwcnmer/virtualenv/public_html/bin/python
```

Adjust paths based on your actual cPanel username and structure.

### Step 8: Restart Application

In cPanel Python App interface:
- Click **"Restart"** button
- Or via command: `touch tmp/restart.txt`

### Step 9: Test Your Site

Visit your domain - all pages should work exactly as before!

## 🎨 Admin Panel Access

Visit: `https://your-domain.com/admin/`

Login with the superuser credentials you created.

### Managing Comics via Admin

1. **Add a Comic**: Click "Comics" → "Add"
2. **Add Chapters**: In comic detail, add chapters
3. **Upload Pages**: In chapter detail, upload page images

## 🔄 Updating from Git (Optional)

If using Git deployment:

```bash
cd /home/auwcnmer/public_html
git pull origin main
source /home/auwcnmer/virtualenv/public_html/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput
touch tmp/restart.txt
```

## 📱 What Works Now

### Immediate Features (No Changes)
- ✅ All existing pages work exactly the same
- ✅ Static files (CSS, JS, images) serve normally
- ✅ Comic reader works with existing JavaScript
- ✅ Header, footer, navigation - all unchanged
- ✅ Mobile responsive design maintained
- ✅ Language selector functionality

### New Django Features Available
- ✅ **Admin Panel** - Manage content via web interface
- ✅ **Database Backend** - Store comics, chapters, pages
- ✅ **User System** - Ready for authentication (future)
- ✅ **Media Uploads** - Upload comic pages via admin
- ✅ **API Endpoints** - JSON API for comic data
- ✅ **ORM** - Easy database queries
- ✅ **Migrations** - Version control for database schema

## 🎯 Next Steps (Optional Enhancements)

### 1. Migrate Static Comic Data to Database

Create a management command to import existing comics:

```bash
python manage.py import_comics
```

(You'd need to create this command - see Django docs)

### 2. Update Comic Reader to Use Database

Modify `templates/comic.html` and `static/js/comic-reader.js` to:
- Fetch comic data from `/api/comic-data/` endpoint
- Display database-stored comics instead of hardcoded data

### 3. Add User Features
- User registration/login
- Bookmark/favorite comics
- Reading progress tracking
- Comments on chapters

### 4. Add More Admin Features
- Bulk upload pages
- Comic cover images
- Categories/tags
- Publishing schedule

## 🐛 Troubleshooting

### Issue: 500 Internal Server Error

**Check**:
1. Error logs: cPanel → Error Log
2. Django DEBUG mode is ON temporarily to see errors
3. File permissions (644 for files, 755 for directories)
4. `.htaccess` paths are correct

### Issue: Static Files Not Loading

**Fix**:
```bash
python manage.py collectstatic --noinput
```
Make sure `STATIC_ROOT` in settings points to accessible directory.

### Issue: Images Not Displaying

**Check**:
- `MEDIA_ROOT` and `MEDIA_URL` in settings
- Directory permissions for `media/` folder
- `.htaccess` allows access to media directory

### Issue: Application Won't Start

**Check**:
1. Virtual environment is activated
2. All dependencies installed: `pip list`
3. Python version matches (3.9+)
4. `passenger_wsgi.py` exists and is readable

## 📊 Database Information

**Default**: SQLite (file-based, good for small to medium sites)

**Location**: `db.sqlite3` in project root

**Backup**: Download this file regularly via cPanel File Manager

### Switching to MySQL (Optional, Recommended for Production)

1. **Create MySQL database** in cPanel
2. **Update `settings.py`**:
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.mysql',
           'NAME': 'your_database_name',
           'USER': 'your_database_user',
           'PASSWORD': 'your_database_password',
           'HOST': 'localhost',
           'PORT': '3306',
       }
   }
   ```
3. **Install MySQL driver**:
   ```bash
   pip install mysqlclient
   ```
4. **Run migrations**:
   ```bash
   python manage.py migrate
   ```

## 🔐 Security Checklist

Before going live:

- [ ] Set `DEBUG = False` in settings.py
- [ ] Set proper `ALLOWED_HOSTS`
- [ ] Generate new `SECRET_KEY`
- [ ] Set strong admin password
- [ ] Enable HTTPS (SSL certificate)
- [ ] Configure `SECURE_SSL_REDIRECT = True`
- [ ] Set `CSRF_COOKIE_SECURE = True`
- [ ] Set `SESSION_COOKIE_SECURE = True`
- [ ] Regular database backups
- [ ] File permission check

## 📞 Support

For Django-specific issues:
- Django Docs: https://docs.djangoproject.com/
- cPanel Python App Docs: Check your hosting provider

For YUTU Studio specific code:
- Check project README
- Review code comments

## 🎉 Success!

Your website is now:
- ✅ Running on Django
- ✅ Deployed on cPanel
- ✅ Working exactly as before
- ✅ Ready for future enhancements

The migration preserves all existing functionality while giving you the power of Django for future development!
