import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

interface BlogMeta {
  title: string;
  date: string;
  time: string;
  comments: number;
  image: string;
  intro: string;
}

// Vite import.meta.glob for markdown files
const blogMarkdowns = import.meta.glob('./posts/*.md');

const BlogPostTemplate: React.FC = () => {
  // Always support both /first-blog and /blog/:slug
  let { slug } = useParams<{ slug?: string }>();
  if (!slug && window.location.pathname === '/first-blog') {
    slug = 'first-blog';
  }
  const [meta, setMeta] = useState<BlogMeta | null>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!slug || !blogMarkdowns[`./posts/${slug}.md`]) return;
    blogMarkdowns[`./posts/${slug}.md`]().then((mod: any) => {
      fetch(mod.default)
        .then((res) => res.text())
        .then((raw) => {
          const { data, content } = matter(raw);
          setMeta(data as BlogMeta);
          setContent(content);
        });
    });
  }, [slug]);

  if (!meta) return <div>Loading...</div>;

  return (
    <article className="blog-post px-3 py-5 p-md-5">
      <div className="container single-col-max-width">
        <header className="blog-post-header">
          <h2 className="title mb-2">{meta.title}</h2>
          <div className="meta mb-3">
            <span className="date">Published {meta.date}</span>
            <span className="time">{meta.time}</span>
            <span className="comment"><a href="#comments">{meta.comments} comments</a></span>
          </div>
        </header>
        <div className="blog-post-body">
          <figure className="blog-banner">
            <img className="img-fluid" src={meta.image} alt={meta.title} />
            <figcaption className="mt-2 text-center image-caption">{meta.intro}</figcaption>
          </figure>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <hr />
      </div>
    </article>
  );
};

export default BlogPostTemplate;
