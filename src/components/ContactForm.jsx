import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import SuccessModal from './SuccessModal';

function ContactForm({ idioma }) {
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

  const textos = {
    es: {
      nombre: "Nombre",
      correo: "Correo Electrónico",
      mensaje: "Mensaje",
      enviar: "Enviar",
      enviado: "¡Mensaje enviado con éxito!"
    },
    en: {
      nombre: "Name",
      correo: "Email",
      mensaje: "Message",
      enviar: "Send",
      enviado: "Message sent successfully!"
    }
  };

  const t = textos[idioma] || textos.es;

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t.nombre}</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">{t.correo}</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">{t.mensaje}</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-btn">{t.enviar}</button>
      </form>

      {showModal && (
        <SuccessModal
          message={t.enviado}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default ContactForm;
