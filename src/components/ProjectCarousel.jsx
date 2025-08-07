import { useState } from 'react';
import './ProjectCarousel.css';
import ProjectModal from './ProjectModal';

import project1 from '../assets/proyecto1.png';
import project2 from '../assets/proyecto2.png';

function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "GoHealth",
      desc: "descripcion",
      fullDescription: "Plataforma para gestión médica de pediatría. Permite agendar citas, ver historial de pacientes, y recibir notificaciones automáticas.",
      image: project1,
      repo: "https://github.com/CarlosDeLaOA/gohealth-project"
    },
    {
      title: "Sistema de Gestión de Multas",
      desc: "descripcion",
      fullDescription: "Sistema web para consultar, pagar y apelar multas de tránsito. Incluye conexión con pagos en línea y autenticación segura.",
      image: project2,
      repo: "https://github.com/CarlosDeLaOA/multas-gestion"
    },
    {
      title: "adasdasdsd",
      desc: "descripcion",
      fullDescription: "Otra versión del sistema médico con enfoque en interfaz amigable y manejo de historial clínico.",
      image: project2,
      repo: "https://github.com/CarlosDeLaOA/gohealth-v2"
    },
    {
      title: "Dashboard Dimsa",
      desc: "descripcion",
      fullDescription: "Otra versión del sistema médico con enfoque en interfaz amigable y manejo de historial clínico.",
      image: project2,
      repo: "https://github.com/CarlosDeLaOA/gohealth-v2"
    },
    {
      title: "GoHealth",
      desc: "descripcion",
      fullDescription: "Otra versión del sistema médico con enfoque en interfaz amigable y manejo de historial clínico.",
      image: project2,
      repo: "https://github.com/CarlosDeLaOA/gohealth-v2"
    }
  ];

  return (
    <>
      <div className="carousel-container">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <img src={p.image} alt={p.title} className="project-img" />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <button
              className="project-btn"
              onClick={() => setSelectedProject(p)}
            >
              Abrir
            </button>
          </div>
        ))}
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
