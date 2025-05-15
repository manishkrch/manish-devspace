import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe: React.FC = () => {
  return (
	<>
	  <section className="about-me-section p-3 p-lg-5 theme-bg-light">
			<div className="container">
				<div className="profile-teaser media flex-column flex-lg-row">
					
					<div className="media-body">
						<h2 className="name font-weight-bold mb-1">Manish Choudhary</h2>
						<div className="tagline mb-3">Senior Software Engineer | Cloud & AI Enthusiast</div>
						<div className="bio mb-4">
							Hey! I'm Manish, a techie who loves building smart, scalable solutions and making life easier with automation and the cloud. I’m always up for a new challenge, learning something fresh, or helping others grow. When I’m not coding, you’ll find me hanging out with my adorable 9-month-old daughter, Dhriti—she’s the sweetest, funniest little bundle of joy and keeps me inspired every day!<br/><br/>
							Want to know more about my work or projects? Check out my <a className="link-on-bg" href="resume.html">online resume</a> and <a className="link-on-bg" href="portfolio.html">project portfolio</a>.
						</div>
						<div className="mb-4">
							<a className="btn btn-primary mr-2 mb-3" href="portfolio.html"><i className="fas fa-arrow-alt-circle-right mr-2"></i><span className="d-none d-md-inline">View</span> Portfolio</a>
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
				<div className="section-intro mb-5">With over a decade of experience, I specialize in cloud, AI, and automation—delivering impactful solutions for global clients. My expertise spans Azure, AWS, .NET, JavaScript, and DevOps. I love mentoring, open source, and exploring new tech. And when I’m not coding, you’ll find me making my daughter Dhriti laugh! Want to know more? Check out my <a href="resume.html">online resume</a> and <a href="portfolio.html">project portfolio</a>.</div>
				<div className="row">
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-js-square"></i></div>
							<h3 className="item-title">Vanilla JavaScript</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.</div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-angular mr-2"></i><i className="fab fa-react mr-2"></i><i className="fab fa-vuejs"></i></div>
							<h3 className="item-title">Angular, React &amp;  Vue</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-node-js"></i></div>
							<h3 className="item-title">Node.js</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-python"></i></div>
							<h3 className="item-title">Python &amp; Django</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-php"></i></div>
							<h3 className="item-title">PHP</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-npm mr-2"></i><i className="fab fa-gulp mr-2"></i><i className="fab fa-grunt"></i></div>
							<h3 className="item-title">npm, Gulp &amp; Grunt</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-html5 mr-2"></i><i className="fab fa-css3-alt"></i></div>
							<h3 className="item-title">HTML &amp; CSS</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
					<div className="item col-6 col-lg-3">
						<div className="item-inner">
							<div className="item-icon"><i className="fab fa-sass mr-2"></i><i className="fab fa-less"></i></div>
							<h3 className="item-title">Sass &amp; LESS</h3>
							<div className="item-desc">List skills/technologies here. You can change the icon above to any of the 1500+ <a className="theme-link" href="https://fontawesome.com/" target="_blank">FontAwesome 5 free icons</a> available. Aenean commodo ligula eget dolor.  </div>
						</div>
					</div>
				</div>
				<div className="text-center py-3">
                    <Link to="/services" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right mr-2"></i>Services &amp; Pricing
					
				</Link></div>
				
			</div>
		</section>
	  <div className="container"><hr /></div>
	</>
  );
};

export default AboutMe;
