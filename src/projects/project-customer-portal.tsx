const ProjectCustomerPortal = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: Customer Portal Web App</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            Developed for Microsoft, this secure, scalable customer portal is built with React, .NET Core, and Azure. It features SSO, real-time notifications, and advanced analytics dashboards for enterprise clients.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-8.jpg" alt="Customer Portal" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Microsoft</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Technology</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> 10,000+</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer">microsoft.com</a></li>
              </ul>
              <div className="client-bio mb-4">
                Microsoft required a modern portal for enterprise customers to access services, manage accounts, and view analytics. Security, scalability, and seamless integration with Azure were key requirements.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Implement secure SSO authentication with Azure AD.</li>
                <li className="mb-2">Provide real-time notifications and messaging.</li>
                <li className="mb-2">Build interactive analytics dashboards.</li>
                <li className="mb-2">Ensure scalability and high availability.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The Customer Portal Web App is a cloud-native solution built with React and .NET Core, hosted on Azure. It provides a unified interface for enterprise clients to manage their accounts, access services, and view real-time analytics.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              The challenge was to deliver a secure, scalable portal that integrates with existing Microsoft services and provides a seamless user experience for enterprise customers.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The solution used Azure AD for authentication, SignalR for real-time notifications, and Power BI for analytics dashboards. The architecture was designed for high availability and scalability, with automated CI/CD pipelines for rapid deployment.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Portal Dashboard" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="Real-time Notifications" />
              </div>
            </div>
            <p>
              The portal enables enterprise clients to self-serve, reducing support costs and improving customer satisfaction.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">User Adoption</div>
                    <div className="metric-data mb-2">2,000+</div>
                    <div className="metric-desc">Enterprise users onboarded in 3 months.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Support Tickets</div>
                    <div className="metric-data mb-2">-30%</div>
                    <div className="metric-desc">Reduction in support requests.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Availability</div>
                    <div className="metric-data mb-2">99.99%</div>
                    <div className="metric-desc">Uptime achieved post-launch.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Customer Satisfaction</div>
                    <div className="metric-data mb-2">+18%</div>
                    <div className="metric-desc">Increase in NPS score.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The portal is now a key channel for enterprise customer engagement and service delivery.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “The new portal has transformed our customer experience. Real-time analytics and notifications are game changers.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="Customer Success" />
              </div>
              <div className="meta">
                <div className="name">Rohit Agarwal</div>
                <div className="info">Customer Success Lead, Microsoft</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you need a secure, scalable web portal, let’s connect!</p>
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

export default ProjectCustomerPortal;
