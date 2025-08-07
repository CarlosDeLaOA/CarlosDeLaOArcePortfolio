import React, { useState } from 'react';
import './ProjectCarousel.css';

const projects = [
  {
    title: 'GoHealth',
    specialty: 'Pediatría',
    image: '/gohealth1.png',
  },
  {
    title: 'Dra. Kim Kardashian',
    specialty: 'Cardióloga',
    image: '/gohealth2.png',
  },
  {
    title: 'Dr. Keylor Antonio Navas',
    specialty: 'Ortopedista',
    image: '/gohealth3.png',
  },
  // Agrega más si deseas
];

const ProjectCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="carousel-container">
      

      <div className="carousel-wrapper">
        <button className="carousel-button" onClick={prevSlide}>⬅</button>

        <div className="carousel-cards">
          {projects.slice(current, current + 3).map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.specialty}</p>
              <button className="open-button">Abrir</button>
            </div>
          ))}
        </div>

        <button className="carousel-button" onClick={nextSlide}>➡</button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
