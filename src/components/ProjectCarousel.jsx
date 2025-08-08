import { useState } from 'react';
import './ProjectCarousel.css';
import ProjectModal from './ProjectModal';

import project1 from '../assets/proyecto1.png';
import project2 from '../assets/proyecto2.png';
import project3 from '../assets/Dimsa.png';
import project4 from '../assets/GreenMarketLogo.png';

function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const projects = [
    {
      title: "GoHealth",
      desc: "Gestión médica y agendamiento",
      fullDescription: "Plataforma para agendar citas, ver historial de pacientes y recibir notificaciones automáticas.",
      image: project1,
      repo: "https://github.com/camillaquiros/Proyecto-Componentes"
    },
    {
      title: "Gestión de Multas",
      desc: "Consulta y pago de multas",
      fullDescription: "Permite consultar, pagar y apelar multas de tránsito con conexión a pagos en línea.",
      image: project2,
      repo: "https://github.com/Alexlop175Cenfotec/Proyecto2_3C_2024"
    },
    {
      title: "Dashboard Dimsa",
      desc: "Panel interactivo",
      fullDescription: "Dashboard moderno para métricas empresariales.",
      image: project3,
      repo: "https://github.com/CarlosDeLaOA/gohealth-v2"
    },
    {
      title: "GreenMarket",
      desc: "Versión mejorada",
      fullDescription: "Interfaz mejorada con nuevas funciones para historial clínico y UX optimizada.",
      image: project4,
      repo: "https://github.com/MCalvoE/PersonalSandBox"
    }
  ];

  const handleNav = (direction) => {
    setFade(false);
    setTimeout(() => {
      setStartIndex((prev) => {
        const step = 1;
        const total = projects.length;
        return direction === 'next'
          ? (prev + step) % total
          : (prev - step + total) % total;
      });
      setFade(true);
    }, 150);
  };

  const visibleProjects = [
    projects[startIndex],
    projects[(startIndex + 1) % projects.length]
  ];

  return (
    <>
      <div className="carousel-multi">
        <button className="nav-arrow" onClick={() => handleNav('prev')}>◀</button>

        <div className={`card-wrapper ${fade ? 'fade-in' : 'fade-out'}`}>
          {visibleProjects.map((p, i) => (
            <div key={i} className="project-card">
              <img src={p.image} alt={p.title} className="project-img" />
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <button className="project-btn" onClick={() => setSelectedProject(p)}>
                Abrir
              </button>
            </div>
          ))}
        </div>

        <button className="nav-arrow" onClick={() => handleNav('next')}>▶</button>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

export default ProjectCarousel;
