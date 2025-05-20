import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import  { projects } from './Portfolio';
import { blogPosts } from './BlogHome';

// LinkedIn Recommendations (replace with your real data)
// const testimonialImages = blogPosts.slice(0, 4).map(post => post.image);
const testimonials = [
  {
    quote: `Manish is a skilled engineer who brings a positive attitude and delivers quality results. He adapts quickly and always supports his team, making a real impact on every project he joins.`,
    name: 'Stephen Fletcher',
    info: 'Director of Engineering at Avalara',
    image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f468-1f3fd-200d-1f4bb.png', // 👨🏽‍💻
  },
  {
    quote: `Working with Manish was a great experience. His technical skills and thoughtful approach helped our team succeed. He is reliable, collaborative, and always delivers on time.`,
    name: 'Cariad Eccleston',
    info: 'Senior Software Engineer @ digiLab',
    image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f469-1f3fb-200d-1f4bb.png', // 👩🏻‍💻
  },
  {
    quote: `Manish is a pioneer in CloudOps and always finds effective ways to solve complex problems. He brings deep expertise and a positive attitude to every challenge.`,
    name: 'Bhavin Trikamji',
    info: 'Head of Engineering - Virtual Queueing',
    image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f468-1f3fe-200d-1f4bb.png', // 👨🏾‍💻
  },
  {
    quote: `Manish played a key role in our migration projects and is a dependable technical expert. He is proactive, detail-oriented, and always ready to help the team succeed.`,
    name: 'Ram Arun',
    info: 'Director - Cloud Operations and Product Reliability',
    image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f468-1f3fb-200d-1f4bb.png', // 👨🏻‍💻
  },
  {
    quote: `Manish is a supportive and collaborative colleague. His positive attitude and skills make him a standout team member who always delivers high-quality results.`,
    name: 'Anatolii Horoshko',
    info: 'Lead Systems Engineer / SRE | DevOps @ EPAM Systems',
    image: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f468-1f3fc-200d-1f4bb.png', // 👨🏼‍💻
  },
];

