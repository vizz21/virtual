import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="App">
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ><div className="logo-container">
          <div className="logo-backdrop"></div>
          <motion.img 
            src="/logo virtual (1).jpg" 
            alt="Virtual Enterprises Logo" 
            className="logo" 
            initial={{ rotate: -5 }}
            animate={{ rotate: 5 }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 3 
            }}
          />
        </div>
        {/* <img src="/logo virtual (1).jpg" alt="Virtual Enterprises Logo" className="logo" /> */}
        <h1>Virtual Enterprises Pune</h1>
        <p>Reliable Computer Hardware & Services for Large-Scale Clients</p>
        <a href="#contact" className="cta-button">Get a Quote</a>
      </motion.header>

      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Us</h2>
        <p>We specialize in providing high-quality computer hardware solutions tailored to the needs of enterprise clients. With a decade of experience and a passion for technology, we help organizations scale efficiently with robust hardware setups.</p>
      </motion.section>

      <motion.section
        id="services"
        className="services section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Custom Hardware Builds</h3>
          <p>Tailor-made PCs, servers, and workstations for business-critical tasks.</p>
        </div>
        <div className="service-item">
          <h3>Procurement & Deployment</h3>
          <p>End-to-end procurement, setup, and on-site configuration for large institutions.</p>
        </div>
        <div className="service-item">
          <h3>Enterprise Support</h3>
          <p>Ongoing hardware maintenance, upgrades, and troubleshooting packages.</p>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="contact section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Us</h2>
        <p>Ready to scale your infrastructure? Reach out to us:</p>

        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <div className="form-group">
            <label>
              Your Name:
              <input type="text" name="name" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Your Email:
              <input type="email" name="email" required />
            </label>
          </div>
          <div className="form-group">
            <label>
              Message:
              <textarea name="message" rows="5" required></textarea>
            </label>
          </div>
          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </motion.section>

      <footer>
        &copy; 2025 Virtual Enterprises Pune | All rights reserved.
      </footer>
    </div>
  );
};

export default App;