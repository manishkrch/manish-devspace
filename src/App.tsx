// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <div className="main-wrapper">
          <Routes>
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<div>Portfolio Page</div>} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<div>Project Page</div>} />
            <Route path="/blog-home-1" element={<div>Blog Home 1</div>} />
            <Route path="/blog-home-2" element={<div>Blog Home 2</div>} />
            <Route path="/blog-post" element={<div>Blog Post</div>} />
            <Route path="*" element={<AboutMe />} />
          </Routes>

          <footer className="footer text-center py-4">
            <small className="copyright">&copy; {new Date().getFullYear()} Manish Kumar Choudhary. All rights reserved.</small>
          </footer>
      </div>
    </Router>
  );
};

export default App;
