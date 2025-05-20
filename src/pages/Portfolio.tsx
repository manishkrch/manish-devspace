import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const projects = [
  {
    title: 'AI-Powered Automation Platform',
    description:
      'Enterprise automation platform leveraging Azure, Python, and AI/ML for workflow automation, document processing, and analytics. Features OpenAI LLM integration and Power Platform orchestration.',
    image: '/assets/images/project/project-1.jpg',
    link: '/project-ai-automation',
    client: 'Microsoft',
    categories: ['webapp', 'backend', 'automation', 'devops'],
  },
  {
    title: 'Cloud Migration Accelerator',
    description:
      'Toolkit for accelerating cloud migration of legacy apps using AWS, Terraform, and Docker. Automated infra provisioning, deployment, and monitoring for seamless migration.',
    image: '/assets/images/project/project-2.jpg',
    link: '/project-cloud-migration',
    client: 'Thomson Reuters',
    categories: ['backend', 'automation', 'devops', 'linux'],
  },
  {
    title: 'Cloud Infrastructure Automation Suite',
    description:
      'Automated cloud infrastructure provisioning and management using AWS CloudFormation, Terraform, and Azure Resource Manager. Enabled rapid, consistent, and secure deployments for multi-cloud environments.',
    image: '/assets/images/project/project-4.jpg',
    link: '/project-cloud-infra-automation',
    client: 'Microsoft / Thomson Reuters',
    categories: ['devops', 'automation', 'backend'],
  },
  {
    title: 'DevOps Automation Toolkit',
    description:
      'A set of reusable scripts and CI/CD templates for automating build, test, and deployment pipelines across Azure DevOps and GitHub Actions. Includes IaC modules and security automation.',
    image: '/assets/images/project/project-5.jpg',
    link: '/project-devops-toolkit',
    client: 'Open Source',
    categories: ['devops', 'automation', 'backend', 'linux'],
  },
  {
    title: 'Incident Response Automation',
    description:
      'Automated incident response workflows using Python, Azure Logic Apps, and ServiceNow integration. Reduced MTTR and improved reliability for mission-critical systems.',
    image: '/assets/images/project/project-6.jpg',
    link: '/project-incident-response',
    client: 'Thomson Reuters',
    categories: ['automation', 'devops', 'backend', 'linux'],
  },
  {
    title: 'Production Linux Debugging Suite',
    description:
      'Custom toolkit for debugging and troubleshooting production issues on Linux servers. Includes log aggregation, process monitoring, and automated root cause analysis scripts.',
    image: '/assets/images/project/project-7.jpg',
    link: '/project-linux-debugging',
    client: 'Microsoft',
    categories: ['linux', 'devops', 'backend'],
  },
  {
    title: 'Customer Portal Web App',
    description:
      'A secure, scalable customer portal for enterprise clients, built with React, .NET Core, and Azure. Features SSO, real-time notifications, and advanced analytics dashboards.',
    image: '/assets/images/project/project-8.jpg',
    link: '/project-customer-portal',
    client: 'Microsoft',
    categories: ['webapp', 'frontend', 'backend'],
  },
  {
    title: 'Field Service Mobile App',
    description:
      'Cross-platform mobile app for field engineers to manage tasks, capture data, and sync with backend systems. Built with React Native and integrated with Azure cloud APIs.',
    image: '/assets/images/project/project-3.jpg',
    link: '/project-field-service-mobile',
    client: 'Thomson Reuters',
    categories: ['mobileapp', 'backend', 'devops'],
  },
  {
    title: 'Inventory Management Web App',
    description:
      'Web application for real-time inventory tracking and analytics, built with React, Node.js, and MongoDB. Integrated with cloud APIs for seamless data sync and reporting.',
    image: '/assets/images/project/project-2.jpg',
    link: '/project-inventory-web-app',
    client: 'Hitachi Vantara',
    categories: ['webapp', 'frontend', 'backend'],
  },
  {
    title: 'Employee Self-Service Mobile App',
    description:
      'Mobile app for employees to manage leave, attendance, and HR requests. Built with Flutter and integrated with backend REST APIs and Azure AD authentication.',
    image: '/assets/images/project/project-8.jpg',
    link: '/project-employee-self-service',
    client: 'Thomson Reuters',
    categories: ['mobileapp', 'backend'],
  },
  {
    title: 'This Portfolio Website',
    description:
      'Modern, responsive portfolio built with React, TypeScript, and Vite. Showcases projects, resume, and contact info. Designed for performance and accessibility.',
    image: '/assets/images/project/project-case-study-thumb.jpg',
    link: '/project-portfolio-website',
    client: 'Personal',
    categories: ['frontend', 'webapp'],
  },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === '*' || activeCategory === 'all'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeCategory)
        );

  return (
    <>
      <Helmet>
        <title>Portfolio | Manish Kumar</title>
        <meta name="description" content="Explore Manish Kumar's portfolio of web, cloud, and AI projects for top clients and enterprises." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manish Kumar Choudhary" />
        <meta name="copyright" content="© 2025 Manish Kumar Choudhary" />
        <meta name="generator" content="React, Vite, TypeScript" />
        <meta name="ai-content" content="false" />
        <meta property="og:title" content="Portfolio | Manish Kumar" />
        <meta property="og:description" content="Explore Manish Kumar's portfolio of web, cloud, and AI projects for top clients and enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manish-devspace.vercel.app/portfolio" />
        <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="manish-devspace.vercel.app" />
        <meta property="twitter:url" content="https://manish-devspace.vercel.app/portfolio" />
        <meta name="twitter:title" content="Portfolio | Manish Kumar" />
        <meta name="twitter:description" content="Explore Manish Kumar's portfolio of web, cloud, and AI projects for top clients and enterprises." />
        <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:site" content="@manishkrch" />
        <link rel="canonical" href="https://manish-devspace.vercel.app/portfolio" />
      </Helmet>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>Welcome to my online portfolio. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. I'm taking on freelance work at the moment. Want some help building your software?</p>
          </div>
          <a className="btn btn-primary" href="/contact" target="_blank"><i className="fas fa-paper-plane mr-2"></i>Hire Me</a>
        </div>
      </section>
      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto pl-0">
              <li className={`type mb-3 mb-lg-0${activeCategory === '*' ? ' active' : ''}`} data-filter="*" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('*')}>All</li>
              <li className={`type mb-3 mb-lg-0${activeCategory === 'webapp' ? ' active' : ''}`} data-filter=".webapp" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('webapp')}>Web App</li>
              <li className={`type mb-3 mb-lg-0${activeCategory === 'mobileapp' ? ' active' : ''}`} data-filter=".mobileapp" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('mobileapp')}>Mobile App</li>
              <li className={`type mb-3 mb-lg-0${activeCategory === 'frontend' ? ' active' : ''}`} data-filter=".frontend" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('frontend')}>Frontend</li>
              <li className={`type mb-3 mb-lg-0${activeCategory === 'backend' ? ' active' : ''}`} data-filter=".backend" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('backend')}>Backend</li>
              <li className={`type mb-3 mb-lg-0${activeCategory === 'devops' ? ' active' : ''}`} data-filter=".devops" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('devops')}>DevOps Automation</li>
              <li className={`type mb-3 mb-lg-0${activeCategory === 'linux' ? ' active' : ''}`} data-filter=".linux" style={{ cursor: 'pointer' }} onClick={() => setActiveCategory('linux')}>Linux</li>
            </ul>
          </div>
          <div className="project-cards row isotope">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className={`isotope-item col-md-6 mb-5 ${project.categories.join(' ')}`}
              >
                <div className="card project-card">
                  <div className="row no-gutters">
                    <div className="col-lg-4 card-img-holder">
                      <img
                        src={project.image}
                        className="card-img"
                        alt="image"
                        width="400"
                        height="225"
                        loading="lazy"
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          <a href={project.link} className="theme-link">Project Heading</a>
                        </h5>
                        <p className="card-text">{project.description}</p>
                        <p className="card-text">
                          <small className="text-muted">Client: {project.client}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="link-mask">
                    <a className="link-mask-link" href={project.link}></a>
                    <div className="link-mask-text">
                      <a className="btn btn-secondary" href={project.link}>
                        <i className="fas fa-eye mr-2"></i>View Case Study
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Portfolio;
