import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const faqData = [
  {
    question: 'What technologies do you specialize in?',
    answer:
      'I specialize in cloud platforms (Azure, AWS), automation, AI/ML, full-stack development (React, .NET, Node.js), and DevOps. I have hands-on experience with OpenAI, large language models, and enterprise-scale solutions.',
  },
  {
    question: 'Can you help migrate our legacy systems to the cloud?',
    answer:
      'Yes! I have led multiple cloud migration projects for large organizations, ensuring minimal downtime, robust security, and seamless integration with modern cloud services.',
  },
  {
    question: 'Do you offer AI-powered automation solutions?',
    answer:
      "Absolutely. I have built AI-powered automation platforms using Azure, Python, and OpenAI's large language models to automate business processes, document processing, and customer interactions.",
  },
  {
    question: 'What is your approach to project delivery and communication?',
    answer:
      'I believe in transparent, agile project management with regular updates, clear documentation, and collaborative feedback. My goal is to deliver high-quality solutions that align with your business objectives.',
  },
  {
    question: 'Can you provide ongoing support and maintenance?',
    answer:
      'Yes, I offer ongoing support, monitoring, and optimization services to ensure your applications remain secure, scalable, and up-to-date.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Simply reach out via the Contact page or email me at manishki@live.com with your project details. I\'ll get back to you promptly to discuss your requirements and next steps.',
  },
  {
    question: 'Do you sign NDAs and provide code ownership?',
    answer:
      'Yes, I am happy to sign NDAs and ensure you retain full ownership of all code and deliverables. Your intellectual property and privacy are always respected.',
  },
  {
    question: 'Can you integrate with third-party APIs and legacy systems?',
    answer:
      'Absolutely. I have extensive experience integrating with a wide range of APIs (REST, GraphQL, SOAP) and connecting modern apps to legacy systems securely and efficiently.',
  },
  {
    question: 'What is your payment and engagement process?',
    answer:
      'I typically work with milestone-based payments for larger projects, or fixed-price for smaller engagements. We will agree on a clear scope, timeline, and payment schedule before starting.',
  },
  {
    question: 'Do you offer code reviews or technical consulting?',
    answer:
      'Yes, I offer code review, architecture consulting, and technical mentorship services for teams and individuals looking to improve code quality or adopt new technologies.',
  },
  {
    question: 'Can you help with DevOps, CI/CD, and cloud automation?',
    answer:
      'Yes, I can set up CI/CD pipelines, infrastructure as code, and cloud automation using tools like GitHub Actions, Azure DevOps, Terraform, and more.',
  },
];

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <Helmet>
        <title>Services & Pricing | Manish Kumar</title>
        <meta name="description" content="Discover Manish Kumar's web, cloud, and AI services. View packages, pricing, and what's included for your project." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Manish Kumar Choudhary" />
        <meta name="copyright" content="© 2025 Manish Kumar Choudhary" />
        <meta name="generator" content="React, Vite, TypeScript" />
        <meta name="ai-content" content="false" />
        <meta property="og:title" content="Services & Pricing | Manish Kumar" />
        <meta property="og:description" content="Discover Manish Kumar's web, cloud, and AI services. View packages, pricing, and what's included for your project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manish-devspace.vercel.app/services" />
        <meta property="og:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="manish-devspace.vercel.app" />
        <meta property="twitter:url" content="https://manish-devspace.vercel.app/services" />
        <meta name="twitter:title" content="Services & Pricing | Manish Kumar" />
        <meta name="twitter:description" content="Discover Manish Kumar's web, cloud, and AI services. View packages, pricing, and what's included for your project." />
        <meta name="twitter:image" content="https://manish-devspace.vercel.app/assets/images/og-image.png" />
        <meta name="twitter:site" content="@manishkrch" />
        <link rel="canonical" href="https://manish-devspace.vercel.app/services" />
      </Helmet>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Services & Pricing</h2>
          <div className="intro">
            <p>I have 10+ years of development experience building software for the web and cloud. You can take a look at my <a href="/portfolio" target="_blank">project portfolio</a> and <a href="/resume" target="_blank">online resume</a> to find out more about my skills and experiences.</p>
            <p className="mb-0">I'm currently taking on freelance software development work. You're welcome to contact me for a custom quote for your project. I also offer development service packages with fixed pricing.</p>
          </div>
        </div>
      </section>
      <section className="pricing-section py-5">
        <div className="container single-col-max-width">
          <h3 className="text-center mb-4">Service Packages</h3>
          <div className="table-responsive">
            <table id="pricing-table" className="pricing-table table-bordered">
              <thead>
                <tr className="border-0">
                  <th className="pricing-0-data theme-bg-light"></th>
                  <th className="pricing-package-title pricing-1-data">Basic</th>
                  <th className="pricing-package-title pricing-2-data mobile-is-hidden">Standard</th>
                  <th className="pricing-package-title pricing-3-data mobile-is-hidden">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="pricing-price-row">
                  <th className="pricing-0-data">Package Price</th>
                  <td className="pricing-1-data"><span className="price-number">$900</span></td>
                  <td className="pricing-2-data mobile-is-hidden"><span className="price-number">$2500</span></td>
                  <td className="pricing-3-data mobile-is-hidden"><span className="price-number">$5000+</span></td>
                </tr>
                <tr className="pricing-desc-row">
                  <th className="pricing-0-data">Details</th>
                  <td className="pricing-1-data"><span className="pricing-package-desc">A small app or website, ideal for MVPs, landing pages, or personal projects. Includes requirements gathering, setup, deployment, and basic support.</span></td>
                  <td className="pricing-2-data mobile-is-hidden"><span className="pricing-package-desc">A medium-sized app with custom features, integrations, and responsive design. Includes user authentication, API integration, testing, and documentation.</span></td>
                  <td className="pricing-3-data mobile-is-hidden"><span className="pricing-package-desc">A complex, enterprise-grade solution with advanced integrations, automation, and ongoing support. Ideal for SaaS, dashboards, or AI-powered apps.</span></td>
                </tr>
                <tr className="pricing-feature-row">
                  <th className="pricing-feature-row-name pricing-0-data">Key Features</th>
                  <td className="pricing-1-data">Perfect for simple websites or MVPs: 1-3 pages, responsive design, and a basic contact form. SEO best practices are included, and your site will be deployed to your preferred host. One revision is provided to ensure satisfaction.</td>
                  <td className="pricing-2-data mobile-is-hidden">Ideal for growing businesses: Up to 8 custom pages/components, modern UI/UX, user authentication, and integration with APIs or third-party services. Automated tests, documentation, and two rounds of revisions are included.</td>
                  <td className="pricing-3-data mobile-is-hidden">For advanced needs: Unlimited pages/components, AI and cloud integrations, role-based access, performance optimization, and CI/CD DevOps setup. Includes ongoing support, monitoring, and at least five revisions for continuous improvement.</td>
                </tr>
                <tr className="pricing-feature-row">
                  <th className="pricing-feature-row-name pricing-0-data">Revisions</th>
                  <td className="pricing-1-data"><span className="text-muted">1</span></td>
                  <td className="pricing-2-data mobile-is-hidden"><span className="text-muted">2</span></td>
                  <td className="pricing-3-data mobile-is-hidden">5+</td>
                </tr>
                <tr className="pricing-feature-row">
                  <th className="pricing-feature-row-name pricing-0-data">Delivery Time</th>
                  <td className="pricing-1-data">7 days</td>
                  <td className="pricing-2-data mobile-is-hidden">14 days</td>
                  <td className="pricing-3-data mobile-is-hidden">2 - 3 month(s)</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="pricing-cta-row">
                  <td className="pricing-0-data"></td>
                  <td className="pricing-1-data"><a className="btn btn-primary" href="/contact">Book Now</a></td>
                  <td className="pricing-2-data mobile-is-hidden"><a className="btn btn-primary" href="/contact">Book Now</a></td>
                  <td className="pricing-3-data mobile-is-hidden"><a className="btn btn-primary" href="/contact">Get A Quote</a></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div className="container single-col-max-width">
          <h3 className="text-center mb-4">FAQs</h3>
          <div className="text-center mb-5">
            Find answers to common questions about my services, process, technologies, and how we can work together. If you have a specific query, feel free to reach out directly!
          </div>
          <div id="faq-accordion" className="faq-accordion mx-auto">
            {faqData.map((faq, idx) => (
              <div className="card border-0 mb-3" key={idx}>
                <div className="card-header border-0 p-3 theme-bg-light">
                  <h4 className="card-title mb-0">
                    <button
                      className={`card-toggle btn btn-link p-0 d-flex align-items-center${openIndex === idx ? '' : ' collapsed'}`}
                      aria-expanded={openIndex === idx}
                      aria-controls={`faq${idx}`}
                      onClick={() => handleToggle(idx)}
                      style={{ textDecoration: 'none', color: 'inherit', width: '100%', justifyContent: 'space-between' }}
                    >
                      <span>
                        <i className={`fas fa-chevron-${openIndex === idx ? 'up' : 'down'}`} style={{ marginRight: 8 }}></i>
                        {faq.question}
                      </span>
                    </button>
                  </h4>
                </div>
                <div
                  id={`faq${idx}`}
                  className={`card-collapse collapse${openIndex === idx ? ' show' : ''}`}
                  style={{ transition: 'height 0.3s' }}
                >
                  <div className="card-body pt-0 theme-bg-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
