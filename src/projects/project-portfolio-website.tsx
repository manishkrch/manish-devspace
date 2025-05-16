const ProjectPortfolioWebsite = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: This Portfolio Website</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            This modern, responsive portfolio is built with React, TypeScript, and Vite. It showcases projects, resume, and contact information, and is designed for performance, accessibility, and a seamless user experience.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-case-study-thumb.jpg" alt="Portfolio Website" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Personal</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Personal Branding</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> Solo</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://manishkrch.dev" target="_blank" rel="noopener noreferrer">manishkrch.dev</a></li>
              </ul>
              <div className="client-bio mb-4">
                The goal was to create a high-performance, visually appealing portfolio to highlight my work, skills, and experience, and to provide an easy way for clients and recruiters to get in touch.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Showcase projects and case studies with rich content.</li>
                <li className="mb-2">Provide downloadable resume and easy contact options.</li>
                <li className="mb-2">Ensure fast load times and accessibility.</li>
                <li className="mb-2">Modern, responsive design for all devices.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The portfolio is a single-page application built with React and TypeScript, using Vite for fast builds and hot reloading. It features dynamic routing, blog integration, and a custom design system for consistency and branding.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              The challenge was to deliver a site that is both visually impressive and highly performant, with easy content management and extensibility for future updates.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The site was developed with React functional components, TypeScript for type safety, and Vite for rapid development. Accessibility best practices and responsive design were prioritized throughout.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Portfolio UI" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="Responsive Design" />
              </div>
            </div>
            <p>
              The result is a fast, accessible, and visually engaging portfolio that effectively communicates my skills and experience.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Performance</div>
                    <div className="metric-data mb-2">99</div>
                    <div className="metric-desc">Lighthouse performance score.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Accessibility</div>
                    <div className="metric-data mb-2">100</div>
                    <div className="metric-desc">Lighthouse accessibility score.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Contact Rate</div>
                    <div className="metric-data mb-2">+30%</div>
                    <div className="metric-desc">Increase in client inquiries.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Page Load</div>
                    <div className="metric-data mb-2">&lt;1s</div>
                    <div className="metric-desc">Average load time globally.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The site is now the primary channel for showcasing my work and attracting new opportunities.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “The portfolio is fast, beautiful, and easy to navigate. It’s a great showcase for my work and skills.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="Personal" />
              </div>
              <div className="meta">
                <div className="name">Manish Kumar Choudhary</div>
                <div className="info">Software Engineer & Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you want a high-performance, modern website, let’s connect!</p>
        <div className="text-center">
          <a className="btn btn-primary" href="/contact">
            <i className="fas fa-paper-plane mr-2"></i>Hire Me
          </a>
        </div>
      </div>
    </section>
    <footer className="footer text-center py-4">
    </footer>
    <hr/>
  </div>
);

export default ProjectPortfolioWebsite;
