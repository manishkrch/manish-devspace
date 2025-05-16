import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header text-center">	    
		<div className="force-overflow">
			<h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">Manish Kumar</a></h1>
			
			<nav className="navbar navbar-expand-lg navbar-dark" >
				
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
    <div id="navigation" className="collapse navbar-collapse flex-column">
      <div className="profile-section pt-3 pt-lg-0 text-center">
        <img
          className="profile-image mb-3 rounded-circle mx-auto"
          src="/assets/images/profile1.png"
          alt="Manish Kumar Choudhary"
        />
        <div className="bio mb-3">
          Hi, I'm Manish Kumar Choudhary, a passionate full-stack developer
          specializing in building scalable web applications. Welcome to my
          personal website!
        </div>
        <ul className="social-list list-inline py-2 mx-auto">
          <li className="list-inline-item">
            <a href="https://x.com/manishkrch" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter fa-fw"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/manish-kumar-choudhary/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in fa-fw"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/manishkrch" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github-alt fa-fw"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://stackoverflow.com/users/4523305/manish-kumar-choudhary" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
              <i className="fab fa-stack-overflow fa-fw"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://leetcode.com/u/kumar_choudhary/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <i className="fab fa-codepen fa-fw"></i>
            </a>
          </li>
        </ul>
        <hr />
      </div>

      <ul className="navbar-nav flex-column text-left">
        <li className={`nav-item${location.pathname === '/about' ? ' active' : ''}`}>
          <Link className="nav-link" to="/about">
            <i className="fas fa-user fa-fw mr-2"></i>About Me
            {location.pathname === '/about' && <span className="sr-only">(current)</span>}
          </Link>
        </li>
        <li className={`nav-item${location.pathname === '/portfolio' ? ' active' : ''}`}>
          <Link className="nav-link" to="/portfolio">
            <i className="fas fa-laptop-code fa-fw mr-2"></i>Portfolio
            {location.pathname === '/portfolio' && <span className="sr-only">(current)</span>}
          </Link>
        </li>
        <li className={`nav-item${location.pathname === '/services' ? ' active' : ''}`}>
          <Link className="nav-link" to="/services">
            <i className="fas fa-briefcase fa-fw mr-2"></i>Services &amp; Pricing
          </Link>
        </li>
        <li className={`nav-item${location.pathname === '/resume' ? ' active' : ''}`}>
          <Link className="nav-link" to="/resume">
            <i className="fas fa-file-alt fa-fw mr-2"></i>Resume
          </Link>
        </li>
        <li className={`nav-item${location.pathname === '/blog' ? ' active' : ''}`}>
          <Link className="nav-link" to="/blog">
            <i className="fas fa-blog fa-fw mr-2"></i>Blog
          </Link>
        </li>
        <li className={`nav-item${location.pathname === '/contact' ? ' active' : ''}`}>
          <Link className="nav-link" to="/contact">
            <i className="fas fa-envelope-open-text fa-fw mr-2"></i>Contact
          </Link>
        </li>
      </ul>

      <div className="my-2">
        <a
          className="btn btn-primary"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-paper-plane mr-2"></i>Hire Me
        </a>
      </div>

      <div className="dark-mode-toggle text-center w-100">
        <hr className="mb-4" />
        <h4 className="toggle-name mb-3">
          <i className="fas fa-adjust mr-1"></i>Dark Mode
        </h4>

        <input className="toggle" id="darkmode" type="checkbox" />
        <label className="toggle-btn mx-auto mb-0" htmlFor="darkmode"></label>
      </div>
    </div>
    </nav>
		</div>
	</header>
  );
};

export default Navbar;
