import { useState } from 'react';
import './App.css';
import logo from './assets/LOGO.png';
import scrollIcon from './assets/scroll-icon.png';
import ProjectCarousel from './components/ProjectCarousel';
import ContactForm from './components/ContactForm';

function App() {
  const [idioma, setIdioma] = useState('es');

  const textos = {
    es: {
      inicio: "Inicio",
      sobre: "Sobre mí",
      habilidades1: "Habilidades",
      proyectos: "Proyectos",
      contacto: "Contacto",
      titulo: "Carlos Manuel De La O Arce",
      subtitulo: "Desarrollador de Software | FullStack",
      slogan: "Desarrollo con impacto.",
      sobreTitulo: "Sobre Mí",
      presentacion: "Presentación Personal",
      descripcion: "Soy un profesional apasionado por el desarrollo de software, actualmente cursando la carrera de Ingeniería en Software. Me interesa especialmente el desarrollo web y de sistemas, tanto en frontend como backend. He trabajado con tecnologías como C#, JavaScript, React y SQL, y también tengo experiencia con herramientas para el análisis de datos. Me considero una persona autodidacta, que siempre está buscando aprender nuevas tecnologías y metodologías para seguir creciendo profesionalmente.",
      perfil: "Perfil Profesional",
      perfilDescripcion: "Desarrollador de software en constante búsqueda de nuevas tecnologías y metodologías para continuar mi crecimiento profesional y aportar de manera significativa a proyectos innovadores. Apasionado por la programación y la resolución de problemas, cuento con habilidades en JavaScript, C#, C++, Java, CSS, HTML, Power BI y SQL Server, además de una sólida experiencia en el desarrollo de aplicaciones web.",
      habilidades: [
        "Lenguajes: JavaScript, C#, Java, C++",
        "Frontend: React, HTML5, CSS3, Bootstrap",
        "Backend: Node.js, SQL Server",
        "Herramientas: Power BI, Git, GitHub",
        "Blandas: Resolución de problemas, trabajo en equipo, adaptabilidad"
      ],
      proyectos: "Proyectos",
      contactoTitulo: "Contacto",
      contactoDatos: [
        { label: "WhatsApp", link: "https://wa.me/84891066", text: "WhatsApp" },
        { label: "GitHub", link: "https://github.com/CarlosDeLaOA", text: "CarlosDeLaOA" },
        { label: "LinkedIn", link: "https://www.linkedin.com/in/carlos-de-la-o-arce-5a1178279/", text: "Carlos De La O Arce" }
      ]
    },
    en: {
      inicio: "Home",
      sobre: "About",
      habilidades1: "Skills",
      proyectos: "Projects",
      contacto: "Contact",
      titulo: "Carlos Manuel De La O Arce",
      subtitulo: "Software Developer | FullStack",
      slogan: "Development with impact.",
      sobreTitulo: "About Me",
      presentacion: "Personal Introduction",
      descripcion: "I am a professional passionate about software development, currently pursuing a degree in Software Engineering. I am particularly interested in web and system development, both frontend and backend. I have worked with technologies such as C#, JavaScript, React, and SQL, and I also have experience with data analysis tools. I consider myself a self-taught individual, always looking to learn new technologies and methodologies to continue growing professionally.",
      perfil: "Professional Profile",
      perfilDescripcion: "Software developer constantly seeking new technologies and methodologies to continue my professional growth and contribute meaningfully to innovative projects. Passionate about programming and problem-solving, I possess skills in JavaScript, C#, C++, Java, CSS, HTML, Power BI, and SQL Server, along with solid experience in web application development.",
      habilidades: [
        "Languages: JavaScript, C#, Java, C++",
        "Frontend: React, HTML5, CSS3, Bootstrap",
        "Backend: Node.js, SQL Server",
        "Tools: Power BI, Git, GitHub",
        "Soft skills: Problem-solving, teamwork, adaptability"
      ],
      proyectos: "Projects",
      contactoTitulo: "Contact",
      contactoDatos: [
        { label: "WhatsApp", link: "https://wa.me/84891066", text: "WhatsApp" },
        { label: "GitHub", link: "https://github.com/CarlosDeLaOA", text: "CarlosDeLaOA" },
        { label: "LinkedIn", link: "https://www.linkedin.com/in/carlos-de-la-o-arce-5a1178279/", text: "Carlos De La O Arce" }
      ]
    }
  };

  const t = textos[idioma];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#inicio">{t.inicio}</a></li>
          <li><a href="#sobre">{t.sobre}</a></li>
          <li><a href="#habilidades">{t.habilidades1}</a></li>
          <li><a href="#proyectos">{t.proyectos}</a></li>
          <li><a href="#contacto">{t.contacto}</a></li>
        </ul>
        <div className="language-toggle">
          <button className="lang-btn" onClick={() => setIdioma(idioma === 'es' ? 'en' : 'es')}>
            {idioma === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </nav>

      <header id="inicio" className="main-header">
        <div className="logo-container">
          <img src={logo} alt="Logo CD" />
        </div>
        <h1>{t.titulo}</h1>
        <p>{t.subtitulo}</p>
        <p className="slogan">{t.slogan}</p>
      </header>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="scroll-top"
        title="Ir arriba"
      >
        <img src={scrollIcon} alt="Ir arriba" />
      </button>

      <main className="content">
        <section id="sobre" className="section">
          <h2>{t.sobreTitulo}</h2>
          <div className="card">
            <h3>{t.presentacion}</h3>
            <p>{t.descripcion}</p>
            <h3>{t.perfil}</h3>
            <p>{t.perfilDescripcion}</p>
          </div>
        </section>

        <section id="habilidades" className="section">
          <h2>{t.habilidades1}</h2>
          <div className="card">
            <ul>
              {t.habilidades.map((hab, idx) => (
                <li key={idx}>{hab}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="proyectos" className="section">
          <h2>{t.proyectos}</h2>
          <div className="card">
            <ProjectCarousel />
          </div>
        </section>

        <section id="contacto" className="section">
          <h2>{t.contactoTitulo}</h2>
          <div className="card">
            <ul>
              {t.contactoDatos.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}:</strong>{' '}
                  <a href={item.link} target="_blank" rel="noopener noreferrer">{item.text}</a>
                </li>
              ))}
            </ul>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
