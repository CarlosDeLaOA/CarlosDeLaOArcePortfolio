import "./Skills.css";

import iconPython   from "../assets/skills/python.svg";
import iconHtmlCss  from "../assets/skills/html-5.png";
import iconJs       from "../assets/skills/JS.svg";
import iconSql      from "../assets/skills/sql.svg";
import powerbi    from "../assets/skills/powerbi.svg";
import iconGithub   from "../assets/skills/github.svg";

const skills = [
  { name: "Python",       icon: iconPython },
  { name: "HTML",   icon: iconHtmlCss },
  { name: "JavaScript",   icon: iconJs },
  { name: "SQL",          icon: iconSql },
  { name: "Power Bi",        icon: powerbi },
  { name: "GitHub",       icon: iconGithub },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      

      <div className="skills-grid">
        {skills.map((s) => (
          <div key={s.name} className="skill-card">
            <div className="skill-icon-wrap">
              <img src={s.icon} alt={s.name} className="skill-icon" />
            </div>
            <div className="skill-name">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