const AboutMe: React.FC = () => {
  React.useEffect(() => {
    // Prevent multiple initializations
    let sliderInstance: any = null;
    if (typeof window !== 'undefined' && (window as any).tns) {
      // Remove any navs inside or after the carousel
      const navs = document.querySelectorAll('.testimonial-carousel ~ .tns-nav, #testimonial-slider-nav .tns-nav');
      navs.forEach(nav => nav.remove());
      sliderInstance = (window as any).tns({
        container: '.testimonial-carousel',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
        nav: true,
        mouseDrag: true,
        gutter: 24,
        speed: 900,
        autoplayTimeout: 6000,
        responsive: {
          768: { items: 2 },
          992: { items: 3 }
        }
      });
      // Move nav dots below the slider, always after the carousel and before the nav buttons
      setTimeout(() => {
        // Try both selectors for nav dots (immediate sibling and any following sibling)
        let nav = document.querySelector('.testimonial-carousel + .tns-nav') || document.querySelector('.testimonial-carousel ~ .tns-nav');
        const navTarget = document.getElementById('testimonial-slider-nav');
        if (nav && navTarget) {
          navTarget.innerHTML = '';
          navTarget.appendChild(nav);
          if (nav instanceof HTMLElement) {
            nav.style.marginTop = '0';
          }
        }
      }, 600);
    }
    // Cleanup on unmount
    return () => {
      if (sliderInstance && sliderInstance.destroy) {
        sliderInstance.destroy();
      }
      const navs = document.querySelectorAll('.testimonial-carousel ~ .tns-nav, #testimonial-slider-nav .tns-nav');
      navs.forEach(nav => nav.remove());
    };
  }, []);

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
      <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="manish-devspace.vercel.app" />
      <meta property="twitter:url" content="https://manish-devspace.vercel.app/about" />
      <meta name="twitter:title" content="Beyond the Brackets – Manish’s Dev Playground" />
      <meta name="twitter:description" content="Manish Kumar's Dev Playground: Cloud, DevOps, AI, and full-stack engineering insights, projects, and portfolio." />
      <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
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
					 <img
        className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
        src="assets/images/profile-lg-o.JPG"
        alt="Portrait of Manish Kumar Choudhary, Senior Software Engineer"
        width="240"
        height="240"
      />
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
							<div className="item-icon mb-2">
        <img
          src="/assets/images/project/project-1.jpg"
          alt="Cloud & DevOps project thumbnail"
          style={{ width: '40px', borderRadius: '8px' }}
          width="40"
          height="40"
        />
        <i className="fab fa-cloud ml-2" aria-hidden="true"></i>
      </div>
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

	  {/* Testimonials Section */}
	  <section className="testimonials-section p-3 p-lg-5">
		<div className="container">
		  <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
		  <div className="testiomonial-carousel-container">
			<div className="testimonial-carousel tiny-slider">
			  {testimonials.map((t, idx) => (
				<div className="item" key={idx}>
				  <div className="item-inner w-100 d-flex flex-column justify-content-between">
					<div className="quote-holder">
					  <blockquote className="quote-content">
						{t.quote}
					  </blockquote>
					  <i className="fas fa-quote-left"></i>
					</div>{/*//quote-holder*/}
					<div className="source-holder mt-3 d-flex align-items-center">
					  <div className="source-profile mr-3">
						<img src={t.image} alt={t.name} />
					  </div>
					  <div className="meta">
						<div className="name font-weight-bold">{t.name}</div>
						<div className="info text-muted">{t.info}</div>
					  </div>
					</div>
				  </div>{/*//item-inner*/}
				</div>
			  ))}
			</div>
			 {/* Nav dots container, always below the carousel */}
			<div id="testimonial-slider-nav" className="w-100 d-flex justify-content-center mt-3"></div>
		  </div>
		  {/* Only one row of navigation buttons below nav dots */}
		</div>
	  </section>
	  <div className="container"><hr /></div>

	  {/* Featured Projects Section */}
	  <section className="featured-section p-3 p-lg-5">
		<div className="container">
		  <h2 className="section-title font-weight-bold mb-5">Featured Projects</h2>
		  <div className="row">
			{projects.slice(0, 4).map((project: any, idx: number) => (
			  <div className="col-md-6 mb-5" key={idx}>
				<div className="card project-card h-100">
				  <div className="row no-gutters">
					<div className="col-lg-4 card-img-holder">
					  <img src={project.image} className="card-img" alt={project.title} />
					</div>
					<div className="col-lg-8">
					  <div className="card-body">
						<h5 className="card-title">
						  <Link to={project.link} className="theme-link">{project.title}</Link>
						</h5>
						<p className="card-text">{project.description}</p>
						<p className="card-text"><small className="text-muted">Client: {project.client}</small></p>
					  </div>
					</div>
				  </div>
				  <div className="link-mask">
					<Link className="link-mask-link" to={project.link}></Link>
					<div className="link-mask-text">
					  <Link className="btn btn-secondary" to={project.link}>
						<i className="fas fa-eye mr-2"></i>View Case Study
					  </Link>
					</div>
				  </div>
				</div>
			  </div>
			))}
		  </div>
		  <div className="text-center py-3">
			<Link to="/portfolio" className="btn btn-primary">
			  <i className="fas fa-arrow-alt-circle-right mr-2"></i>View Portfolio
			</Link>
		  </div>
		</div>
	  </section>
	  <div className="container"><hr /></div>

	  {/* Latest Blog Posts Section */}
	  <section className="latest-blog-section p-3 p-lg-5">
		<div className="container">
		  <h2 className="section-title font-weight-bold mb-5">Latest Blog Posts</h2>
		  <div className="row">
			{blogPosts.slice(0, 3).map((post: any, idx: number) => {
			  // Use relevant images for each blog post
			  let image = post.image;
			  if (post.title.toLowerCase().includes('ai')) {
				image = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'; // AI/automation
			  } else if (post.title.toLowerCase().includes('cloud')) {
				image = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80'; // Cloud
			  } else if (post.title.toLowerCase().includes('linux')) {
				image = 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80'; // Linux/engineering
			  } else if (post.title.toLowerCase().includes('react')) {
				image = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80'; // React/JS
			  } else if (post.title.toLowerCase().includes('career')) {
				image = 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80'; // Career/growth
			  } else if (post.title.toLowerCase().includes('terraform')) {
				image = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80'; // Terraform/cloud infra
			  }
			  return (
				<div className="col-md-4 mb-5" key={idx}>
				  <div className="card blog-post-card h-100">
					<img className="card-img-top" src={image} alt={post.title} />
					<div className="card-body">
					  <h5 className="card-title">
						<Link className="theme-link" to={post.link}>{post.title}</Link>
					  </h5>
					  <p className="card-text">{post.intro}</p>
					  <p className="mb-0">
						<Link className="more-link" to={post.link}>Read more &rarr;</Link>
					  </p>
					</div>
					<div className="card-footer">
					  <small className="text-muted">{post.date} &middot; {post.time}</small>
					</div>
				  </div>
				</div>
			  );
			})}
		  </div>
		  <div className="text-center py-3">
			<Link to="/blog" className="btn btn-primary">
			  <i className="fas fa-arrow-alt-circle-right mr-2"></i>View Blog
			</Link>
		  </div>
		</div>
	  </section>
	  <div className="container"><hr /></div>
	</>
  );
};

export default AboutMe;
