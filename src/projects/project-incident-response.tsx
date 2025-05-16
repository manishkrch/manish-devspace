const ProjectIncidentResponse = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: Incident Response Automation</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            For Thomson Reuters, this project automated incident response workflows using Python, Azure Logic Apps, and ServiceNow integration. It reduced mean time to resolution (MTTR) and improved reliability for mission-critical systems.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-6.jpg" alt="Incident Response" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Thomson Reuters</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Media &amp; Information</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> 25,000+</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://www.thomsonreuters.com/" target="_blank" rel="noopener noreferrer">thomsonreuters.com</a></li>
              </ul>
              <div className="client-bio mb-4">
                The client needed to reduce incident response times and automate repetitive remediation tasks. Integration with ServiceNow and Azure was required for seamless ticketing and workflow execution.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Automate incident detection and response workflows.</li>
                <li className="mb-2">Integrate with ServiceNow for ticketing and reporting.</li>
                <li className="mb-2">Enable real-time notifications and escalation.</li>
                <li className="mb-2">Ensure auditability and compliance.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The Incident Response Automation solution leverages Python scripts, Azure Logic Apps, and ServiceNow APIs to automate detection, triage, and remediation of incidents. It provides dashboards for monitoring and reporting.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              Manual incident response was slow and error-prone, leading to prolonged outages and increased risk. The challenge was to automate detection, escalation, and resolution while maintaining compliance.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The solution integrated monitoring tools with Azure Logic Apps for workflow automation, used Python for custom remediation scripts, and connected to ServiceNow for ticket management. Real-time notifications and escalation policies were implemented.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Incident Automation" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="ServiceNow Integration" />
              </div>
            </div>
            <p>
              Automated playbooks reduced manual intervention and ensured consistent, auditable responses to incidents.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">MTTR</div>
                    <div className="metric-data mb-2">-60%</div>
                    <div className="metric-desc">Reduction in mean time to resolution.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Incidents Automated</div>
                    <div className="metric-data mb-2">80%</div>
                    <div className="metric-desc">Of all critical incidents.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Compliance</div>
                    <div className="metric-data mb-2">100%</div>
                    <div className="metric-desc">Audit trails for all actions.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">User Satisfaction</div>
                    <div className="metric-data mb-2">+25%</div>
                    <div className="metric-desc">Improvement in IT team feedback.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The automation solution is now a critical part of the client’s IT operations, reducing downtime and improving reliability.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “Automating incident response has transformed our IT operations. MTTR is down, and our systems are more reliable than ever.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="IT Ops Lead" />
              </div>
              <div className="meta">
                <div className="name">Anita Desai</div>
                <div className="info">IT Operations Lead, Thomson Reuters</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you want to automate incident response or improve IT reliability, let’s connect!</p>
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

export default ProjectIncidentResponse;
