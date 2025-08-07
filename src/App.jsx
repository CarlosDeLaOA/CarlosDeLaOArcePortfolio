import './App.css';
import logo from './assets/LOGO.png';
import scrollIcon from './assets/scroll-icon.png';
import ProjectCarousel from "./components/ProjectCarousel.jsx";





function App() {
  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre">Sobre mí</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <div className="language-toggle">
          <button className="lang-btn">ES / EN</button>
        </div>
      </nav>

      {/* HEADER */}
      <header id="inicio" className="main-header">
        <div className="logo-container">
          <img src={logo} alt="Logo CD" />
        </div>
        <h1>Carlos Manuel De La O Arce</h1>
        <p>Desarrollador de Software | FullStack</p>
        <p className="slogan">Desarrollo con impacto.</p>
      </header>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-top"
        title="Ir arriba"
      >
        <img src={scrollIcon} alt="Ir arriba" />
      </button>

      {/* CONTENIDO PRINCIPAL */}
      <main className="content">
        <section id="sobre" className="section">
          <h2>Sobre Mí</h2>
          <div className="card">
            <h3>Presentación Personal</h3>
            <p>
              Soy un profesional apasionado por el desarrollo de software, actualmente cursando la carrera de Ingeniería en Software. Me interesa especialmente el desarrollo web y de sistemas, tanto en frontend como backend. He trabajado con tecnologías como C#, JavaScript, React y SQL, y también tengo experiencia con herramientas para el análisis de datos. Me considero una persona autodidacta, que siempre está buscando aprender nuevas tecnologías y metodologías para seguir creciendo profesionalmente.
            </p>
            <h3>Perfil Profesional</h3>
            <p>
              Desarrollador de software en constante búsqueda de nuevas tecnologías y metodologías para continuar mi crecimiento profesional y aportar de manera significativa a proyectos innovadores. Apasionado por la programación y la resolución de problemas, cuento con habilidades en JavaScript, C#, C++, Java, CSS, HTML, Power BI y SQL Server, además de una sólida experiencia en el desarrollo de aplicaciones web.
            </p>
            <p>
              Soy disciplinado, comprometido con el aprendizaje constante, y capaz de mantener un rendimiento óptimo incluso bajo presión. Mi objetivo es contribuir al éxito de la organización aplicando mis conocimientos para desarrollar resultados de alta calidad, al mismo tiempo que busco crecer profesionalmente.
            </p>
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2>Habilidades</h2>
          <div className="card">
            <ul>
              <li>Lenguajes: JavaScript, C#, Java, C++</li>
              <li>Frontend: React, HTML5, CSS3, Bootstrap</li>
              <li>Backend: Node.js, SQL Server</li>
              <li>Herramientas: Power BI, Git, GitHub</li>
              <li>Blandas: Resolución de problemas, trabajo en equipo, adaptabilidad</li>
            </ul>
          </div>
        </section>
       
        <section className="section" id="proyectos">
  <h2>Proyectos</h2>
  <div className="card">
    <ProjectCarousel />
  </div>
</section>


        <section className="section">
          <h2>Currículum</h2>
          <div className="card cv-buttons">
            <p>Puedes descargar mi currículum en tu idioma preferido:</p>
            <div className="cv-button-group">
              <a
                href="https://carlosdelaoa.github.io/CarlosDeLaOArcePortfolio/cv-esp.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-btn"
              >
                📄 <strong style={{ color: "white" }}>CV Español</strong>
              </a>

              <a
                href="https://carlosdelaoa.github.io/CarlosDeLaOArcePortfolio/cv-eng.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-btn"
              >
                📄 <strong style={{ color: "white" }}>CV Inglés</strong>
              </a>
            </div>
          </div>
        </section>

        <section id="contacto" className="section">
          <h2>Contacto</h2>
          <div className="card">
            <ul>
              <li><strong>Correo:</strong> cmdelaoa@gmail.com</li>
              <li><strong>WhatsApp:</strong> 8489-1066</li>
              <li><strong>GitHub:</strong> <a href="https://github.com/CarlosDeLaOA" target="_blank">CarlosDeLaOA</a></li>
              <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/carlos-de-la-o-arce-5a1178279/" target="_blank">Carlos De La O Arce</a></li>
            </ul>
          </div>
        </section>

        
      </main>
    </div>
  );
}
export default App;
