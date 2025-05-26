import yaml from 'js-yaml';
import blogPostsYml from '../../src/blogPosts.yml?raw';

// Parse YAML blog posts
export const parsedBlogPosts = yaml.load(blogPostsYml) as any[];

// Helper to map YAML to blogPosts array format
export function mapYamlToBlogPosts(yamlPosts: any[]): any[] {
  return yamlPosts.map(post => ({
    id: post.id,
    title: post.title,
    date: new Date(post.date).toLocaleString('default', { month: 'long', year: 'numeric' }),
    time: post.time || '',
    comments: post.comments || 0,
    image: post.image,
    intro: post.excerpt,
    link: `/blog-post-${post.slug}`,
    slug: post.slug,
    excerpt: post.excerpt,
    page: post.page,
    featured: post.featured,
  }));
}
