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

## Adding a New Blog Post

Blog posts are now managed via a central YAML file and automated routing. To add a new blog post:

1. **Create the Blog Post Page:**
   - Add a new `.tsx` file for your post in `src/blogs/` (e.g., `blog-post-my-new-topic.tsx`).
   - Use an existing blog post file as a template for structure and meta tags.

2. **Add Post Metadata to YAML:**
   - Open `src/blogPosts.yml`.
   - Add a new entry for your post with the following fields:
     - `title`: The blog post title
     - `slug`: A unique URL slug (e.g., `my-new-topic`)
     - `date`: Publication date (YYYY-MM-DD)
     - `summary`: Short summary for previews
     - `image`: Path to the preview image (e.g., `/assets/images/blog/my-image.png`)
     - `page`: Page number for pagination (integer)
     - `featured`: `true` if you want it featured, else `false`
     - `component`: The filename of your `.tsx` post (without extension)

   Example:
   ```yaml
   - title: My New Topic
     slug: my-new-topic
     date: 2025-05-26
     summary: A quick summary of my new blog post.
     image: /assets/images/blog/my-image.png
     page: 1
     featured: false
     component: blog-post-my-new-topic
   ```

3. **Add Images (Optional):**
   - Place any images for your post in `public/assets/images/blog/`.
   - Reference them in your post and YAML entry as `/assets/images/blog/your-image.png`.

4. **No Route Changes Needed:**
   - The site will automatically detect and route to your new post using the YAML entry.
   - No manual changes to `App.tsx` or route files are required.

5. **Test Locally:**
   - Run `npm run dev` and verify your post appears on the blog home, About Me, and is accessible at `/blog/your-slug`.

6. **Commit and Deploy:**
   - Commit your changes and push to your repository. Deploy as usual.

For more details, see comments in `src/blogPosts.yml` and the templates in `src/blogs/`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

---

_Last updated: May 20, 2025_
