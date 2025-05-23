import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Replace with your actual deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8AMVGuIBzZ7Qrh34fjjP-bsAexuW3HBIwlwr-pqbZ6hMU_EU47Ykwy-fpj4JeUtXh/exec";

/**
 * Sanitizes user input to prevent XSS attacks.
 * @param input - The user input string
 * @returns The sanitized string
 */
function sanitizeInput(input: string): string {
  return input.replace(/[<>"'`]/g, '');
}

interface ContactForm {
  name: string;
  email: string;
  services: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', services: '', message: '' });
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
    setForm({ ...form, [e.target.name]: sanitizeInput(e.target.value) });
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
      // Fix: convert form to Record<string, string> for URLSearchParams
      const params = new URLSearchParams({
        name: form.name,
        email: form.email,
        services: form.services,
        message: form.message,
      });
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
        <title>Contact – Manish Kumar</title>
        <meta name="description" content="Contact Manish Kumar for cloud, DevOps, and AI consulting. Get in touch for project inquiries, collaborations, or mentorship." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manish Kumar Choudhary" />
        <meta name="copyright" content="© 2025 Manish Kumar Choudhary" />
        <meta name="generator" content="React, Vite, TypeScript" />
        <meta name="ai-content" content="false" />
        <meta property="og:url" content="https://manish-devspace.vercel.app/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Manish Kumar" />
        <meta property="og:description" content="Contact Manish Kumar for project inquiries, collaborations, or just to say hi. Get in touch via the contact form or email." />
        <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="manish-devspace.vercel.app" />
        <meta property="twitter:url" content="https://manish-devspace.vercel.app/contact" />
        <meta name="twitter:title" content="Contact | Manish Kumar" />
        <meta name="twitter:description" content="Contact Manish Kumar for project inquiries, collaborations, or just to say hi. Get in touch via the contact form or email." />
        <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
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
          <form className="contact-form col-lg-8 mx-lg-auto" onSubmit={handleSubmit} aria-label="Contact form">
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Name" minLength={2} required aria-required="true" aria-label="Name" autoComplete="name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Email" required aria-required="true" aria-label="Email" autoComplete="email" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group col-12">
                <label htmlFor="services">Service (optional)</label>
                <select id="services" className="custom-select" name="services" value={form.services} onChange={handleChange} aria-label="Service">
                  <option value="" disabled>Select a service package you're interested in...</option>
                  <option value="cloud">Cloud Consulting</option>
                  <option value="devops">DevOps Automation</option>
                  <option value="ai">AI/ML Solutions</option>
                  <option value="other">Other</option>
                </select>
                <small className="form-text text-muted pt-1"><i className="fas fa-info-circle mr-2 text-primary"></i>Want to know what's included in each package? Check the <a href="/services" target="_blank">Services & Pricing</a> page.</small>
              </div>
              <div className="form-group col-12">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" name="message" placeholder="Enter your message" rows={10} required aria-required="true" aria-label="Message" value={form.message} onChange={handleChange}></textarea>
              </div>
              <div className="form-group col-12">
                <button type="submit" className="btn btn-block btn-primary py-2" disabled={status==='loading'} aria-busy={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Now'}
                </button>
              </div>
              {error && <div className="form-group col-12"><div className="alert alert-danger" role="alert" aria-live="assertive">{error}</div></div>}
              {status === 'success' && (
                <div className="form-group col-12">
                  <div className="alert alert-success" role="status" aria-live="polite">
                    Thank you for reaching out! Your message has been sent successfully. I appreciate your interest and will get back to you as soon as possible.
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Contact;
