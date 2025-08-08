import "./Footer.css";

export default function Footer({ t }) {
  const rights = t?.footer?.rights ?? "Todos los derechos reservados.";
  const madeBy = t?.footer?.madeBy ?? "Hecho por Carlos Manuel De La O Arce";

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>{rights}</p>
        <p>{madeBy}</p>
      </div>
    </footer>
  );
}