import './App.css';
import logo from './assets/LOGO.png'; 
function App() {
  return (
    <div className="App">
      <header className="main-header">
        <div className="logo-container">
          <img src={logo} alt="Logo CD" />
        </div>
        <h1>Carlos Manuel De La O Arce</h1>
        <p>Desarrollador de Software | FullStack</p>
        <p className="slogan">Desarrollo con impacto.</p>
      </header>

      <main className="content">
        <section className="section">
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

        <section className="section alt">
          <h2>Misión, Visión y Valores</h2>
          <div className="card">
            <h3>Misión</h3>
            <p>
              Crear soluciones tecnológicas funcionales, accesibles y sostenibles que contribuyan al crecimiento de las empresas y al bienestar de los usuarios.
            </p>
            <h3>Visión</h3>
            <p>
              Destacar por la calidad y compromiso en cada proyecto, liderando desarrollos innovadores que generen impacto positivo.
            </p>
            <h3>Valores</h3>
            <ul>
              <li><strong>Responsabilidad:</strong> Cumplo con mis compromisos y obligaciones con seriedad y disciplina.</li>
              <li><strong>Paciencia:</strong> Afronto los retos del desarrollo con calma, entendiendo que los errores son parte del aprendizaje.</li>
              <li><strong>Solidaridad:</strong> Promuevo un ambiente de trabajo cooperativo y respetuoso.</li>
            </ul>
          </div>
        </section>

        <section className="section">
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
        <section className="section">
  <h2>Currículum</h2>
  <div className="card cv-buttons">
    <p>Puedes descargar mi currículum en tu idioma preferido:</p>
    <div className="cv-button-group">
      <a href="https://carlosdelaoa.github.io/CarlosDeLaOArcePortfolio/cv-esp.pdf" download className="cv-btn">📄 CV Español</a>
<a href="https://carlosdelaoa.github.io/CarlosDeLaOArcePortfolio/cv-eng.pdf" download className="cv-btn">📄 CV Inglés</a>


    </div>
  </div>
</section>

      </main>
    </div>
  );
}

export default App;
