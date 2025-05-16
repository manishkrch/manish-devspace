import React, { useState } from 'react';

const projects = [
  {
    title: 'AI-Powered Automation Platform',
    description:
      'Enterprise automation platform leveraging Azure, Python, and AI/ML for workflow automation, document processing, and analytics. Features OpenAI LLM integration and Power Platform orchestration.',
    image: '/assets/images/project/project-1.jpg',
    link: '/projects/project-ai-automation',
    client: 'Microsoft',
    categories: ['webapp', 'backend', 'automation', 'devops'],
  },
  {
    title: 'Cloud Migration Accelerator',
    description:
      'Toolkit for accelerating cloud migration of legacy apps using AWS, Terraform, and Docker. Automated infra provisioning, deployment, and monitoring for seamless migration.',
    image: '/assets/images/project/project-2.jpg',
    link: '/projects/project-cloud-migration',
    client: 'Thomson Reuters',
    categories: ['backend', 'automation', 'devops', 'linux'],
  },
  {
    title: 'Cloud Infrastructure Automation Suite',
    description:
      'Automated cloud infrastructure provisioning and management using AWS CloudFormation, Terraform, and Azure Resource Manager. Enabled rapid, consistent, and secure deployments for multi-cloud environments.',
    image: '/assets/images/project/project-4.jpg',
    link: '/projects/project-cloud-infra-automation',
    client: 'Microsoft / Thomson Reuters',
    categories: ['devops', 'automation', 'backend'],
  },
  {
    title: 'DevOps Automation Toolkit',
    description:
      'A set of reusable scripts and CI/CD templates for automating build, test, and deployment pipelines across Azure DevOps and GitHub Actions. Includes IaC modules and security automation.',
    image: '/assets/images/project/project-5.jpg',
    link: '/projects/project-devops-toolkit',
    client: 'Open Source',
    categories: ['devops', 'automation', 'backend', 'linux'],
  },
  {
    title: 'Incident Response Automation',
    description:
      'Automated incident response workflows using Python, Azure Logic Apps, and ServiceNow integration. Reduced MTTR and improved reliability for mission-critical systems.',
    image: '/assets/images/project/project-6.jpg',
    link: '/projects/project-incident-response',
    client: 'Thomson Reuters',
    categories: ['automation', 'devops', 'backend', 'linux'],
  },
  {
    title: 'Production Linux Debugging Suite',
    description:
      'Custom toolkit for debugging and troubleshooting production issues on Linux servers. Includes log aggregation, process monitoring, and automated root cause analysis scripts.',
    image: '/assets/images/project/project-7.jpg',
    link: '/projects/project-linux-debugging',
    client: 'Microsoft',
    categories: ['linux', 'devops', 'backend'],
  },
  {
    title: 'Customer Portal Web App',
    description:
      'A secure, scalable customer portal for enterprise clients, built with React, .NET Core, and Azure. Features SSO, real-time notifications, and advanced analytics dashboards.',
    image: '/assets/images/project/project-8.jpg',
    link: '/projects/project-customer-portal',
    client: 'Microsoft',
    categories: ['webapp', 'frontend', 'backend'],
  },
  {
    title: 'Field Service Mobile App',
    description:
      'Cross-platform mobile app for field engineers to manage tasks, capture data, and sync with backend systems. Built with React Native and integrated with Azure cloud APIs.',
    image: '/assets/images/project/project-3.jpg',
    link: '/projects/project-field-service-mobile',
    client: 'Thomson Reuters',
    categories: ['mobileapp', 'backend', 'devops'],
  },
  {
    title: 'Inventory Management Web App',
    description:
      'Web application for real-time inventory tracking and analytics, built with React, Node.js, and MongoDB. Integrated with cloud APIs for seamless data sync and reporting.',
    image: '/assets/images/project/project-2.jpg',
    link: '/projects/project-inventory-web-app',
    client: 'Hitachi Vantara',
    categories: ['webapp', 'frontend', 'backend'],
  },
  {
    title: 'Employee Self-Service Mobile App',
    description:
      'Mobile app for employees to manage leave, attendance, and HR requests. Built with Flutter and integrated with backend REST APIs and Azure AD authentication.',
    image: '/assets/images/project/project-8.jpg',
    link: '/projects/project-employee-self-service',
    client: 'Thomson Reuters',
    categories: ['mobileapp', 'backend'],
  },
  {
    title: 'This Portfolio Website',
    description:
      'Modern, responsive portfolio built with React, TypeScript, and Vite. Showcases projects, resume, and contact info. Designed for performance and accessibility.',
    image: '/assets/images/project/project-case-study-thumb.jpg',
    link: '/projects/project-portfolio-website',
    client: 'Personal',
    categories: ['frontend', 'webapp'],
  },
];

const categories = [
  { label: 'All', filter: '*' },
  { label: 'Web App', filter: 'webapp' },
  { label: 'Mobile App', filter: 'mobileapp' },
  { label: 'DevOps Automation', filter: 'devops' },
  { label: 'Frontend', filter: 'frontend' },
  { label: 'Backend', filter: 'backend' },
  { label: 'Linux', filter: 'linux' },
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
    <div className="main-wrapper">
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio. I specialize in building scalable, cloud-native, and AI-powered solutions for global clients. Explore some of my featured projects below. Interested in working together? <a href="/contact">Contact me</a>!
            </p>
          </div>
          <a className="btn btn-primary" href="/contact">
            <i className="fas fa-paper-plane mr-2"></i>Hire Me
          </a>
        </div>
      </section>
      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto pl-0">
              {categories.map((cat) => (
                <li
                  key={cat.filter}
                  className={`type mb-3 mb-lg-0${activeCategory === cat.filter ? ' active' : ''}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveCategory(cat.filter)}
                >
                  {cat.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-cards row isotope">
            {filteredProjects.length === 0 ? (
              <div className="col-12 text-center text-muted">No projects found in this category.</div>
            ) : (
              filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`isotope-item col-md-6 mb-5 ${project.categories.join(' ')}`}
                >
                  <div className="card project-card">
                    <div className="row no-gutters">
                      <div className="col-lg-4 card-img-holder">
                        <img src={project.image} className="card-img" alt={project.title} />
                      </div>
                      <div className="col-lg-8">
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href={project.link} className="theme-link">
                              {project.title}
                            </a>
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
              ))
            )}
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Portfolio;
