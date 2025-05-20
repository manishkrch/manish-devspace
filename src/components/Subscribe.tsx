import React, { useState, useEffect } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxv1R0hWQuR-mIrCkXwfQKMJgwMcJ_cxzjDRfm28YSxSe1-1VmhcsIbjk5ZpFC_cxxO2Q/exec"; // Replace with your deployed Apps Script URL

const Subscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailError, setEmailError] = useState('');

  // Automatically clear success message after 2 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validateEmail = (value: string) => {
    // Simple email regex for validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  // Sanitize user input for security (example for Subscribe form)
  function sanitizeInput(input: string) {
    return input.replace(/[<>"'`]/g, '');
  }

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
                onChange={e => setEmail(sanitizeInput(e.target.value))}
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
          {status === 'success' && (
            <div className="form-row mt-3">
              <div className="col">
                <div className="alert alert-success mb-0 text-center">
                  Thank you for subscribing! You’ve been added to the list and will receive updates soon.
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
