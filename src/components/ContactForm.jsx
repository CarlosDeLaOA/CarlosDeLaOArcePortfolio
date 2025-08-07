import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import SuccessModal from './SuccessModal';

function ContactForm() {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_amb1fjr',
      'template_gz8d8m7',
      form.current,
      '1KqzkfzbJSmoUuCnl'
    ).then(() => {
        setShowModal(true);
        form.current.reset();

        setTimeout(() => setShowModal(false), 4000);
      }, (error) => {
        alert('Error al enviar: ' + error.text);
      });
  };

  return (
    <>
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
      </form>

      {showModal && (
        <SuccessModal
          message="¡Mensaje enviado con éxito!"
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ContactForm;
