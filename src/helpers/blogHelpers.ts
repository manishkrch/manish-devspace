// src/helpers/blogHelpers.ts

// Helper to get blog post route and component name from a post object
export function getBlogPostRouteAndComponent(post: any) {
  // Slug: blog-post-my-new-blog-post
  const route = `/blog-post-${post.slug}`;
  // Component: BlogPostMyNewBlogPost
  const componentName =
    'BlogPost' +
    post.slug
      .split('-')
      .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
      .join('');
  return { route, componentName };
}
