import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AboutMe: React.FC = () => {
  return (
	<>
	  <Helmet>
      <title>Beyond the Brackets – Manish’s Dev Playground</title>
      <meta name="description" content="Manish Kumar's Dev Playground: Cloud, DevOps, AI, and full-stack engineering insights, projects, and portfolio." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Manish Kumar Choudhary" />
      <meta name="copyright" content="© 2025 Manish Kumar Choudhary" />
      <meta name="generator" content="React, Vite, TypeScript" />
      <meta name="ai-content" content="false" />
      <meta property="og:url" content="https://manish-devspace.vercel.app/about" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Beyond the Brackets – Manish’s Dev Playground" />
      <meta property="og:description" content="Manish Kumar's Dev Playground: Cloud, DevOps, AI, and full-stack engineering insights, projects, and portfolio." />
      <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/profile1.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="manish-devspace.vercel.app" />
      <meta property="twitter:url" content="https://manish-devspace.vercel.app/about" />
      <meta name="twitter:title" content="Beyond the Brackets – Manish’s Dev Playground" />
      <meta name="twitter:description" content="Manish Kumar's Dev Playground: Cloud, DevOps, AI, and full-stack engineering insights, projects, and portfolio." />
      <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/profile1.png" />
      <meta name="twitter:site" content="@manishkrch" />
      <link rel="canonical" href="https://manish-devspace.vercel.app/about" />
    </Helmet>
	  <section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser media flex-column flex-lg-row">
					
					<div className="media-body">
						<h2 className="name font-weight-bold mb-1">Manish Choudhary</h2>
						<div className="tagline mb-3">Senior Software Engineer | Cloud & AI Enthusiast</div>
						<div className="bio mb-4">
							Hey! I'm Manish, a techie who loves building smart, scalable solutions and making life easier with automation and the cloud. I’m always up for a new challenge, learning something fresh, or helping others grow. When I’m not coding, you’ll find me hanging out with my adorable 9-month-old daughter, Dhriti—she’s the sweetest, funniest little bundle of joy and keeps me inspired every day!<br/><br/>
							Want to know more about my work or projects? Check out my <Link className="link-on-bg" to="/resume">online resume</Link> and <Link className="link-on-bg" to="/portfolio">project portfolio</Link>.
						</div>
						<div className="mb-4">
							<Link className="btn btn-primary mr-2 mb-3" to="/portfolio"><i className="fas fa-arrow-alt-circle-right mr-2"></i><span className="d-none d-md-inline">View</span> Portfolio</Link>
							<Link className="btn btn-secondary mb-3" to="/resume"><i className="fas fa-file-alt mr-2"></i><span className="d-none d-md-inline">View</span> Resume</Link>
						</div>
					</div>
					<img className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0" src="assets/images/profile-lg-o.JPG" alt="Manish Kumar Choudhary" />
				</div>
			</div>
		</section>
		
		<section className="overview-section p-3 p-lg-5">
			<div className="container">
				<h2 className="section-title font-weight-bold mb-3">What I do</h2>
				<div className="section-intro mb-5">
					With over a decade of experience, I specialize in cloud, DevOps automation, and AI-powered solutions—delivering impactful results for global clients. My expertise spans Azure, AWS, .NET, JavaScript, React, and infrastructure as code (Terraform, CloudFormation). I build scalable web and mobile apps, automate cloud infrastructure, and solve production issues on Linux. I love mentoring, open source, and exploring new tech. Want to know more? Check out my <Link to="/resume">online resume</Link> and <Link to="/portfolio">project portfolio</Link>.
				</div>
				<div className="row">
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2"><img src="/assets/images/project/project-1.jpg" alt="Cloud & DevOps" style={{width: '40px', borderRadius: '8px'}} /> <i className="fab fa-cloud ml-2"></i></div>
							<h3 className="item-title">Cloud & DevOps Automation</h3>
							<div className="item-desc">Automating cloud infrastructure with <strong>AWS</strong>, <strong>Azure</strong>, <strong>Terraform</strong>, and <strong>CloudFormation</strong>. Building CI/CD pipelines, monitoring, and incident response for reliable, scalable systems.</div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2"><img src="/assets/images/project/project-5.jpg" alt="AI & Automation" style={{width: '40px', borderRadius: '8px'}} /> <i className="fas fa-robot ml-2"></i></div>
							<h3 className="item-title">AI & Automation</h3>
							<div className="item-desc">Designing AI-powered automation platforms using Azure, Python, and OpenAI. Streamlining business processes and enabling intelligent document processing and analytics.</div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2"><img src="/assets/images/project/project-case-study-thumb.jpg" alt="Web & Mobile Apps" style={{width: '40px', borderRadius: '8px'}} /> <i className="fas fa-laptop-code ml-2"></i></div>
							<h3 className="item-title">Web & Mobile Apps</h3>
							<div className="item-desc">Building modern web and mobile apps with <strong>React</strong>, <strong>Python</strong>, <strong>C#</strong>, .NET, and cloud APIs. Focused on performance, security, and user experience.</div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2"><img src="/assets/images/project/project-7.jpg" alt="Linux & Production Engineering" style={{width: '40px', borderRadius: '8px'}} /> <i className="fab fa-linux ml-2"></i></div>
							<h3 className="item-title">Linux & Production Engineering</h3>
							<div className="item-desc">Debugging and automating production systems on Linux. Building monitoring suites, log aggregation, and root cause analysis tools for mission-critical environments.</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2">
							  <img src="/src/assets/react.svg" alt="React" style={{width: '32px', borderRadius: '8px', background: '#fff', padding: '2px'}} />
							  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" style={{width: '32px', marginLeft: '4px'}} />
							  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" style={{width: '32px', marginLeft: '4px'}} />
							  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" style={{width: '32px', marginLeft: '4px'}} />
							  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" style={{width: '32px', marginLeft: '4px'}} />
							  <i className="fas fa-code ml-2"></i>
							</div>
							<h3 className="item-title">Programming Languages</h3>
							<div className="item-desc"><strong>Python</strong>, <strong>C#</strong>, <strong>JavaScript</strong>, <strong>TypeScript</strong>, <strong>React</strong></div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2"><img src="/assets/images/project/project-2.jpg" alt="Cloud Technologies" style={{width: '40px', borderRadius: '8px'}} /> <i className="fab fa-aws ml-2"></i></div>
							<h3 className="item-title">Cloud Technologies</h3>
							<div className="item-desc"><strong>AWS</strong>, <strong>Azure</strong>, <strong>Azure DevOps</strong>, <strong>Serverless</strong></div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon mb-2"><img src="/assets/images/project/project-4.jpg" alt="Automation Tools" style={{width: '40px', borderRadius: '8px'}} /> <i className="fas fa-cogs ml-2"></i></div>
							<h3 className="item-title">Automation Tools</h3>
							<div className="item-desc"><strong>Terraform</strong>, <strong>CloudFormation</strong>, <strong>CI/CD</strong>, <strong>GitHub Actions</strong></div>
						</div>
					</div>
				</div>
				<div className="text-center py-3">
				  <Link to="/services" className="btn btn-primary">
					<i className="fas fa-arrow-alt-circle-right mr-2"></i>Services & Pricing
				  </Link>
				</div>
				
			</div>
		</section>
	  <div className="container"><hr /></div>
	</>
  );
};

export default AboutMe;
