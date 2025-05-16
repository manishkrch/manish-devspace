// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import BlogHome from './pages/BlogHome';
import BlogPostTerraformAzureAutomation from './blogs/blog-post-terraform-azure-automation';
import BlogPostLinuxDebugging from './blogs/blog-post-linux-debugging';
import BlogPostAIAutomationPlatforms from './blogs/blog-post-ai-automation-platforms';
import BlogPostReactTypescriptBestPractices from './blogs/blog-post-react-typescript-best-practices';
import BlogPostCloudMigrationLessons from './blogs/blog-post-cloud-migration-lessons';
import BlogPostCareerGrowthTech from './blogs/blog-post-career-growth-tech';
import ProjectAIAutomation from './projects/project-ai-automation';
import ProjectCloudInfraAutomation from './projects/project-cloud-infra-automation';
import ProjectCloudMigration from './projects/project-cloud-migration';
import ProjectCustomerPortal from './projects/project-customer-portal';
import ProjectDevOpsToolkit from './projects/project-devops-toolkit';
import ProjectEmployeeSelfService from './projects/project-employee-self-service';
import ProjectFieldServiceMobile from './projects/project-field-service-mobile';
import ProjectIncidentResponse from './projects/project-incident-response';
import ProjectInventoryWebApp from './projects/project-inventory-web-app';
import ProjectLinuxDebugging from './projects/project-linux-debugging';
import ProjectPortfolioWebsite from './projects/project-portfolio-website';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <div className="main-wrapper">
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
            <Route path="/projects/project-ai-automation" element={<ProjectAIAutomation />} />
            <Route path="/projects/project-cloud-infra-automation" element={<ProjectCloudInfraAutomation />} />
            <Route path="/projects/project-cloud-migration" element={<ProjectCloudMigration />} />
            <Route path="/projects/project-customer-portal" element={<ProjectCustomerPortal />} />
            <Route path="/projects/project-devops-toolkit" element={<ProjectDevOpsToolkit />} />
            <Route path="/projects/project-employee-self-service" element={<ProjectEmployeeSelfService />} />
            <Route path="/projects/project-field-service-mobile" element={<ProjectFieldServiceMobile />} />
            <Route path="/projects/project-incident-response" element={<ProjectIncidentResponse />} />
            <Route path="/projects/project-inventory-web-app" element={<ProjectInventoryWebApp />} />
            <Route path="/projects/project-linux-debugging" element={<ProjectLinuxDebugging />} />
            <Route path="/projects/project-portfolio-website" element={<ProjectPortfolioWebsite />} />
            <Route path="*" element={<AboutMe />} />
          </Routes>

          <footer className="footer text-center py-4">
            <small className="copyright">&copy; {new Date().getFullYear()} Manish Kumar Choudhary. All rights reserved.</small>
          </footer>
      </div>
    </Router>
  );
};

export default App;
