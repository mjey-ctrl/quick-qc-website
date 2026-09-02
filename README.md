# Quick QC Website

Marketing website for Quick QC catering — built with plain HTML, CSS, and JS (no build tools needed).

## How to open and edit in Visual Studio Code

1. Unzip this folder (if you downloaded it as a .zip) and open it in VS Code: **File > Open Folder** and select `quick-qc-website`.
2. Install the **Live Server** extension (search "Live Server" by Ritwick Dey in the Extensions tab) so you can preview changes instantly in your browser as you edit.
3. Right-click `index.html` in the file explorer and choose **Open with Live Server** to preview the site.

## File structure

```
quick-qc-website/
├── index.html      <- page structure and content (edit text/sections here)
├── css/
│   └── style.css   <- all styling: colors, fonts, spacing, layout
├── js/
│   └── main.js     <- small script for the nav bar scroll effect
└── assets/         <- put your real photos here (gallery, about section, etc.)
```

## Common edits

- **Prices**: search `style.css`/`index.html` for `₱XXX` in the Packages section and replace with real numbers.
- **Gallery photos**: drop image files into `assets/`, then in `index.html` replace the empty `<div class="cell">` gallery tiles with `<img src="assets/your-photo.jpg">` inside them.
- **Phone/Messenger/Instagram**: search for `+63 915 498 5170`, `m.me/QuickQc`, and `@quick.qc_` to update contact details.
- **Colors**: all colors are defined once at the top of `css/style.css` under `:root` (e.g. `--gold`, `--maroon`, `--black`) — change them there and they'll update everywhere.

## Deploying

Once you're happy with it, this folder can be deployed as-is to Vercel, Netlify, or GitHub Pages — no build step required, since it's static HTML/CSS/JS.
