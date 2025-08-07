// src/components/ContactForm.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_amb1fjr',
      'template_gz8d8m7',
      form.current,
      '1KqzkfzbJSmoUuCnl'
    ).then(() => {
        setStatusType('success');
        setStatusMessage('✅ ¡Mensaje enviado con éxito!');
        form.current.reset();

        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      }, (error) => {
        setStatusType('error');
        setStatusMessage('❌ Hubo un error al enviar el mensaje. Intenta nuevamente.');

        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" name="name" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>

      <button type="submit" className="submit-btn">Enviar</button>

      {/* Mensaje de estado */}
      {statusMessage && (
        <p className={`form-status ${statusType}`}>
          {statusMessage}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
