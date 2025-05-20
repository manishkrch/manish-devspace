import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import { Helmet } from 'react-helmet-async';

export const blogPosts = [
  {
    id: 1,
    title: 'Automating Cloud Infrastructure with Terraform & Azure',
    date: 'May 2025',
    time: '7 min read',
    comments: 12,
    image: '/assets/images/blog/blog-post-thumb-1.jpg',
    intro: 'A practical guide to using Terraform and Azure Resource Manager for scalable, repeatable cloud deployments. Includes real-world DevOps automation tips from enterprise projects.',
    link: '/blog-post-terraform-azure-automation',
  },
  {
    id: 2,
    title: 'Debugging Production Issues on Linux: My SRE Playbook',
    date: 'April 2025',
    time: '6 min read',
    comments: 8,
    image: '/assets/images/blog/blog-post-thumb-2.jpg',
    intro: 'Lessons learned from years of troubleshooting mission-critical systems. Tools, scripts, and mindset for effective Linux debugging in high-stakes environments.',
    link: '/blog-post-linux-debugging',
  },
  {
    id: 3,
    title: 'Building AI-Powered Automation Platforms',
    date: 'March 2025',
    time: '8 min read',
    comments: 15,
    image: '/assets/images/blog/blog-post-thumb-3.jpg',
    intro: 'How I designed and shipped enterprise automation platforms using Azure, Python, and OpenAI. From architecture to deployment, a look at real-world AI integration.',
    link: '/blog-post-ai-automation-platforms',
  },
  {
    id: 4,
    title: 'React & TypeScript: Best Practices for Modern Web Apps',
    date: 'February 2025',
    time: '5 min read',
    comments: 10,
    image: '/assets/images/blog/blog-post-thumb-4.jpg',
    intro: 'My favorite patterns and tools for building robust, maintainable web apps with React and TypeScript. Tips for code quality, performance, and developer happiness.',
    link: '/blog-post-react-typescript-best-practices',
  },
  {
    id: 5,
    title: 'Cloud Migration: Lessons from the Field',
    date: 'January 2025',
    time: '9 min read',
    comments: 6,
    image: '/assets/images/blog/blog-post-thumb-5.jpg',
    intro: 'Stories and strategies from migrating legacy enterprise workloads to AWS and Azure. What works, what doesn’t, and how to avoid common pitfalls.',
    link: '/blog-post-cloud-migration-lessons',
  },
  {
    id: 6,
    title: 'Career Growth in Tech: From Engineer to Leader',
    date: 'December 2024',
    time: '4 min read',
    comments: 18,
    image: '/assets/images/blog/blog-post-thumb-6.jpg',
    intro: 'Reflections on my journey from hands-on engineer to technical leader. Advice for mentoring, learning, and thriving in a fast-changing industry.',
    link: '/blog-post-career-growth-tech',
  },
];

const BlogHome: React.FC = () => (
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
        {blogPosts.map((post) => (
          <div className="item mb-5" key={post.id}>
            <div className="media">
              <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={post.image} alt={post.title} />
              <div className="media-body">
                <h3 className="title mb-1"><Link to={post.link}>{post.title}</Link></h3>
                <div className="meta mb-1">
                  <span className="date">{post.date}</span>
                  <span className="time">{post.time}</span>
                  <span className="comment"><a href="#">{post.comments} comments</a></span>
                </div>
                <div className="intro">{post.intro}</div>
                <Link className="more-link" to={post.link}>Read more &rarr;</Link>
              </div>
            </div>
          </div>
        ))}
        <nav className="blog-nav nav nav-justified my-5">
          <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
          <a className="nav-link-next nav-item nav-link rounded" href="#">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
        </nav>
      </div>
    </section>
    <hr />
  </>
);

export default BlogHome;
