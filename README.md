# Mini Portfolio

A simple personal portfolio site built with HTML, CSS, and JavaScript. Designed to deploy on [GitHub Pages](https://pages.github.com/).

## Project structure

```
01/
├── index.html          # Main page (all sections)
├── css/
│   └── style.css       # Styles
├── js/
│   └── main.js         # Mobile nav, footer year
├── assets/
│   └── favicon.svg     # Site icon
├── .gitignore
└── README.md
```

## Local preview

Open `index.html` in your browser, or use a local server:

```bash
# Python (if installed)
python -m http.server 8000
```

Then visit: http://localhost:8000

## Customize

1. Replace **Your Name**, email, and social links in `index.html`.
2. Update the **About** and **Projects** sections with your real content.
3. Edit colors in `css/style.css` (`:root` variables at the top).
4. Add project images to `assets/` if you want thumbnails later.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `username.github.io` or any repo name).
2. Push this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose branch **main** and folder **/ (root)**.
6. Save. Your site will be live at:
   - `https://YOUR_USERNAME.github.io/` (if repo is `username.github.io`)
   - `https://YOUR_USERNAME.github.io/YOUR_REPO/` (for other repo names)

## License

Personal use — customize freely.
