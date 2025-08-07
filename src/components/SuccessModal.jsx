
import './SuccessModal.css';

function SuccessModal({ message, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose} className="close-btn">Cerrar</button>
      </div>
    </div>
  );
}

export default SuccessModal;
