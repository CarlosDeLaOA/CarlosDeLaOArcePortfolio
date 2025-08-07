import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{project.title}</h2>
        <p className='descripcion'>{project.fullDescription}</p>

       <a
  href={project.repo}
  target="_blank"
  rel="noopener noreferrer"
  className="repo-btn"
>
  Ver en GitHub
</a>


<button onClick={onClose} className="modal-btn">Cerrar</button>

      </div>
    </div>
  );
}

export default ProjectModal;
