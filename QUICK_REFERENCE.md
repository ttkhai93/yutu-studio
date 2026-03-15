# Quick Reference Guide

## ⚡ Essential Commands

### Development
```bash
# Start development server
python manage.py runserver

# Access admin panel
http://localhost:8000/admin/
```

### First Time Setup
```bash
# Create superuser for admin access
python manage.py createsuperuser

# Run this command if you see database errors
python manage.py migrate
```

## 🌐 URLs

### Local Development
- Home: http://localhost:8000/
- Admin: http://localhost:8000/admin/
- Comic Reader: http://localhost:8000/comic.html

### Production (After Deployment)
- Home: https://your-domain.com/
- Admin: https://your-domain.com/admin/
- Comic Reader: https://your-domain.com/comic.html

## 📁 Important Files

| File | Purpose |
|------|---------|
| `manage.py` | Django management wrapper (root level) |
| `src/manage.py` | Django management script (actual) |
| `src/yutu_config/settings.py` | Main configuration |
| `src/pages/` | Static pages app |
| `src/comics/` | Comic reader app |
| `templates/` | HTML templates |
| `static/` | CSS, JS, images |
| `passenger_wsgi.py` | cPanel entry point |
| `.htaccess` | Apache configuration |
| `requirements.txt` | Python dependencies |
| `db.sqlite3` | Database file |

**Note**: All Django Python code lives in the `src/` directory for cleaner organization.

## 🎨 Adding Content

### Add Comics via Admin
1. Login: http://localhost:8000/admin/
2. Click "Comics" → "Add comic"
3. Fill title, save
4. Add chapters within comic
5. Upload page images to chapters

## 🚀 Deployment Checklist

- [ ] Files uploaded to `/home/auwcnmer/public_html/`
- [ ] Virtual environment created in cPanel
- [ ] Installed: `pip install -r requirements.txt`
- [ ] Updated `settings.py`: `DEBUG = False`, `ALLOWED_HOSTS`
- [ ] Run: `python manage.py migrate`
- [ ] Run: `python manage.py collectstatic`
- [ ] Created superuser: `python manage.py createsuperuser`
- [ ] Updated `.htaccess` paths if needed
- [ ] Restarted application in cPanel
- [ ] Tested all pages

## 🔧 Troubleshooting

### Local Issues

**Can't start server:**
```bash
source .venv/bin/activate
python manage.py runserver
```

**Database error:**
```bash
python manage.py migrate
```

**Static files not loading:**
```bash
python manage.py collectstatic
```

### Production Issues

**500 Error:**
- Check cPanel error logs
- Verify `.htaccess` paths
- Ensure `DEBUG = False` in settings.py

**Admin can't login:**
```bash
python manage.py createsuperuser
```

**Images not showing:**
- Check `MEDIA_ROOT` and `MEDIA_URL` in settings
- Verify media folder permissions (755)

## 📚 Documentation

- **Full deployment guide**: [DJANGO_DEPLOYMENT_GUIDE.md](DJANGO_DEPLOYMENT_GUIDE.md)
- **Local development**: [LOCAL_DEVELOPMENT.md](LOCAL_DEVELOPMENT.md)
- **Comic reader**: [COMIC-READER-README.md](COMIC-READER-README.md)
- **Project overview**: [README.md](README.md)

## ⚡ Quick Verification

Run verification script:
```bash
python verify_setup.py
```

Should see: "🎉 All checks passed!"

## 🆘 Need Help?

1. Check error logs (cPanel or terminal)
2. Review documentation files
3. Run: `python manage.py check`
4. Search Django docs: https://docs.djangoproject.com/

---

**✅ Everything ready! Your Django app is configured for both local development and cPanel deployment.**
