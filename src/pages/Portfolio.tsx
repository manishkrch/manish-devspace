import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { parsedPortfolioProjects } from '../data/portfolioProjects';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects =
    activeCategory === '*' || activeCategory === 'all'
      ? parsedPortfolioProjects
      : parsedPortfolioProjects.filter((project) =>
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
                          <a href={project.link} className="theme-link">{project.title}</a>
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
