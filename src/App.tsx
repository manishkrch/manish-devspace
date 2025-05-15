// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
        <Navbar />
        <div className="main-wrapper">
          <Routes>
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<div>Portfolio Page</div>} />
            <Route path="/services" element={<div>Services Page</div>} />
            <Route path="/resume" element={<Resume/>} />
            <Route path="/blog" element={<div>Blog Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
            <Route path="/project" element={<div>Project Page</div>} />
            <Route path="/blog-home-1" element={<div>Blog Home 1</div>} />
            <Route path="/blog-home-2" element={<div>Blog Home 2</div>} />
            <Route path="/blog-post" element={<div>Blog Post</div>} />
            <Route path="*" element={<AboutMe />} />
          </Routes>

          <footer className="footer text-center py-4">
					<small className="copyright">Template Copyright &copy; <a href="https://themes.3rdwavemedia.com/" target="_blank">3rd Wave Media</a></small>
				</footer>
      </div>
    </Router>
  );
};

export default App;
