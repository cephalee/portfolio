import Bienvenue from "./Bienvenue";
import cvIcon from "./assets/cv-icon.svg";
import linkedinIcon from "./assets/linkedin.svg";
import githubIcon from "./assets/github.svg";
import mailIcon from "./assets/mail.svg";
import spaceImg from "./assets/spaceinvader.jpg";
import siamImg from "./assets/siam.jpg";
import libImg from "./assets/library-manager.jpg";
import cv from "./assets/cv.pdf"

const projects = [
  {
    id: 1,
    title: "Space Invader",
    img: spaceImg,
    description: "Ce projet est une réimplémentation du célèbre jeu d'arcade Space Invaders en langage C.",
    link: "https://github.com/cephalee/shell-library-manager"
  },
  {
    id: 2,
    title: "SIAM",
    img: siamImg,
    description: "Mécaniques de poussée et d'orientation dans un environnement web.",
    link: "https://github.com/cephalee/siam-game-js"
  },
  {
    id: 3,
    title: "Gestion de Librairie",
    img: libImg,
    description: "Système de gestion de bibliothèque.",
    link: "https://github.com/Diozizo/space_invaders"
  }
];

export default function Portfolio() {
  const DownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'mon-cv.pdf';
    link.click();
  };

  return (
    <>
      <nav>
        <ul>
          <li><a href="#acceuil">Acceuil</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#a-propos">À propos</a></li>
        </ul>
      </nav>

      <section id="acceuil">
        <Bienvenue />
      </section>

      <section id="projets">
        <div className="projects-container">
          <h2>Projets</h2>
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <img 
                src={project.img} 
                alt={project.title}
                className="project-img"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="project-link"
              >
                Voir le code source
              </a>
            </div>
          ))}
        </div>
      </section>
      
<section id="competences">
  <div className="competences-container">
    <h2>Compétences</h2>

    <div className="competences-grid">
      <div className="competence-card">
        <h3>Langages</h3>
        <ul>
          <li><strong>C</strong> (programmation système et gestion mémoire)</li>
          <li><strong>Python</strong> (résolution de problèmes, scripts avancés et analyse de données)</li>
          <li><strong>Java</strong> (programmation orientée objet)</li>
          <li><strong>HTML / CSS</strong> (structuration et style web)</li>
          <li><strong>JavaScript</strong> (logique applicative et DOM)</li>
          <li><strong>Haskell</strong> (programmation fonctionnelle)</li>
          <li><strong>Shell / Bash</strong> (scripts et automatisation)</li>
          <li><strong>SQL</strong> (gestion et interrogation de bases de données)</li>
        </ul>
      </div>

      <div className="competence-card">
        <h3>Soft skills</h3>
        <ul>
          <li><strong>Esprit analytique</strong> (analyse structurée des problèmes techniques)</li>
          <li><strong>Rigueur</strong> (attention à la cohérence et à la fiabilité du travail)</li>
          <li><strong>Esprit critique</strong> (évaluation et amélioration des solutions existantes)</li>
          <li><strong>Persévérance</strong> (engagement constant face aux difficultés techniques)</li>
          <li><strong>Curiosité intellectuelle</strong> (j’explore et apprends rapidement de nouvelles tech)</li>
        </ul>
      </div>

      <div className="competence-card">
        <h3>Outils & Frameworks</h3>
        <ul>
          <li><strong>Git / GitHub</strong> (gestion de versions et collaboration)</li>
          <li><strong>Pandas</strong> (analyse et traitement de données en Python)</li>
          <li><strong>SDL</strong> (développement de jeux et gestion graphique)</li>
          <li><strong>React</strong> (création d’interfaces web interactives)</li>
          <li><strong>Terminal / Bash</strong> (scripts, automatisation et gestion système)</li>
          <li><strong>Valgrind</strong> (détection de fuites mémoire et analyse de programme C)</li>
        </ul>
      </div>
    </div>
  </div>
</section>



<section id="a-propos">
  <h2>À propos</h2>
  <div class="about-container">
    <div className="presentation">
      
      <p>
        Je suis étudiant en informatique, avec un intérêt marqué pour la compréhension des systèmes.
        J’aime aborder le développement comme un exercice de raisonnement : analyser un problème,
        en comprendre les contraintes, puis construire une solution claire et maîtrisée.
        Passionné par l'algorithmique et l'architecture logicielle, je recherche toujours à optimiser
        et à structurer mon code pour qu'il soit à la fois efficace et maintenable.
      </p>
      <p className="recherche-stage">
        Actuellement en pleine montée en compétences, <strong>je suis à la recherche d'un stage 
      en développement logiciel.</strong> <br />
        Disponible du <span className="dates-stage">23 mars au 15 mai</span>, je suis prêt à m'investir 
        pleinement au sein d'une équipe technique pour relever des défis concrets et 
        contribuer à des projets innovants.
      </p>
    </div>

    <div className="social-section">
      <div className="social-link cv-button-wrapper" onClick={DownloadCV} style={{cursor: 'pointer'}}>
        <img src={cvIcon} alt="CV" className="social-icon" />
        <span className="social-label">Mon CV</span>
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