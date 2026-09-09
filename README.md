# Cloudflare Portfolio, Blog & Process Guides with In-Browser CMS

A blazing-fast, two-sided personal website featuring an interactive Bento Grid with tactile glassmorphism aesthetics, an interactive career resume, an engineering blog, and specialized process guide notebooks (**Notes from the Field** and **Notes from the Lab**).

Includes an integrated in-browser CMS (`/admin`) for editing content directly in your web browser.

---

## 🌟 Key Features

1. **Bento Grid Hub with Glassmorphism**:
   - Translucent cards with specular gradient borders, ambient glow, and cursor-following highlights.
   - Dedicated portal cards:
     - ✍️ **Blog** (`/blog`)
     - 💼 **Resume** (`/resume`)
     - ⚡ **Process Guides (Notes from the Field)** (`/guides/field`)
     - 🧪 **Process Guides (Notes from the Lab)** (`/guides/lab`)
     - 🚀 **Featured Projects** (`/projects`)
2. **Two-Sided Architecture**:
   - **Side A**: Professional portfolio, interactive career timeline with category filters, and printable/save-to-PDF resume view.
   - **Side B**: Publication platform with categorized essays, field runbooks/SOPs, and lab benchmark logs.
3. **In-Browser CMS (`/admin`)**:
   - Built on Git-backed Sveltia/Decap CMS.
   - Write articles, log experiments, add projects, and modify your resume from any browser with instant live previews.
4. **100% Free Cloudflare Pages Deployment**:
   - Static zero-cost hosting worldwide on Cloudflare's global edge network.
   - Free `*.pages.dev` subdomain with automatic HTTPS and instant cache invalidation.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Navigate to the project directory
cd cloudflare-portfolio-blog

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## ✍️ Using the In-Browser CMS (`/admin`)

Visit `http://localhost:4321/admin` to open the content manager.

You can manage all 5 content collections:
* **Blog Posts** (`src/content/blog/`)
* **Process Guides (Notes from the Field)** (`src/content/guides-field/`)
* **Process Guides (Notes from the Lab)** (`src/content/guides-lab/`)
* **Portfolio Projects** (`src/content/projects/`)
* **Resume & Experience** (`src/data/resume.json`)

---

## ☁️ How to Deploy to Cloudflare Pages (Free in 3 Steps)

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit of two-sided portfolio and blog"
git remote add origin https://github.com/YOUR_USERNAME/cloudflare-portfolio-blog.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Log into your free [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your `cloudflare-portfolio-blog` repository.
4. Set the build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Your site will be live at `https://your-project.pages.dev` in ~30 seconds!

### Step 3: Link GitHub Authentication for `/admin`
In `public/admin/config.yml`, replace `your-username/your-repo-name` with your actual repository path.
When you log in at `https://your-project.pages.dev/admin`, authenticate with GitHub to create and publish posts directly from your browser!
