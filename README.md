# Arief Danial Portfolio

A single-page personal portfolio built with plain HTML, CSS, and JavaScript.

## Features

- Hero intro section with theme toggle (dark/light)
- Projects and education/experience sections
- Contact links and downloadable CV
- Lightweight local page-view counter using `localStorage`
- No build tooling required

## Project structure

- **index.html** – Main portfolio layout and content
- **styles.css** – Styling, theme variables, and responsive behavior
- **script.js** – Theme persistence, hit counter, and small UI behaviors
- **resume.pdf** – CV download target used by the header button

## Run locally

Because this is a static site, you can open `index.html` directly in your browser.

If you prefer serving it over HTTP:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize

- Update profile content and links in `index.html`
- Replace/add your profile image as `avatar.png` (fallback avatar is automatic)
- Adjust colors/spacing via CSS variables in `styles.css`

## Deployment

Deploy with GitHub Pages (or any static host) by pushing these files to a repository and enabling static site hosting from the default branch.
