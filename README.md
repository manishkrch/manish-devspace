# Manish DevSpace

A modern, production-ready portfolio and blog site built with React, TypeScript, and Vite.

## Features
- SEO optimized with Open Graph, Twitter, and canonical meta tags
- Responsive, mobile-friendly design
- Contact and Subscribe forms (Google Apps Script backend)
- Blog, portfolio, and project pages
- Modern UI with Bootstrap and custom themes
- Linting and type checking for code quality

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+ recommended)

### Installation
```sh
npm install
```

### Development
```sh
npm run dev
```

### Production Build
```sh
npm run build
```

### Linting & Type Checking
```sh
npm run lint
```

## Deployment
- Deploys easily to Vercel, Netlify, or any static host.
- For Vercel: just connect your repo and deploy.

## Project Structure
- `src/pages/` – Main site pages (About, Blog, Contact, etc.)
- `src/components/` – Reusable UI components (Navbar, Contact, Subscribe)
- `src/blogs/` – Blog post pages
- `src/projects/` – Project detail pages
- `public/assets/images/` – Images (use `og-image.png` for social previews)

## SEO & Social
- All main pages include SEO meta tags and social preview images.
- Update `og:image` and meta tags in each page for best results.

## Customization
- Edit theme CSS in `public/assets/css/`
- Add or update content in `src/pages/`, `src/blogs/`, and `src/projects/`

## How to Add a New Blog Post (Article)

1. **Create the Blog Post Page:**
   - Add a new `.tsx` file for your post in `src/blogs/` (e.g., `blog-post-your-topic.tsx`).
   - Use an existing blog post file as a template for structure and meta tags.

2. **Add Post Metadata to YAML:**
   - Open `src/data/blog/blogPosts.yml`.
   - Add a new entry for your post with the following fields:
     - `title`: The blog post title
     - `slug`: A unique URL slug (e.g., `your-topic`)
     - `date`: Publication date (YYYY-MM-DD)
     - `excerpt`: Short summary for previews
     - `image`: Path to the preview image (e.g., `/assets/images/blog/your-image.png`)
     - `page`: Page number for pagination (integer)
     - `featured`: `true` if you want it featured, else `false`
     - `component`: The filename of your `.tsx` post (without extension)

   Example:
   ```yaml
   - title: Your Article Title
     slug: your-topic
     date: 2025-05-26
     excerpt: A quick summary of your new article.
     image: /assets/images/blog/your-image.png
     page: 1
     featured: false
     component: blog-post-your-topic
   ```

3. **Add Images (Optional):**
   - Place any images for your post in `public/assets/images/blog/`.
   - Reference them in your post and YAML entry as `/assets/images/blog/your-image.png`.

4. **No Route Changes Needed:**
   - The site will automatically detect and route to your new article using the YAML entry.
   - No manual changes to `App.tsx` or route files are required.

5. **Test Locally:**
   - Run `npm run dev` and verify your article appears on the blog home, About Me, and is accessible at `/blog/your-slug`.

6. **Commit and Deploy:**
   - Commit your changes and push to your repository.
   - Run the deploy script from the project root:
     ```bash
     ./deploy.sh "Add new blog post"
     ```
   - This will deploy your changes to both GitHub and Vercel.

---

## How to Add a New Project (Portfolio Case Study)

1. **Create the Project Page:**
   - Add a new `.tsx` file for your project in `src/projects/` (e.g., `project-your-project-name.tsx`).
   - Use an existing project file as a template for structure and meta tags.

2. **Add Project Metadata to YAML:**
   - Open `src/data/portfolio/portfolioProjects.yml`.
   - Add a new entry for your project with the following fields:
     - `title`: The project title
     - `description`: Short description for previews
     - `image`: Path to the preview image (e.g., `/assets/images/project/your-image.png`)
     - `link`: The route for the project (e.g., `/project-your-project-name`)
     - `client`: Client or company name
     - `categories`: List of categories (e.g., `[webapp, backend, devops]`)

   Example:
   ```yaml
   - title: Your Project Title
     description: A short summary of your project.
     image: /assets/images/project/your-image.png
     link: /project-your-project-name
     client: Your Client Name
     categories: [webapp, backend]
   ```

3. **Add Images (Optional):**
   - Place any images for your project in `public/assets/images/project/`.
   - Reference them in your project and YAML entry as `/assets/images/project/your-image.png`.

4. **No Route Changes Needed:**
   - The site will automatically detect and route to your new project using the YAML entry.
   - No manual changes to `App.tsx` or route files are required.

5. **Test Locally:**
   - Run `npm run dev` and verify your project appears on the Portfolio page, About Me, and is accessible at the route you specified (e.g., `/project-your-project-name`).

6. **Commit and Deploy:**
   - Commit your changes and push to your repository.
   - Run the deploy script from the project root:
     ```bash
     ./deploy.sh "Add new project"
     ```
   - This will deploy your changes to both GitHub and Vercel.

For more details, see comments in the YAML files and the templates in `src/blogs/` and `src/projects/`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

_Last updated: May 20, 2025_
