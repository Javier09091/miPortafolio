import "../styles/contactForm.css";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Updated import path for newer versions of emailjs-com

export default function ContactForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = {
      name: formValues.name,
      phoneNumber: formValues.phoneNumber,
      email: formValues.email,
      message: formValues.message,
    };
  
    emailjs
      .send('service_rnj3m9e', 'template_hf0gsoq', templateParams, 'hfd7x0-cx7f8zq192')
      .then((result) => {
        console.log(result.text);
        setFormValues({
          name: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div id="section_contactForm">
      <form id="form" onSubmit={handleSubmit}>
        <h1 id="form_title">Contactame</h1>

        <div id="fields">
          <div className="field">
            <label htmlFor="name">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phoneNumber">Número de telefono</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              value={formValues.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div id="button_container">
            <button type="submit">Enviar mensaje</button>
          </div>
        </div>
      </form>
    </div>
  );
}
