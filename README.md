# Industrial DevOps Now — Website

The code-built website for **industrialdevopsnow.com**. Plain static HTML/CSS — no website
builder, no framework, no build step. Edit the `.html` files directly and refresh.

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `about.html` | About (bios) |
| `community.html` | Community / speaking engagements |
| `workshop.html` | AI-Powered Product Development workshop |
| `presentations.html` | Past presentations (downloads) |
| `contact.html` | Contact form |
| `assets/style.css` | Shared styles (brand colors + Work Sans) |
| `assets/ido-cover.jpg` | Industrial DevOps book cover |

## Brand
- Teal `#256e8e` (dark `#174c63`, light `#3288ad`)
- Ink `#1b1b1b`, light panel `#f7f7f7`
- Font: Work Sans

## Editing
Open any `.html` file, change the text, save, refresh the browser. To preview the whole site,
just open `index.html` in a browser (or run `python3 -m http.server` in this folder).

## To finish later
- **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste its ID
  into `contact.html` (replace `YOUR_FORM_ID`).
- **Presentations:** drop the real PDF into `assets/` and update the link in `presentations.html`.

## Hosting
Deployed via GitHub Pages; the custom domain industrialdevopsnow.com is pointed here via DNS.
See the `CNAME` file once hosting is configured.
