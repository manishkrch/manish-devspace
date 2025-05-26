// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { parsedBlogPosts } from './data/blogPosts';
import { parsedPortfolioProjects } from './data/portfolioProjects';
import { getBlogPostRouteAndComponent } from './helpers/blogHelpers';

// Lazy load large/infrequent pages for performance
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Resume = lazy(() => import('./pages/Resume'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const BlogHome = lazy(() => import('./pages/BlogHome'));
const Subscribe = lazy(() => import('./components/Subscribe'));

// Dynamically lazy-load all blog post components based on blogPosts.yml
const blogPostComponents: Record<string, React.LazyExoticComponent<React.FC>> = {};
parsedBlogPosts.forEach(post => {
  const { componentName } = getBlogPostRouteAndComponent(post);
  if (!blogPostComponents[componentName]) {
    // Vite requires a static file extension for dynamic imports
    blogPostComponents[componentName] = lazy(() => import(`./blogs/blog-post-${post.slug}.tsx`));
  }
});

// Dynamically lazy-load all project components based on portfolioProjects.yml
type ProjectComponentMap = Record<string, React.LazyExoticComponent<React.FC>>;
const projectComponents: ProjectComponentMap = {};
parsedPortfolioProjects.forEach(project => {
  // Derive a slug or component name from the link (e.g., '/project-ai-automation' => 'project-ai-automation')
  const slug = project.link.replace(/^\//, '');
  if (!projectComponents[slug]) {
    // Vite requires a static file extension for dynamic imports
    projectComponents[slug] = lazy(() => import(`./projects/${slug}.tsx`));
  }
});

// ErrorBoundary component for user-friendly error handling
import type { ReactNode, ErrorInfo } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_error: unknown): ErrorBoundaryState {
    return { hasError: true };
  }
  componentDidCatch(_error: unknown, _errorInfo: ErrorInfo) {
    // Log error to an error reporting service if needed
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center py-5">
          <h2>Something went wrong.</h2>
          <p>We're sorry, but an unexpected error occurred. Please try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// 404 Not Found Page
function NotFound() {
  React.useEffect(() => {
    document.title = '404 – Page Not Found | Manish Kumar';
  }, []);
  return (
    <div className="container text-center py-5">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
      <a className="btn btn-primary mt-3" href="/">Go Home</a>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="main-wrapper">
          <Suspense fallback={<div className="container text-center py-5"><div className="spinner-border" role="status" aria-label="Loading..." /></div>}>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<BlogHome />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<div>Project Page</div>} />
              <Route path="/blog-home" element={<BlogHome />} />
              <Route path="/blog-post" element={<div>Blog Post</div>} />
              {/* Dynamically add blog post routes */}
              {parsedBlogPosts.map(post => {
                const { route, componentName } = getBlogPostRouteAndComponent(post);
                const Component = blogPostComponents[componentName];
                return (
                  <Route key={route} path={route} element={<Component />} />
                );
              })}
              {/* Dynamically add project routes */}
              {parsedPortfolioProjects.map(project => {
                const slug = project.link.replace(/^\//, '');
                const Component = projectComponents[slug];
                return (
                  <Route key={project.link} path={project.link} element={<Component />} />
                );
              })}
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <footer className="footer text-center py-4">
            <small className="copyright">&copy; {new Date().getFullYear()} Manish Kumar Choudhary. All rights reserved.</small>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
