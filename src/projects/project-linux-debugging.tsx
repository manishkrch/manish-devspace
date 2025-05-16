const ProjectLinuxDebugging = () => (
  <div className="main-wrapper">
    <section className="cta-section theme-bg-light py-5">
      <div className="container single-col-max-width">
        <h2 className="heading text-center">Case Study: Production Linux Debugging Suite</h2>
        <div className="project-intro text-center">
          <p className="mb-0 lead">
            Built for Microsoft, this custom toolkit streamlines debugging and troubleshooting of production issues on Linux servers. It features log aggregation, process monitoring, and automated root cause analysis scripts for rapid incident resolution.
          </p>
        </div>
      </div>
    </section>
    <section className="project px-3 py-5 p-md-5">
      <div className="container">
        <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
          <img className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block" src="/assets/images/project/project-7.jpg" alt="Linux Debugging" />
          <div className="media-body">
            <div className="client-info">
              <h3 className="client-name font-weight-bold mb-4">Microsoft</h3>
              <ul className="client-meta list-unstyled">
                <li className="mb-2"><i className="fas fa-industry fa-fw mr-2"></i><strong>Industry:</strong> Technology</li>
                <li className="mb-2"><i className="fas fa-users fa-fw mr-2"></i><strong>Size:</strong> 10,000+</li>
                <li className="mb-2"><strong><i className="fas fa-link fa-fw mr-2"></i>Website:</strong> <a className="theme-link" href="https://www.microsoft.com/" target="_blank" rel="noopener noreferrer">microsoft.com</a></li>
              </ul>
              <div className="client-bio mb-4">
                The client needed a reliable way to diagnose and resolve production issues on Linux servers, minimizing downtime and improving service reliability for critical workloads.
              </div>
              <h4 className="subheading mb-3">Project Requirements</h4>
              <ul className="mb-0">
                <li className="mb-2">Aggregate and analyze logs from multiple sources.</li>
                <li className="mb-2">Monitor processes and system health in real time.</li>
                <li className="mb-2">Automate root cause analysis and reporting.</li>
                <li className="mb-2">Integrate with existing monitoring tools.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="project-sections py-5">
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Project Overview</h3>
            <p>
              The Production Linux Debugging Suite is a set of tools and scripts for rapid diagnosis of server issues. It supports log aggregation, process monitoring, and automated analysis to speed up incident response.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Challenge</h3>
            <p>
              Diagnosing production issues on Linux servers was time-consuming and required deep expertise. The challenge was to automate common troubleshooting steps and provide actionable insights quickly.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title">The Approach &amp; Solution</h3>
            <p>
              The toolkit was developed using Bash, Python, and open-source monitoring tools. It aggregates logs, monitors key processes, and runs automated scripts to identify root causes. Integration with existing dashboards provides real-time visibility.
            </p>
            <div className="row mt-5">
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-1.jpg" alt="Linux Monitoring" />
              </div>
              <div className="col-12 col-lg-6 mb-5">
                <img className="img-fluid rounded" src="/assets/images/project/project-figure-2.jpg" alt="Root Cause Analysis" />
              </div>
            </div>
            <p>
              The solution reduced mean time to resolution and improved reliability for production systems.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">The Results</h3>
            <div className="metrics mb-4">
              <div className="row">
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">MTTR</div>
                    <div className="metric-data mb-2">-40%</div>
                    <div className="metric-desc">Reduction in mean time to resolution.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Incidents Diagnosed</div>
                    <div className="metric-data mb-2">95%</div>
                    <div className="metric-desc">Automated root cause identification.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">Downtime</div>
                    <div className="metric-data mb-2">-30%</div>
                    <div className="metric-desc">Reduction in production downtime.</div>
                  </div>
                </div>
                <div className="metric col-6 col-xl-3 mb-3">
                  <div className="inner p-3 theme-bg-light">
                    <div className="metric-name">User Satisfaction</div>
                    <div className="metric-data mb-2">+20%</div>
                    <div className="metric-desc">Improvement in IT team feedback.</div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              The toolkit is now a standard part of the client’s Linux operations, enabling faster, more reliable incident response.
            </p>
          </div>
          <div className="project-section mb-5">
            <h3 className="project-section-title mb-3">Client Testimonial</h3>
          </div>
          <div className="client-quote">
            <div className="quote-holder">
              <blockquote className="quote-content">
                “The debugging suite has saved us countless hours and improved our uptime. It’s an essential tool for our Linux teams.”
              </blockquote>
              <i className="fas fa-quote-left"></i>
            </div>
            <div className="source-holder">
              <div className="source-profile">
                <img src="/assets/images/clients/profile-4.png" alt="Linux Lead" />
              </div>
              <div className="meta">
                <div className="name">Vikram Singh</div>
                <div className="info">Linux Lead, Microsoft</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Want me to help with your project?</h2>
        <p>If you need to improve Linux reliability or automate troubleshooting, let’s connect!</p>
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

export default ProjectLinuxDebugging;
