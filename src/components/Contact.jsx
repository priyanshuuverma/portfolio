import React, { useState } from "react";
import { FaInstagram, FaGithubSquare, FaTwitter } from 'react-icons/fa';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { SiGmail } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form Data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="mee">
    
    <div className="container contact" id="contact">
      
    <h1 className="me">GET IN TOUCH </h1>
    
    <div
        className="contact-icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      > 
        <a href="https://www.instagram.com/vermapriyanshuu?igsh=MWxjbmRxNXlvYXMwaQ==" target="_blank" rel="noopener noreferrer" className="items">
          <FaInstagram className="icons" />
        </a>
        
        <a href="https://www.linkedin.com/in/priyanshu-verma-04a315288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="items">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://github.com/priyanshuuverma" target="_blank" rel="noopener noreferrer" className="items">
          <FaGithubSquare className="icons" />
        </a>
        <a href="officialpriyanshu2003@gmail.com" target="_blank" rel="noopener noreferrer" className="items">
          <SiGmail className="icons" />
        </a>
      </div>

      <div className="contact-form">
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
        {submitted && <p className="success-message">Thank you for your message!</p>}
      </div>
      
    </div>
    </div>
  );
};

export default Contact;
