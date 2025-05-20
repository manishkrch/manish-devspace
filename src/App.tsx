// src/App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy load large/infrequent pages for performance
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Resume = lazy(() => import('./pages/Resume'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const BlogHome = lazy(() => import('./pages/BlogHome'));
const BlogPostTerraformAzureAutomation = lazy(() => import('./blogs/blog-post-terraform-azure-automation'));
const BlogPostLinuxDebugging = lazy(() => import('./blogs/blog-post-linux-debugging'));
const BlogPostAIAutomationPlatforms = lazy(() => import('./blogs/blog-post-ai-automation-platforms'));
const BlogPostReactTypescriptBestPractices = lazy(() => import('./blogs/blog-post-react-typescript-best-practices'));
const BlogPostCloudMigrationLessons = lazy(() => import('./blogs/blog-post-cloud-migration-lessons'));
const BlogPostCareerGrowthTech = lazy(() => import('./blogs/blog-post-career-growth-tech'));
const ProjectAIAutomation = lazy(() => import('./projects/project-ai-automation'));
const ProjectCloudInfraAutomation = lazy(() => import('./projects/project-cloud-infra-automation'));
const ProjectCloudMigration = lazy(() => import('./projects/project-cloud-migration'));
const ProjectCustomerPortal = lazy(() => import('./projects/project-customer-portal'));
const ProjectDevOpsToolkit = lazy(() => import('./projects/project-devops-toolkit'));
const ProjectEmployeeSelfService = lazy(() => import('./projects/project-employee-self-service'));
const ProjectFieldServiceMobile = lazy(() => import('./projects/project-field-service-mobile'));
const ProjectIncidentResponse = lazy(() => import('./projects/project-incident-response'));
const ProjectInventoryWebApp = lazy(() => import('./projects/project-inventory-web-app'));
const ProjectLinuxDebugging = lazy(() => import('./projects/project-linux-debugging'));
const ProjectPortfolioWebsite = lazy(() => import('./projects/project-portfolio-website'));
const Subscribe = lazy(() => import('./components/Subscribe'));

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
              <Route path="/about" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<BlogHome />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<div>Project Page</div>} />
              <Route path="/blog-home" element={<BlogHome />} />
              <Route path="/blog-post" element={<div>Blog Post</div>} />
              <Route path="/blog-post-terraform-azure-automation" element={<BlogPostTerraformAzureAutomation />} />
              <Route path="/blog-post-linux-debugging" element={<BlogPostLinuxDebugging />} />
              <Route path="/blog-post-ai-automation-platforms" element={<BlogPostAIAutomationPlatforms />} />
              <Route path="/blog-post-react-typescript-best-practices" element={<BlogPostReactTypescriptBestPractices />} />
              <Route path="/blog-post-cloud-migration-lessons" element={<BlogPostCloudMigrationLessons />} />
              <Route path="/blog-post-career-growth-tech" element={<BlogPostCareerGrowthTech />} />
              <Route path="/project-ai-automation" element={<ProjectAIAutomation />} />
              <Route path="/project-cloud-infra-automation" element={<ProjectCloudInfraAutomation />} />
              <Route path="/project-cloud-migration" element={<ProjectCloudMigration />} />
              <Route path="/project-customer-portal" element={<ProjectCustomerPortal />} />
              <Route path="/project-devops-toolkit" element={<ProjectDevOpsToolkit />} />
              <Route path="/project-employee-self-service" element={<ProjectEmployeeSelfService />} />
              <Route path="/project-field-service-mobile" element={<ProjectFieldServiceMobile />} />
              <Route path="/project-incident-response" element={<ProjectIncidentResponse />} />
              <Route path="/project-inventory-web-app" element={<ProjectInventoryWebApp />} />
              <Route path="/project-linux-debugging" element={<ProjectLinuxDebugging />} />
              <Route path="/project-portfolio-website" element={<ProjectPortfolioWebsite />} />
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
