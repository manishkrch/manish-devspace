import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Replace with your actual deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8AMVGuIBzZ7Qrh34fjjP-bsAexuW3HBIwlwr-pqbZ6hMU_EU47Ykwy-fpj4JeUtXh/exec";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', services: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  // Automatically clear success message after 1.5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 1500);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!validate()) return;
    setStatus('loading');
    try {
      const params = new URLSearchParams(form);
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: params,
      });
      const text = await res.text();
      if (text.includes('SUCCESS')) {
        setStatus('success');
        setForm({ name: '', email: '', services: '', message: '' });
      } else {
        setStatus('error');
        setError('There was a problem sending your message.');
      }
    } catch {
      setStatus('error');
      setError('There was a problem sending your message.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Manish Kumar</title>
        <meta name="description" content="Contact Manish Kumar for project inquiries, collaborations, or just to say hi. Get in touch via the contact form or email." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manish Kumar Choudhary" />
        <meta name="copyright" content="© 2025 Manish Kumar Choudhary" />
        <meta name="generator" content="React, Vite, TypeScript" />
        <meta name="ai-content" content="false" />
        <meta property="og:title" content="Contact | Manish Kumar" />
        <meta property="og:description" content="Contact Manish Kumar for project inquiries, collaborations, or just to say hi. Get in touch via the contact form or email." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manish-devspace.vercel.app/contact" />
        <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/profile1.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Manish Kumar" />
        <meta name="twitter:description" content="Contact Manish Kumar for project inquiries, collaborations, or just to say hi. Get in touch via the contact form or email." />
        <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/profile1.png" />
        <meta name="twitter:site" content="@manishkrch" />
        <link rel="canonical" href="https://manish-devspace.vercel.app/contact" />
      </Helmet>
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
          <form className="contact-form col-lg-8 mx-lg-auto" onSubmit={handleSubmit}>
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="sr-only" htmlFor="cname">Name</label>
                <input type="text" className="form-control" id="cname" name="name" placeholder="Name" minLength={2} required aria-required="true" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label className="sr-only" htmlFor="cemail">Email</label>
                <input type="email" className="form-control" id="cemail" name="email" placeholder="Email" required aria-required="true" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group col-12">
                <select id="services" className="custom-select" name="services" value={form.services} onChange={handleChange}>
                  <option value="" disabled>Select a service package you're interested in...</option>
                  <option value="basic">Basic</option>
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="not sure">Not sure</option>
                </select>
                <small className="form-text text-muted pt-1"><i className="fas fa-info-circle mr-2 text-primary"></i>Want to know what's included in each package? Check the <a href="/services" target="_blank">Services & Pricing</a> page.</small>
              </div>
              <div className="form-group col-12">
                <label className="sr-only" htmlFor="cmessage">Your message</label>
                <textarea className="form-control" id="cmessage" name="message" placeholder="Enter your message" rows={10} required aria-required="true" value={form.message} onChange={handleChange}></textarea>
              </div>
              <div className="form-group col-12">
                <button type="submit" className="btn btn-block btn-primary py-2" disabled={status==='loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Now'}
                </button>
              </div>
              {error && <div className="form-group col-12"><div className="alert alert-danger">{error}</div></div>}
              {status === 'success' && (
                <div className="form-group col-12">
                  <div className="alert alert-success">
                    Thank you for reaching out! Your message has been sent successfully. I appreciate your interest and will get back to you as soon as possible.
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
