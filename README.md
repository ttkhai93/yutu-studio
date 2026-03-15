# YUTU Studio - Django Website

Django-powered website for YUTU Studio with integrated comic/webtoon reader.

**Tech Stack:** Django 6.0+ | SQLite/MySQL | Pillow | Passenger WSGI

---

## 🚀 Quick Start

### Local Development
```bash
source .venv/bin/activate
python manage.py runserver
```
Visit: http://localhost:8000 | Admin: http://localhost:8000/admin/

### Create Admin User
```bash
python manage.py createsuperuser
```

---

## 📁 Project Structure

```
yutu-studio/
├── src/                     # Django Python code
│   ├── yutu_config/        # Settings, URLs, WSGI
│   ├── pages/              # Static pages app
│   ├── comics/             # Comic reader app (models, views, admin)
│   └── manage.py           # Django management
├── templates/              # HTML templates
├── static/                 # CSS, JS, images
├── media/                  # User uploads
├── passenger_wsgi.py       # cPanel entry point
├── .htaccess              # Apache config
└── requirements.txt        # Dependencies
```

---

## 🎨 Features

**Pages:** Home, We, Business, Join, Projects, Contact  
**Comic Reader:** Chapter/page navigation, keyboard shortcuts (←→[])  
**Admin Panel:** `/admin/` - Manage comics, chapters, pages via web interface  
**API:** `/api/comic-data/` - JSON endpoint for comic data  
**Responsive:** Mobile & desktop optimized

---

## 🛠 Development Commands

```bash
# Database
python manage.py migrate                    # Apply migrations
python manage.py makemigrations             # Create migrations

# Static files
python manage.py collectstatic              # Collect for production

# Django shell
python manage.py shell                      # ORM access
```

### Development Workflow
1. Edit files in `src/` (models, views) or `templates/`
2. Template changes show immediately; Python changes need restart
3. After model changes: `makemigrations` → `migrate`
4. For production: `collectstatic`

---

## 🚀 cPanel Deployment

### 1. Setup Python App
- cPanel → "Setup Python App"
- Python 3.9+, Application root: `/home/auwcnmer/public_html`
- Startup file: `passenger_wsgi.py`, Entry: `application`

### 2. Upload Files
Upload all project files (src/, templates/, static/, etc.) to `/home/auwcnmer/public_html/`

### 3. Configure & Install
```bash
# Activate virtual environment
source /home/auwcnmer/virtualenv/public_html/bin/activate

# Install dependencies
pip install -r requirements.txt

# Update settings.py
DEBUG = False
ALLOWED_HOSTS = ['yutuvn.com', 'www.yutuvn.com']
SECRET_KEY = 'new-secret-key'  # Generate new!

# Run migrations
python manage.py migrate
python manage.py collectstatic --noinput
python manage.py createsuperuser
```

### 4. Update .htaccess
```apache
PassengerAppRoot /home/auwcnmer/public_html
PassengerPython /home/auwcnmer/virtualenv/public_html/bin/python
```

### 5. Restart
cPanel Python App → Click "Restart" or `touch tmp/restart.txt`

---

## 📖 Comic Reader

### Current: Static Demo
- Data in `static/js/comic-reader.js`
- Images in `static/images/COMICS/chapter[1-3]/`
- Keyboard: ←→ pages, [] chapters

### Admin: Database Management
1. Login to `/admin/`
2. Comics → Add comic → Add chapters → Upload pages
3. API endpoint ready at `/api/comic-data/`

### Add New Comics
**Static method:**
1. Add images to `static/images/COMICS/[comic-name]/chapter[N]/`
2. Update `comicData` object in `comic-reader.js`

**Database method:**
Use admin panel to upload comics

---

## 🐛 Troubleshooting

### Local Issues
```bash
# Server won't start
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate

# Database errors
rm db.sqlite3
python manage.py migrate

# Static files not loading
python manage.py collectstatic
```

### Production Issues
- **500 Error:** Check cPanel error logs; verify `.htaccess` paths; temporarily set `DEBUG = True` to see errors
- **Static files broken:** Run `collectstatic`; check `STATIC_ROOT` in settings
- **Images not showing:** Verify `MEDIA_ROOT` and `MEDIA_URL` in settings
- **App not updating:** Restart via cPanel or `touch tmp/restart.txt`

---

## 📋 URLs Reference

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/we.html` |
| Business | `/business.html` |
| Join | `/join.html` |
| Projects | `/projects.html` |
| Contact | `/contact.html` |
| Comic Reader | `/comic.html` |
| Admin | `/admin/` |
| API | `/api/comic-data/` |
- [ ] Implement reading progress tracking
- [ ] Add comments system for chapters
- [ ] Create categories/tags for comics
- [ ] Add search functionality
- [ ] Implement bookmarks/favorites
- [ ] Add RSS feed for new chapters
- [ ] Multi-comic support

## 🐛 Troubleshooting

### Local Issues

**Server won't start:**
```bash
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
```

**Static files not loading:**
```bash
python manage.py collectstatic
```

### Production Issues

**500 Error on cPanel:**
- Check error logs in cPanel
- Verify `.htaccess` paths
- Ensure virtual environment is activated
- Check file permissions

**See deployment guide for detailed troubleshooting.**

## 📞 Support

- Django Documentation: https://docs.djangoproject.com/
- Project Issues: Contact development team
- cPanel Support: Contact hosting provider

## 🙏 Credits

- **YUTU Studio** - Original website design and content
- **Django** - Web framework
- **Montserrat Font** - Google Fonts

## 📄 License

© 2026 YUTU Studio. All rights reserved.

---

## ⚠️ Important Notes

### Before Deploying to Production:

1. **Update settings.py:**
   ```python
   DEBUG = False
   ALLOWED_HOSTS = ['yutuvn.com', 'www.yutuvn.com']
   SECRET_KEY = 'generate-new-secret-key'
   ```

2. **Run security checks:**
   ```bash
   python manage.py check --deploy
   ```

3. **Enable HTTPS** and configure SSL settings

4. **Set up regular database backups**

### Compatibility

✅ **Works on cPanel with:**
- Python 3.9+
- Setup Python App feature
- SSH access (recommended)
- Passenger WSGI support

✅ **Original functionality preserved:**
- All pages work exactly as before
- Static files unchanged
- Comic reader works with existing images
- No breaking changes to user experience

---

**🎉 Your YUTU Studio website is now powered by Django!**

Ready for development, deployment, and future enhancements.
