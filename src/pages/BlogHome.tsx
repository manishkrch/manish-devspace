import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { Helmet } from 'react-helmet-async';
import { parsedBlogPosts, mapYamlToBlogPosts } from '../data/blogPosts';

// Parse YAML blog posts
const blogPosts = mapYamlToBlogPosts(parsedBlogPosts);

const BlogHome: React.FC = () => {
  // For demo, get page 1. In real app, get page from URL or state
  const [page, setPage] = React.useState(1);
  const posts = blogPosts.filter(post => post.page === page);

  return (
    <>
      <Helmet>
        <title>Blog | Manish Kumar</title>
        <meta name="description" content="Read actionable tips and real-world lessons on automation, cloud, and engineering leadership from Manish Kumar." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manish Kumar Choudhary" />
        <meta name="copyright" content="© 2025 Manish Kumar Choudhary" />
        <meta name="generator" content="React, Vite, TypeScript" />
        <meta name="ai-content" content="false" />
        <meta property="og:title" content="Blog | Manish Kumar" />
        <meta property="og:description" content="Read actionable tips and real-world lessons on automation, cloud, and engineering leadership from Manish Kumar." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manish-devspace.vercel.app/blog" />
        <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="manish-devspace.vercel.app" />
        <meta property="twitter:url" content="https://manish-devspace.vercel.app/blog" />
        <meta name="twitter:title" content="Blog | Manish Kumar" />
        <meta name="twitter:description" content="Read actionable tips and real-world lessons on automation, cloud, and engineering leadership from Manish Kumar." />
        <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:site" content="@manishkrch" />
        <link rel="canonical" href="https://manish-devspace.vercel.app/blog" />
      </Helmet>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Cloud, DevOps & AI Insights</h2>
          <div className="intro">Actionable tips and real-world lessons on automation, cloud, and engineering leadership—straight from my experience in the field.</div>
          <Subscribe />
        </div>
      </section>
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
          {/* Blog posts for current page */}
          {posts.map(post => (
            <div className="item mb-5" key={post.id}>
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={post.image} alt={post.title} />
                <div className="media-body">
                  <h3 className="title mb-1"><Link to={post.link}>{post.title}</Link></h3>
                  <div className="meta mb-1">
                    <span className="date">{post.date}</span>
                  </div>
                  <div className="intro">{post.excerpt}</div>
                  <Link className="more-link" to={post.link}>Read more &rarr;</Link>
                </div>
              </div>
            </div>
          ))}
          {/* Pagination controls */}
          <nav className="blog-nav nav nav-justified my-5">
            <button className="nav-link-prev nav-item nav-link rounded-left" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></button>
            <span className="mx-3">Page {page}</span>
            <button className="nav-link-next nav-item nav-link rounded" onClick={() => setPage(page + 1)} disabled={blogPosts.filter(post => post.page === page + 1).length === 0}>Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></button>
          </nav>
        </div>
      </section>
      <hr />
    </>
  );
};

export default BlogHome;
