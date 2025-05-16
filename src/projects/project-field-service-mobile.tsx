const ProjectFieldServiceMobile = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: Field Service Mobile App</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            Built for Thomson Reuters, this cross-platform mobile app empowers field engineers to manage tasks, capture data, and sync with backend systems. Developed with React Native and integrated with Azure cloud APIs for real-time operations.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-3.jpg" alt="Field Service Mobile" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Thomson Reuters</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Media &amp; Information</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> 25,000+</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://www.thomsonreuters.com/" target="_blank" rel="noopener noreferrer">thomsonreuters.com</a></li>
              </ul>
              <div className="client-bio mb-4">
                The client needed a robust mobile solution for field engineers to manage work orders, capture on-site data, and sync with enterprise systems in real time, even in low-connectivity environments.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Cross-platform support (iOS & Android) with React Native.</li>
                <li className="mb-2">Offline data capture and sync.</li>
                <li className="mb-2">Integration with Azure APIs and backend systems.</li>
                <li className="mb-2">Real-time notifications and task updates.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The Field Service Mobile App is a React Native application designed for field engineers. It supports offline-first workflows, real-time data sync, and seamless integration with enterprise systems.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              Field engineers often work in areas with limited connectivity. The challenge was to ensure reliable data capture and sync, provide real-time updates, and deliver a user-friendly experience on both iOS and Android.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The app was built with React Native for cross-platform support, used SQLite for offline storage, and leveraged Azure cloud APIs for secure data sync. Push notifications and background sync ensured engineers stayed updated in real time.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Mobile App UI" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="Field Data Sync" />
              </div>
            </div>
            <p>
              The solution enabled field engineers to work efficiently, regardless of connectivity, and improved data accuracy for the business.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Task Completion</div>
                    <div className="metric-data mb-2">+40%</div>
                    <div className="metric-desc">Increase in on-time task completion.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Data Accuracy</div>
                    <div className="metric-data mb-2">98%</div>
                    <div className="metric-desc">Accurate field data capture.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">User Satisfaction</div>
                    <div className="metric-data mb-2">+22%</div>
                    <div className="metric-desc">Improvement in engineer feedback.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Offline Sync</div>
                    <div className="metric-data mb-2">100%</div>
                    <div className="metric-desc">Reliability in low-connectivity areas.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The app is now a critical tool for field operations, improving efficiency and data quality.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “The mobile app has transformed our field operations. Engineers are more productive, and data quality has improved.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="Field Ops Manager" />
              </div>
              <div className="meta">
                <div className="name">Sunita Rao</div>
                <div className="info">Field Operations Manager, Thomson Reuters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you need a robust mobile solution for field teams, let’s connect!</p>
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

export default ProjectFieldServiceMobile;
