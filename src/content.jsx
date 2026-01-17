import spaceImg from "./assets/spaceinvader.jpg";
import siamImg from "./assets/siam.jpg";
import libImg from "./assets/library-manager.jpg";

export const projects = [
  {
    id: 1,
    title: "Space Invader",
    img: spaceImg,
    link: "https://github.com/Diozizo/space_invaders"
  },
  {
    id: 2,
    title: "SIAM GAME",
    img: siamImg,
    link: "https://github.com/cephalee/siam-game-js"
  },
  {
    id: 3,
    title: "Library Manager",
    img: libImg,
    link: "https://github.com/cephalee/shell-library-manager"
  },
];

export const content = {
  fr: {
    nav: ["Accueil", "Projets", "Skills", "À propos"],
    titles: { projects: "Projets", skills: "Skills", about: "À propos" },
    projects_desc : {
        1: "Ce projet est une réimplémentation du célèbre jeu d'arcade Space Invaders en langage C.",
        2: "Mécaniques de poussée et d'orientation dans un environnement web.",
        3: "Système de gestion de bibliothèque implémenté en shell."
    },
    projectLink: "Voir le code source",
    skill_categories: {
      lang: "Langages",
      soft: "Soft Skills",
      tools: "Outils & Frameworks"
    },
    lang_desc: {
      c: "programmation système et gestion mémoire",
      python: "résolution de problèmes, scripts avancés et analyse de données",
      java: "programmation orientée objet",
      web: "structuration et style web",
      js: "logique applicative et DOM",
      haskell: "programmation fonctionnelle",
      shell: "scripts et automatisation",
      sql: "gestion et interrogation de bases de données"
    },
    soft_skills_desc: {
      analytique: { name: "Esprit analytique", desc: "analyse structurée des problèmes techniques" },
      rigueur: { name: "Rigueur", desc: "attention à la cohérence et à la fiabilité du travail" },
      critique: { name: "Esprit critique", desc: "évaluation et amélioration des solutions existantes" },
      perseverance: { name: "Persévérance", desc: "engagement constant face aux difficultés techniques" },
      curiosite: { name: "Curiosité intellectuelle", desc: "j’explore et apprends rapidement de nouvelles tech" }
    },
    tool_desc: {
        git: "gestion de versions et collaboration",
        pandas: "analyse et traitement de données en Python",
        sdl: "développement de jeux et gestion graphique",
        react: "création d’interfaces web interactives",
        terminal: "scripts, automatisation et gestion système",
        valgrind: "détection de fuites mémoire et analyse de programme C"
    },
    cv_label: "Mon CV",
    about_text: "Je suis étudiant en informatique, avec un intérêt marqué pour la compréhension des systèmes. J’aime aborder le développement comme un exercice de raisonnement : analyser un problème, en comprendre les contraintes, puis construire une solution claire et maîtrisée. Passionné par l'algorithmique et l'architecture logicielle, je recherche toujours à optimiser et à structurer mon code pour qu'il soit à la fois efficace et maintenable.",
    seeking: "Actuellement en pleine montée en compétences, je suis à la recherche d'un stage en développement logiciel.",
    date: "Disponible du 23 mars au 15 mai",
  },
  en: {
    nav: ["Home", "Projects", "Skills", "About"],
    titles: { projects: "Projects", skills: "Skills", about: "About" },
    projects_desc: {
      1: "A re-implementation of the famous Space Invaders arcade game written in C.",
      2: "Push and orientation mechanics developed for a web environment.",
      3: "A comprehensive library management system implemented in shell."
    },
    projectLink: "View source code",
    skill_categories: {
      lang: "Languages",
      soft: "Soft Skills",
      tools: "Tools & Frameworks"
    },
    lang_desc: {
      c: "system programming and memory management",
      python: "problem solving, advanced scripting, and data analysis",
      java: "object-oriented programming",
      web: "web structuring and styling",
      js: "application logic and DOM",
      haskell: "functional programming",
      shell: "scripting and automation",
      sql: "database management and querying"
    },
    soft_skills_desc: {
      analytique: { name: "Analytical Mindset", desc: "structured analysis of technical problems" },
      rigueur: { name: "Rigor", desc: "attention to consistency and work reliability" },
      critique: { name: "Critical Thinking", desc: "evaluation and improvement of existing solutions" },
      perseverance: { name: "Perseverance", desc: "constant commitment in the face of technical difficulties" },
      curiosite: { name: "Intellectual Curiosity", desc: "exploring and quickly learning new technologies" }
    },
    tool_desc: {
        git: "version control and collaborative development",
        pandas: "data analysis and data processing in Python",
        sdl: "game development and graphics management",
        react: "development of interactive web interfaces",
        terminal: "scripting, automation, and system administration",
        valgrind: "memory leak detection and C program analysis"
    },
    cv_label: "Resume",
    about_text: "I am a computer science student with a strong interest in understanding how systems work. I approach development as a reasoning exercise: analyzing a problem, understanding its constraints, and building a clear, controlled solution. Passionate about algorithms and software architecture, I always strive to optimize and structure my code to ensure it is both efficient and maintainable.",
    seeking: "Currently expanding my technical expertise, I am looking for a Software Development internship.",
    date: "Available from March 23rd to May 15th",
  }
};


