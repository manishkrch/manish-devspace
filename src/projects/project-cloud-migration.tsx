const ProjectCloudMigration = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: Cloud Migration Accelerator</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            Developed for Thomson Reuters, this toolkit accelerates the migration of legacy applications to AWS using Terraform and Docker. It automates infrastructure provisioning, deployment, and monitoring, ensuring a seamless and secure migration process for enterprise workloads.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-2.jpg" alt="Cloud Migration" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Thomson Reuters</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Media &amp; Information</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> 25,000+</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://www.thomsonreuters.com/" target="_blank" rel="noopener noreferrer">thomsonreuters.com</a></li>
              </ul>
              <div className="client-bio mb-4">
                Thomson Reuters needed to modernize its legacy infrastructure and migrate critical applications to AWS. The goal was to minimize downtime, automate repetitive tasks, and ensure compliance throughout the migration process.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Automate cloud infrastructure provisioning with Terraform.</li>
                <li className="mb-2">Containerize legacy applications using Docker.</li>
                <li className="mb-2">Implement CI/CD pipelines for deployment and monitoring.</li>
                <li className="mb-2">Ensure security and compliance during migration.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The Cloud Migration Accelerator is a comprehensive toolkit that automates the migration of legacy workloads to AWS. It leverages Terraform for infrastructure as code, Docker for application containerization, and integrates with AWS native services for monitoring and security.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              Migrating legacy applications to the cloud posed challenges such as dependency management, downtime minimization, and compliance. Manual processes were error-prone and time-consuming, requiring a robust automation solution.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The solution automated infrastructure provisioning using Terraform modules, containerized applications with Docker, and established CI/CD pipelines for seamless deployment. Monitoring and alerting were integrated using AWS CloudWatch, and security best practices were enforced throughout the process.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Terraform Automation" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="Cloud Migration Toolkit" />
              </div>
            </div>
            <p>
              The toolkit enabled rapid, repeatable migrations with minimal manual intervention, reducing risk and accelerating time-to-cloud.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Migration Speed</div>
                    <div className="metric-data mb-2">50% <span className="unit">faster</span></div>
                    <div className="metric-desc">Compared to previous manual migrations.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Downtime</div>
                    <div className="metric-data mb-2">&lt;2 hours</div>
                    <div className="metric-desc">Per migrated application.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Compliance</div>
                    <div className="metric-data mb-2">100%</div>
                    <div className="metric-desc">Automated compliance checks passed.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Cost Savings</div>
                    <div className="metric-data mb-2">$300K</div>
                    <div className="metric-desc">Annual infrastructure savings.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The migration accelerator reduced project timelines, improved reliability, and ensured a smooth transition to AWS for Thomson Reuters.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “The migration toolkit made our cloud journey seamless. Automation and compliance were built-in, and downtime was minimal.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="TR Cloud Lead" />
              </div>
              <div className="meta">
                <div className="name">Rahul Mehta</div>
                <div className="info">Cloud Lead, Thomson Reuters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you’re planning a cloud migration or modernization, let’s connect!</p>
        <div className="text-center">
          <a className="btn btn-primary" href="/contact">
            <i className="fas fa-paper-plane mr-2"></i>Hire Me
          </a>
        </div>
      </div>
    </section>
    <footer className="footer text-center py-4">
      <hr/>
    </footer>
  </div>
);

export default ProjectCloudMigration;
