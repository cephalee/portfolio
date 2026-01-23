import { useState } from 'react';
import { content, projects } from './content';
import Welcome from "./Welcome";
import cvIcon from "./assets/cv-icon.svg";
import linkedinIcon from "./assets/linkedin.svg";
import githubIcon from "./assets/github.svg";
import mailIcon from "./assets/mail.svg";
import cv from "./assets/cv.pdf";

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const t = content[lang];

  const DownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'cv-ylies.pdf';
    link.click();
  };

  return (
    <>

      <nav>
        <ul>
          <li><a href="#home">{t.nav[0]}</a></li>
          <li><a href="#projects">{t.nav[1]}</a></li>
          <li><a href="#skills">{t.nav[2]}</a></li>
          <li><a href="#about">{t.nav[3]}</a></li>
          <li className="lang-item">
            <button className="lang-btn" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}>
            {lang === 'fr' ? 'EN' : 'FR'}
           </button>
          </li>
        </ul>
      </nav>

      <section id="home">
        <Welcome />
      </section>

      <section id="projects">
        <div className="projects-container">
          <h2>{t.titles.projects}</h2>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.img} alt={project.title} className="project-img" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{t.projects_desc[project.id]}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                {t.projectLink}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="skills-container">
          <h2>{t.titles.skills}</h2>
          <div className="skills-grid">
            <div className="skills-card">
              <h3>{t.skill_categories.lang}</h3>
              <ul>
                <li><strong>C</strong> ({t.lang_desc.c})</li>
                <li><strong>Python</strong> ({t.lang_desc.python})</li>
                <li><strong>Java</strong> ({t.lang_desc.java})</li>
                <li><strong>HTML / CSS</strong> ({t.lang_desc.web})</li>
                <li><strong>JavaScript</strong> ({t.lang_desc.js})</li>
                <li><strong>Haskell</strong> ({t.lang_desc.haskell})</li>
                <li><strong>Shell / Bash</strong> ({t.lang_desc.shell})</li>
                <li><strong>SQL</strong> ({t.lang_desc.sql})</li>
              </ul>
            </div>

            <div className="skills-card">
              <h3>{t.skill_categories.soft}</h3>
              <ul>
                {Object.keys(t.soft_skills_desc).map(key => (
                  <li key={key}>
                    <strong>{t.soft_skills_desc[key].name}</strong> ({t.soft_skills_desc[key].desc})
                  </li>
                ))}
              </ul>
            </div>

            <div className="skills-card">
              <h3>{t.skill_categories.tools}</h3>
              <ul>
                <li><strong>Git / GitHub</strong> ({t.tool_desc.git})</li>
                <li><strong>Pandas</strong> ({t.tool_desc.pandas})</li>
                <li><strong>SDL</strong> ({t.tool_desc.sdl})</li>
                <li><strong>React</strong> ({t.tool_desc.react})</li>
                <li><strong>Terminal / Bash</strong> ({t.tool_desc.terminal})</li>
                <li><strong>Valgrind</strong> ({t.tool_desc.valgrind})</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <h2>{t.titles.about}</h2>
        <div className="about-container">
          <div className="presentation">
            <p>{t.about_text}</p>
            <p className="seeking-internship">
              <strong>{t.seeking}</strong> <br />
              <span className="internship-date">{t.date}</span>
            </p>
          </div>

          <div className="social-section">
            <div className="social-link cv-button-wrapper" onClick={DownloadCV} style={{ cursor: 'pointer' }}>
              <img src={cvIcon} alt="CV" className="social-icon" />
              <span className="social-label">{t.cv_label}</span>
            </div>
            <a href="https://linkedin.com/in/ylies-a-346a163a3" target="_blank" rel="noreferrer" className="social-link">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
              <span className="social-label">LinkedIn</span>
            </a>
            <a href="https://github.com/cephalee" target="_blank" rel="noreferrer" className="social-link">
              <img src={githubIcon} alt="GitHub" className="social-icon" />
              <span className="social-label">GitHub</span>
            </a>
            <a href="mailto:yliesabed@gmail.com" className="social-link">
              <img src={mailIcon} alt="Email" className="social-icon" />
              <span className="social-label">Email</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}