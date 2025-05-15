import React from 'react';

const Resume: React.FC = () => {
  return (
	<>
	<section className="cta-section theme-bg-light py-5">
			<div className="container text-center single-col-max-width">
				<h2 className="heading mb-3">Online Resume</h2>
				<a className="btn btn-primary" href="https://www.linkedin.com/in/manish-kumar-choudhary/" target="_blank"><i className="fas fa-file-pdf mr-2"></i>View LinkedIn Profile</a>
			</div>
		</section>
		<div className="container px-3 px-lg-5">
			<article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
				
				<div className="resume-header">
					<div className="row align-items-center">
						<div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
							<h2 className="resume-name mb-0 text-uppercase">Manish Choudhary</h2>
							<div className="resume-tagline mb-3 mb-md-0">Senior Software Engineer | Cloud & AI Enthusiast</div>
						</div>
						<div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
							<ul className="list-unstyled mb-0">
								<li className="mb-2"><i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>Hyderabad, Telangana, India</li>
                <li className="mb-2"><i className="fas fa-phone-square fa-fw fa-lg mr-2 "></i><a className="resume-link" href="tel:#">+91-9052390048</a></li>
								<li className="mb-2"><i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i><a className="resume-link" href="mailto:manishki@live.com">manishki@live.com</a></li>
								<li className="mb-2"><i className="fas fa-globe fa-fw fa-lg mr-2"></i><a className="resume-link" href="https://www.linkedin.com/in/manish-kumar-choudhary/" target="_blank">linkedin.com/in/manish-kumar-choudhary</a></li>
							</ul>
						</div>
					</div>
				</div>
				<hr />
				<div className="resume-intro py-3">
					<div className="media flex-column flex-md-row align-items-center">
						<img className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto" src="/assets/images/resume-profile1.png" alt="Manish Kumar Choudhary" />
						<div className="media-body text-left">
							<p className="mb-0">Experienced Software Development Engineer at Microsoft, passionate about leveraging AI and automation to solve real-world problems. Recognized for technical leadership, innovation, and a strong drive for continuous improvement. Skilled in cloud architecture, automation, and full-stack development. AWS Certified Solutions Architect Professional. Awarded MVP by C# Corner. Committed to delivering impactful solutions and driving team success.</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="resume-body">
					<div className="row">
						<div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
							<section className="work-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Work Experiences</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Software Development Engineer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Microsoft | Sep 2022 - Present</div>
									</div>
									<div className="item-content">
										<p>Designing and developing scalable, cloud-native solutions with a focus on AI and automation. Leading initiatives to modernize infrastructure, drive DevOps best practices, and deliver high-impact features for global users.</p>
										<ul className="resume-list">
											<li>Architected and implemented AI-driven automation platforms on Azure.</li>
											<li>Collaborated with cross-functional teams to deliver robust, secure, and efficient software solutions.</li>
											<li>Mentored engineers and promoted a culture of innovation and continuous improvement.</li>
											<li>Championed cloud migration and infrastructure-as-code adoption.</li>
										</ul>
									</div>
								</div>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Lead Site Reliability Engineer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right" style={{ whiteSpace: 'nowrap' }}>Thomson Reuters | Jun 2021 - Sep 2022</div>
									</div>
									<div className="item-content">
										<p>Led SRE team to enhance reliability, scalability, and performance of mission-critical platforms. Drove automation, monitoring, and incident response improvements across cloud and on-prem environments.</p>
										<ul className="resume-list">
											<li>Implemented end-to-end monitoring and alerting systems, reducing incident response times.</li>
											<li>Automated deployment pipelines and infrastructure provisioning using CI/CD and IaC tools.</li>
											<li>Collaborated with engineering and product teams to ensure high availability and resilience.</li>
											<li>Provided technical leadership and mentored junior SREs.</li>
										</ul>
									</div>
								</div>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Senior System Engineer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right" style={{ whiteSpace: 'nowrap' }}>Hitachi Vantara | Jan 2020 - May 2021</div>
									</div>
									<div className="item-content">
										<p>Developed and maintained enterprise systems, focusing on automation, cloud integration, and process optimization. Supported large-scale deployments and contributed to digital transformation projects.</p>
										<ul className="resume-list">
											<li>Engineered solutions for cloud migration and hybrid infrastructure management.</li>
											<li>Automated routine operations, improving efficiency and reducing manual errors.</li>
											<li>Worked closely with global teams to deliver high-quality, scalable systems.</li>
											<li>Provided technical support and troubleshooting for critical production issues.</li>
										</ul>
									</div>
								</div>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Associate Lead Engineer</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right" style={{ whiteSpace: 'nowrap' }}>Thomson Reuters | Apr 2015 - Jan 2020</div>
									</div>
									<div className="item-content">
										<p>Led engineering teams in the design, development, and deployment of enterprise applications. Focused on automation, process improvement, and delivering business value through technology.</p>
										<ul className="resume-list">
											<li>Managed end-to-end project delivery, from requirements gathering to production rollout.</li>
											<li>Designed and implemented automation frameworks for testing and deployment.</li>
											<li>Collaborated with stakeholders to align technology solutions with business goals.</li>
											<li>Mentored and coached junior engineers, fostering a collaborative team environment.</li>
										</ul>
									</div>
								</div>
							</section>

							
							<section className="project-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">AI-Powered Automation Platform</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Microsoft</div>
									</div>
									<div className="item-content">
										<p>Designed and developed a robust automation platform that leverages Azure, Python, and advanced AI/ML services to automate complex business processes and workflows for enterprise clients. Integrated Microsoft Power Platform, Azure Functions, and Logic Apps to orchestrate data flows and automate repetitive tasks. Built interactive dashboards using React for real-time monitoring and analytics. Implemented CI/CD pipelines with Azure DevOps, ensuring rapid, reliable deployments and high system availability. The platform improved operational efficiency, reduced manual errors, and enabled data-driven decision making at scale. <br/><br/>A key highlight was the integration of OpenAI's large language models (LLMs) to enable intelligent document processing, natural language understanding, and conversational automation. This allowed the platform to extract insights from unstructured data, automate customer interactions, and deliver advanced AI-driven features to end users.</p>
									</div>
								</div>
								<div className="item mb-3">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Cloud Migration Accelerator</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Thomson Reuters</div>
									</div>
									<div className="item-content">
										<p>Architected and implemented a comprehensive toolkit to accelerate cloud migration for legacy enterprise applications. Utilized AWS, Terraform, and Docker to automate infrastructure provisioning, application deployment, and monitoring setup. Developed migration strategies that minimized downtime and ensured data integrity, with robust rollback and disaster recovery mechanisms. The solution enabled seamless transition of critical workloads to AWS, improved scalability, and reduced operational costs. Provided detailed documentation and training to client teams for ongoing support and maintenance.</p>
									</div>
								</div>
								<div className="item">
									<div className="item-heading row align-items-center mb-2">
										<h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">Enterprise Monitoring Suite</h4>
										<div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">Hitachi Vantara</div>
									</div>
									<div className="item-content">
										<p>Engineered a scalable monitoring and alerting suite for enterprise applications using Prometheus, Grafana, and custom Node.js microservices. Designed real-time dashboards and alerting mechanisms to provide actionable insights for operations teams. Integrated with Slack and ServiceNow for automated incident management and escalation. The suite significantly improved observability, reduced downtime, and empowered teams to proactively address system issues before they impacted end users.</p>
									</div>
								</div>
							</section>
						</div>
						<aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4" >
							<section className="skills-section py-3" >
								<h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
								<div className="item">
									<h4 className="item-title">Technical</h4>
									<ul className="list-unstyled resume-skills-list" >
										<li className="mb-2">Cloud Architecture (Azure, AWS)</li>
										<li className="mb-2">AI & Automation</li>
										<li className="mb-2">Full-Stack Development (.NET, JavaScript, React)</li>
										<li className="mb-2">DevOps & CI/CD</li>
										<li className="mb-2">Microservices</li>
										<li className="mb-2">Infrastructure as Code</li>
										<li>Automation Scripting (Python, PowerShell)</li>
									</ul>
								</div>
								<div className="item">
									<h4 className="item-title">Professional</h4>
									<ul className="list-unstyled resume-skills-list">
										<li className="mb-2">Technical Leadership</li>
										<li className="mb-2">Mentoring & Teamwork</li>
										<li className="mb-2">Problem Solving</li>
										<li>Effective Communication</li>
									</ul>
								</div>
							</section>
							<section className="education-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
								<ul className="list-unstyled resume-education-list">
									<li className="mb-3">
										<div className="resume-degree font-weight-bold">B.Tech in Computer Science</div>
										<div className="resume-degree-org text-muted">JNTUH College of Engineering Hyderabad</div>
										<div className="resume-degree-time text-muted">2010 - 2014</div>
									</li>
								</ul>
							</section>
							<section className="education-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Certifications</h3>
								<ul className="list-unstyled resume-awards-list">
									<li className="mb-3">
										<div className="font-weight-bold">AWS Certified Solutions Architect – Professional</div>
										<div className="text-muted">Amazon Web Services (AWS) | Issued Jun 2020, Expires Jun 2026</div>
									</li>
									<li className="mb-3">
										<div className="font-weight-bold">AWS Certified Solutions Architect – Associate</div>
										<div className="text-muted">Amazon Web Services (AWS) | Issued May 2020, Expires May 2026</div>
									</li>
									<li className="mb-3">
										<div className="font-weight-bold">Microsoft Global Hackathon Winner</div>
										<div className="text-muted">Microsoft | 2022, 2023</div>
									</li>
								</ul>
							</section>
							<section className="education-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Awards</h3>
								<ul className="list-unstyled resume-awards-list">
									<li className="mb-3">
										<div className="font-weight-bold">MVP</div>
										<div className="text-muted">C# Corner | Jan 2015, Jan 2016</div>
									</li>
								</ul>
							</section>
							<section className="skills-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Languages</h3>
								<ul className="list-unstyled resume-lang-list">
									<li className="mb-2">English <span className="text-muted">(Professional)</span></li>
									<li>Hindi <span className="text-muted">(Native)</span></li>
								</ul>
							</section>
							<section className="skills-section py-3">
								<h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
								<ul className="list-unstyled resume-interests-list mb-0">
									<li className="mb-2">AI & Automation</li>
									<li className="mb-2">Cloud Computing</li>
									<li className="mb-2">Open Source</li>
									<li>Mentoring</li>
								</ul>
							</section>
						</aside>
					</div>
				</div>
				<hr/>
				<div className="resume-footer text-center">
					<ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
						<li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link" href="https://github.com/manishkrch" target="_blank"><i className="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">github.com/manishkrch</span></a></li>
						<li className="list-inline-item mb-lg-0 mr-3"><a className="resume-link" href="https://www.linkedin.com/in/manish-kumar-choudhary/" target="_blank"><i className="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">linkedin.com/in/manish-kumar-choudhary</span></a></li>
						<li className="list-inline-item mb-lg-0 mr-lg-3"><a className="resume-link" href="https://x.com/manishkrch" target="_blank"><i className="fab fa-twitter-square fa-2x mr-2" data-fa-transform="down-4"></i><span className="d-none d-lg-inline-block text-muted">@manishkrch</span></a></li>
					</ul>
				</div>
			</article>
		</div>
	</>
  );
};
export default Resume;
