import React, { useState } from 'react';
import './Subscribe.css';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxv1R0hWQuR-mIrCkXwfQKMJgwMcJ_cxzjDRfm28YSxSe1-1VmhcsIbjk5ZpFC_cxxO2Q/exec"; // Replace with your deployed Apps Script URL

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    // Simple email regex for validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section px-3 py-5 p-md-5">
      <div className="container">
        <form className="contact-form col-lg-8 mx-lg-auto" onSubmit={handleSubmit}>
          <div className="form-row align-items-center">
            <div className="form-group col mb-0">
              <label className="sr-only" htmlFor="semail">Email</label>
              <input
                type="email"
                className={`form-control${emailError ? ' is-invalid' : ''}`}
                id="semail"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                aria-required="true"
              />
              {emailError && <div className="invalid-feedback" style={{display:'block'}}>{emailError}</div>}
            </div>
            <div className="form-group mb-0">
              <button type="submit" className="btn btn-primary" disabled={status === 'loading'}>
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </div>
          {/* Removed privacy note as requested */}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
