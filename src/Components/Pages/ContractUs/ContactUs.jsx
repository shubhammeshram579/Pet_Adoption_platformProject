import React, { useState } from 'react';
import "../ContractUs/ContractUs.css"

const ContactUs = () => {
  // States to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State to handle form submission message
  const [responseMessage, setResponseMessage] = useState('');

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (for now)
    setResponseMessage('Thank you for your message! We will get back to you soon.');
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="contact-us" style={{paddingTop:"140px" ,width:"100vw",minHeight:"100vh"}}>
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, please get in touch with us using the form below or via our contact details.</p>

      {/* Shelter Contact Details */}
      <div style={{display:"flex", flexDirection:"row-reverse",alignItems:"start" ,justifyContent:"space-evenly" ,gap:"200px"}}>
      <div className="contact-details">
        <h2 style={{paddingBottom:"20px", color:"#111",paddingTop:"20px"}}>Shelter Contact Information</h2>
        <p><strong>Shelter Name:</strong> Example Shelter</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Email:</strong> info@exampleshelter.org</p>
        <p><strong>Address:</strong> 123 Shelter St, City, State, ZIP</p>
        <p><strong>Follow us:</strong> 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2 style={{ color:"#111",paddingTop:"20px"}}>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
            placeholder='enter your name'
          />

          <label htmlFor="email">Your Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
            placeholder='enter your email'
          />

          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required 
            placeholder='enter your subject'
          />

          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required 
            placeholder='enter your message'
          ></textarea>

          <button type="submit" className='bg-info'>Submit</button>
        </form>
        {responseMessage && <p className="response-message">{responseMessage}</p>}
      </div>
      </div>
    </div>
  );
};

export default ContactUs;