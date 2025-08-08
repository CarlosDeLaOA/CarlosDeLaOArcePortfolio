import Lottie from "lottie-react";
import successAnimation from "../assets/resulpage-success-motion-design.json";

function SuccessModal({ message, onClose }) {
  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  };

  const contentStyles = {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    width: "90%",
    maxWidth: "360px"
  };

  const textStyles = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#10497E",
    marginTop: "1rem"
  };

  return (
    <div style={overlayStyles} onClick={onClose}>
      <div style={contentStyles} onClick={(e) => e.stopPropagation()}>
        <Lottie
          animationData={successAnimation}
          loop={false}
          style={{ width: "180px", height: "auto", margin: "0 auto" }}
        />
        <p style={textStyles}>{message}</p>
      </div>
    </div>
  );
}

export default SuccessModal;
