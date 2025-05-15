import React from 'react';

const Contact: React.FC = () => {
  return (
    <>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email at <a href="mailto:manishki@live.com">manishki@live.com</a>.</p>
            <p>Want to get connected? Follow me on the social channels below.</p>
            <ul className="list-inline mb-0">
              <li className="list-inline-item mb-3"><a className="twitter" href="https://x.com/manishkrch" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-fw fa-lg"></i></a></li>
              <li className="list-inline-item mb-3"><a className="linkedin" href="https://www.linkedin.com/in/manish-kumar-choudhary/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-fw fa-lg"></i></a></li>
              <li className="list-inline-item mb-3"><a className="github" href="https://github.com/manishkrch" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-fw fa-lg"></i></a></li>
              <li className="list-inline-item mb-3"><a className="stack-overflow" href="https://stackoverflow.com/users/4523305/manish-kumar-choudhary" target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow fa-fw fa-lg"></i></a></li>
              <li className="list-inline-item mb-3"><a className="codepen" href="https://leetcode.com/u/kumar_choudhary/" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen fa-fw fa-lg"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form id="contact-form" className="contact-form col-lg-8 mx-lg-auto">
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="sr-only" htmlFor="cname">Name</label>
                <input type="text" className="form-control" id="cname" name="name" placeholder="Name" minLength={2} required aria-required="true" />
              </div>
              <div className="form-group col-md-6">
                <label className="sr-only" htmlFor="cemail">Email</label>
                <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required aria-required="true" />
              </div>
              <div className="form-group col-12">
                <select id="services" className="custom-select" name="services">
                  <option defaultValue="" disabled>Select a service package you're interested in...</option>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="not sure">Not sure</option>
                </select>
                <small className="form-text text-muted pt-1"><i className="fas fa-info-circle mr-2 text-primary"></i>Want to know what's included in each package? Check the <a href="/services" target="_blank">Services & Pricing</a> page.</small>
              </div>
              <div className="form-group col-12">
                <label className="sr-only" htmlFor="cmessage">Your message</label>
                <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows={10} required aria-required="true"></textarea>
              </div>
              <div className="form-group col-12">
                <button type="submit" className="btn btn-block btn-primary py-2">Send Now</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
