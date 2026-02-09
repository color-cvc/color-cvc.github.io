# Color Group @ CVC — Website

This is the source code for the [Color Group @ CVC](https://color.cvc.uab.cat) website. It is built with [Jekyll](https://jekyllrb.com/) using a customized version of the [al-folio](https://github.com/alshedivat/al-folio) theme.

---

## Table of Contents

1. [Running Locally](#running-locally)
2. [How Deployment Works](#how-deployment-works)
3. [Adding a New Publication](#adding-a-new-publication)
4. [Adding a News Item](#adding-a-news-item)
5. [Modifying Team Members](#modifying-team-members)
6. [Creating a Project / Dataset Page](#creating-a-project--dataset-page)
7. [Editing Existing Pages](#editing-existing-pages)
8. [Project Structure](#project-structure)
9. [Common Pitfalls](#common-pitfalls)

---

## Running Locally

### Prerequisites

- **Ruby** (>= 3.0) and **Bundler** (`gem install bundler`)
- **ImageMagick** (for automatic image optimization)

### Steps

```bash
# 1. Install dependencies (only needed the first time or after Gemfile changes)
bundle install

# 2. Build and serve the site locally
LC_ALL=en_US.UTF-8 bundle exec jekyll serve
```

Then open [http://127.0.0.1:4000](http://127.0.0.1:4000) in your browser.

> **Why `LC_ALL=en_US.UTF-8`?** Some BibTeX entries in `papers.bib` contain special characters (accents, etc.) that require UTF-8 encoding. Without this flag the build may fail with an encoding error.

---

## How Deployment Works

The site is **automatically deployed** on the CVC website. One of the servers in the CVC pulls this repo every day to check for updates. Then it updates [https://color.cvc.uab.cat](https://color.cvc.uab.cat) accordingly.

---

## Adding a New Publication

### Step 1 — Add the BibTeX entry

Edit **`_bibliography/papers.bib`** and add your entry. The file already defines string abbreviations for common venues at the top (e.g., `CVPR`, `ICCV`, `ECCV`, `PAMI`, `TIP`, `TMM`, etc.), so you can use them directly in the `booktitle` or `journal` field.

#### Conference paper example

```bibtex
@inproceedings{yourname2025,
  title   = {Your Paper Title},
  author  = {Last1, First1 and Last2, First2 and Last3, First3},
  booktitle = CVPR,
  year    = {2025},
  preview = {cvpr25_yourpaper.png},
  arxiv   = {2501.12345},
  code    = {https://github.com/your-org/your-repo},
  web     = {https://yourproject.github.io/},
}
```

#### Journal paper example

```bibtex
@article{yourname2025journal,
  title   = {Your Paper Title},
  author  = {Last1, First1 and Last2, First2},
  journal = PAMI,
  year    = {2025},
  preview = {pami25_yourpaper.png},
  paper   = {https://ieeexplore.ieee.org/abstract/document/XXXXXXX},
  arxiv   = {2501.12345},
}
```

#### Available custom fields

All of these are optional. They generate buttons/badges next to the publication:

| Field | What it does |
|-------|-------------|
| `preview` | Thumbnail image filename (stored in `assets/img/publication_preview/`) |
| `arxiv` | arXiv ID — generates an "arXiv" button linking to `arxiv.org/abs/<id>` |
| `paper` | Direct URL to the published PDF |
| `code` | Link to code repository |
| `web` | Link to project website |
| `dataset` | Link to dataset page (e.g., `/datasets/yourdata/`) |
| `video` | Link to a video presentation |
| `poster` | Link or filename for the poster (if just a filename, it looks in `assets/pdf/`) |
| `slides` | Link or filename for slides |
| `supp` | Link to supplementary material |
| `abstract` | The paper abstract (shown in a collapsible block) |
| `bibtex_show` | Set to `{false}` to hide BibTeX citation button |
| `selected` | Set to `{true}` to feature on the homepage (if enabled) |

### Step 2 — Add a preview image

Save a thumbnail image in **`assets/img/publication_preview/`**. The filename must match the `preview` field in your BibTeX entry exactly (case-sensitive).

- Recommended size: ~400x300 pixels (landscape)
- Formats: PNG or JPG (recommend compressing all the images)

### Step 3 — Build and check

```bash
LC_ALL=en_US.UTF-8 bundle exec jekyll serve
```

Visit [http://127.0.0.1:4000/publications/](http://127.0.0.1:4000/publications/) to verify your paper appears correctly.

### Step 4 — Project Page
We highly encorage to create a custom project website that describes the paper publications. Please check the [Creating a Project / Dataset Page](#creating-a-project--dataset-page) section for further info.

---

## Adding a News Item

Create a new Markdown file in **`_news/`**, for example `_news/my_news.md`:

```markdown
---
layout: post
date: 2025-06-15 12:00:00-0400
inline: true
related_posts: false
---

Our paper <a href='https://link-to-paper.com'>Paper Title</a> has been accepted to CVPR 2025!
```

- `inline: true` makes the news appear as a single line on the homepage.
- The `date` field determines the order (newest first).
- You can use HTML inside the content for links and formatting.

---

## Modifying Team Members

Edit **`_data/team.yml`**. The file has three sections:

### Current members

```yaml
current:
  - first_name: Name
    last_name: Surname
    position: PhD Student        # Professor, Postdoc, PhD Student, Visiting Student, etc.
    personal_website: https://... # optional — makes the card clickable
    image: name_surname.jpg       # optional — photo filename. If not, color checker.
    email: name@example.com       # optional
```

### PhD alumni

```yaml
phd_alumni:
  - first_name: Name
    last_name: Surname
    position: PhD
    year: 2024
    thesis_title: "Title of the PhD thesis"   # optional
    moved_to: "Postdoc at University X"       # optional
    personal_website: https://...             # optional
```

### Other alumni

```yaml
other_alumni:
  - first_name: Name
    last_name: Surname
    position: MSc intern        # e.g., Undergrad intern, Visiting student
    year: "2023-2024"
    moved_to: "MSc at University Y"
    personal_website: https://...
```

### Profile photos

Save the photo in **`assets/img/team/`** and reference the filename in the `image` field. Use a square-ish photo for best results.

### Automatic highlighting in publications

Team members (current and alumni) are **automatically highlighted in bold** in the publications list. The matching is done by first and last name against the entries in `_data/team.yml`. No extra configuration is needed.

---

## Creating a Project / Dataset Page

### Step 1 — Create the page

Create a new Markdown file in **`_project_pages/`**, for example `_project_pages/my-dataset.md`:

```yaml
---
layout: page
title: "Your Dataset or Project Title"
permalink: /my-dataset/
img: assets/img/my-dataset/teaser.jpg   # thumbnail for the datasets listing
date: 2025-06-01                         # MUST be YYYY-MM-DD format
dataset: true                            # set to true to show in /datasets/
hide_navbar: true                        # hides the top navigation bar
---

Your content here (Markdown + HTML).
```

The dataset parameter should be true, if one of the contributions of the paper is a dataset. Then, the project website will be shown in the Datsets section of the website.

### Step 2 — Add images

Create a folder for your images, e.g., **`assets/img/my-dataset/`**, and place your teaser, figures, etc. there.

### Step 3 — Write the content

Look at the existing project pages for reference:
- `_project_pages/mill.md` — good example with carousel, BibTeX citation, acknowledgments
- `_project_pages/revisitingmiwb.md` — example with multiple citations
- `_project_pages/relighting_from_image.md` — example with download sections

Be as creative as you want. For example, use sliders to show results, or image carrousel to display more images as in `/mill` website.

Common sections: authors & affiliations, action buttons (paper, code, etc.), teaser image, dataset overview, download links, BibTeX citation, acknowledgments.

### Important notes

- **`dataset: true`** makes the page appear in the [/datasets/](https://color-cvc.github.io/datasets/) listing.
- **`permalink`** sets the URL. Use a short, lowercase slug (e.g., `/my-dataset/`).
- **`date`** must be in `YYYY-MM-DD` format. See [Common Pitfalls](#common-pitfalls) for why.

---

## Editing Existing Pages

All main pages live in **`_pages/`**:

| File | URL | What it is |
|------|-----|------------|
| `about.md` | `/` | Homepage — group description and news |
| `profiles.md` | `/team/` | Team page — reads from `_data/team.yml` |
| `publications.md` | `/publications/` | Publication list — auto-generated from `_bibliography/papers.bib` |
| `datasets.md` | `/datasets/` | Dataset listing — shows `_project_pages` with `dataset: true` |
| `projects.md` | `/projects/` | Project gallery |
| `join.md` | `/join/` | Recruitment information |
| `news.md` | `/news/` | Full news archive |

Most pages use `layout: page` and contain either Markdown content or Liquid template code. The publications page is mostly automatic — it just renders whatever is in `papers.bib`.

---

## Project Structure

```
color-cvc.github.io/
├── _bibliography/
│   └── papers.bib                 # All publications (BibTeX)
├── _data/
│   ├── team.yml                   # Team members and alumni
│   ├── coauthors.yml              # Co-author URL mappings
│   ├── venues.yml                 # Venue name mappings
│   └── socials.yml                # Social media links
├── _layouts/                      # Page templates
│   ├── default.liquid             # Base layout (head, navbar, footer)
│   ├── page.liquid                # Standard page layout
│   ├── about.liquid               # Homepage layout
│   └── bib.liquid                 # Publication entry template
├── _news/                         # News items (one .md per item)
├── _pages/                        # Main site pages
│   ├── about.md                   # Homepage
│   ├── profiles.md                # Team page
│   ├── publications.md            # Publications
│   ├── datasets.md                # Datasets listing
│   ├── join.md                    # Join the group
│   └── ...
├── _project_pages/                # Project and dataset pages
│   ├── mill.md
│   ├── revisitingmiwb.md
│   └── relighting_from_image.md
├── assets/
│   ├── css/main.scss              # Custom styles
│   ├── fonts/                     # Custom fonts (Monoska, etc.)
│   └── img/
│       ├── team/                  # Team member photos
│       ├── publication_preview/   # Publication thumbnails
│       └── ...                    # Other images
├── _config.yml                    # Site configuration
├── Gemfile                        # Ruby dependencies
└── .github/workflows/deploy.yml   # Automatic deployment
```

---

## Common Pitfalls

### Date format

Always use **`YYYY-MM-DD`** (e.g., `2025-11-01`) in front matter. Ambiguous formats like `11-2025` get misinterpreted by Ruby's date parser and may cause your page to silently not appear.

### Case-sensitive image paths

GitHub Pages runs on Linux, where file paths are **case-sensitive**. If your file is called `MyImage.png`, the path must match exactly — `myimage.png` will return a 404.

### UTF-8 encoding

Always build with `LC_ALL=en_US.UTF-8` to avoid encoding errors from special characters in `papers.bib`:

```bash
LC_ALL=en_US.UTF-8 bundle exec jekyll serve
```

### Preview images

The `preview` field in your BibTeX entry must match the filename in `assets/img/publication_preview/` **exactly** (including case and extension).

### Pages not showing up

If a page you created doesn't appear on the site:
1. Check the `date` field is in `YYYY-MM-DD` format and is **not in the future**
2. Check the `permalink` is set and unique
3. Check for YAML syntax errors in the front matter (the `---` block at the top)
4. Look at the build output for errors: `LC_ALL=en_US.UTF-8 bundle exec jekyll build --verbose`
