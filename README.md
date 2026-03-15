# YUTU Studio Website - Django Edition

A Django-powered website for YUTU Studio with an integrated comic/webtoon reader.

## 🎉 Project Status

✅ **Successfully migrated from static HTML to Django!**

All original functionality is preserved, with added benefits of Django's framework for future enhancements.

## 🚀 Quick Start

### Local Development

```bash
# Activate virtual environment
source .venv/bin/activate

# Run development server
python manage.py runserver
```

Visit: http://localhost:8000

**See [LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md) for detailed development guide.**

### cPanel Deployment

**See [DJANGO_DEPLOYMENT_GUIDE.md](DJANGO_DEPLOYMENT_GUIDE.md) for complete deployment instructions.**

Quick checklist:
1. Setup Python App in cPanel
2. Upload files
3. Install requirements: `pip install -r requirements.txt`
4. Run migrations: `python manage.py migrate`
5. Create superuser: `python manage.py createsuperuser`
6. Restart app

## 📁 Project Structure

```
yutu-studio/
├── yutu_config/          # Django project configuration
├── pages/                # Static pages (Home, We, Business, Join, etc.)
├── comics/               # Comic reader app with admin
├── templates/            # HTML templates
├── static/               # CSS, JS, images
├── media/                # User uploads (comic pages)
├── manage.py             # Django management
├── passenger_wsgi.py     # cPanel WSGI entry point
└── requirements.txt      # Python dependencies
```

## 🎨 Features

### Current Features (Working Now)
- ✅ All original pages (Home, We, Business, Join, Projects, Contact)
- ✅ Comic/Webtoon reader with chapter navigation
- ✅ Responsive design (mobile & desktop)
- ✅ Multi-language support (EN, KR, VI)
- ✅ Contact form

### New Django Features
- ✅ **Admin Panel** at `/admin/` - Manage comics, chapters, pages
- ✅ **Database Backend** - SQLite (easily switch to MySQL)
- ✅ **Comic Management** - Upload and organize comics via admin
- ✅ **API Endpoints** - JSON API for comic data
- ✅ **User System** - Django auth ready for future features
- ✅ **Media Management** - Handle image uploads properly

## 📚 Documentation

- **[DJANGO_DEPLOYMENT_GUIDE.md](DJANGO_DEPLOYMENT_GUIDE.md)** - Complete cPanel deployment guide
- **[LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md)** - Local development setup and workflow
- **[COMIC-READER-README.md](COMIC-READER-README.md)** - Comic reader feature documentation

## 🛠 Technology Stack

- **Backend**: Django 6.0+
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Database**: SQLite (development), MySQL (production ready)
- **Image Processing**: Pillow
- **Server**: Passenger WSGI (cPanel)
- **Font**: Montserrat

## 🔐 Admin Panel

Access at: `/admin/`

### Creating Comics
1. Login to admin panel
2. Navigate to Comics
3. Add Comic → Add Chapters → Upload Pages
4. Pages appear in the comic reader automatically

## 🎯 Next Steps / Future Enhancements

- [ ] Migrate static comic data to database
- [ ] Update comic reader to fetch from database API
- [ ] Add user authentication for readers
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
