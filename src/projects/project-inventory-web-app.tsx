const ProjectInventoryWebApp = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: Inventory Management Web App</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            Built for Hitachi Vantara, this web application enables real-time inventory tracking and analytics. Developed with React, Node.js, and MongoDB, it integrates with cloud APIs for seamless data sync and reporting.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-2.jpg" alt="Inventory Web App" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Hitachi Vantara</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Technology &amp; Data</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> 10,000+</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://www.hitachivantara.com/" target="_blank" rel="noopener noreferrer">hitachivantara.com</a></li>
              </ul>
              <div className="client-bio mb-4">
                The client needed a modern web app for real-time inventory management, analytics, and reporting, with seamless integration to cloud data sources and APIs.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Real-time inventory tracking and analytics.</li>
                <li className="mb-2">Integration with cloud APIs and external data sources.</li>
                <li className="mb-2">Role-based access and secure authentication.</li>
                <li className="mb-2">Customizable reporting and dashboards.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The Inventory Management Web App is a full-stack solution using React for the frontend, Node.js for the backend, and MongoDB for data storage. It provides real-time updates, analytics, and reporting for inventory managers.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              The challenge was to deliver a scalable, real-time solution that integrates with multiple data sources and provides actionable insights for inventory management.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The app was built with a microservices architecture, used WebSockets for real-time updates, and integrated with cloud APIs for data sync. Custom dashboards and reporting tools were developed for business users.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Inventory Dashboard" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="Real-time Analytics" />
              </div>
            </div>
            <p>
              The solution improved inventory accuracy, reduced stockouts, and enabled data-driven decision making.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Inventory Accuracy</div>
                    <div className="metric-data mb-2">99.5%</div>
                    <div className="metric-desc">Real-time data sync and validation.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Stockouts</div>
                    <div className="metric-data mb-2">-60%</div>
                    <div className="metric-desc">Reduction in out-of-stock incidents.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Reporting Time</div>
                    <div className="metric-data mb-2">-80%</div>
                    <div className="metric-desc">Faster report generation.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">User Satisfaction</div>
                    <div className="metric-data mb-2">+15%</div>
                    <div className="metric-desc">Improvement in manager feedback.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The app is now a core tool for inventory management and analytics at Hitachi Vantara.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “The inventory app has transformed our operations. Real-time analytics and reporting are invaluable.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="Inventory Manager" />
              </div>
              <div className="meta">
                <div className="name">Amit Patel</div>
                <div className="info">Inventory Manager, Hitachi Vantara</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you need a real-time analytics web app, let’s connect!</p>
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

export default ProjectInventoryWebApp;
