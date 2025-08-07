import './ProjectCarousel.css';
import project1 from '../assets/proyecto1.png';
import project2 from '../assets/proyecto2.png';

function ProjectCarousel() {
  const projects = [
    {
      title: "GoHealth",
      desc: "descripcion",
      image: project1,
    },
    {
      title: "GoHealth",
      desc: "descripcion",
      image: project2,
    },
    {
      title: "GoHealth",
      desc: "descripcion",
      image: project2,
    },
  ];

  return (
    <div className="horizontal-carousel">
      {projects.map((p, index) => (
        <div key={index} className="project-card">
          <img src={p.image} alt={p.title} className="project-img" />
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <button className="project-btn">Abrir</button>
        </div>
      ))}
    </div>
  );
}

export default ProjectCarousel;
