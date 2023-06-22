import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check if name is empty
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Check if email is valid
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    // Check if message is empty
    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform form submission logic here
      console.log('Form is valid, submitting...');
    } else {
      console.log('Form is invalid');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <section id="contactme" className="contact">
      <h2><u>Contact</u></h2>
    
      <div>
        <label>Name:</label>
        <input type="text" name="name :" value={formData.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email :" value={formData.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message :" value={formData.message} onChange={handleChange} />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
      </section>
    </form>
  
  );
};

export default ContactForm;
