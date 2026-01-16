import React, { useState, useEffect } from "react";
import "./Bienvenue.css";

export default function Bienvenue() {
  const bienvenueList = [
    "Bienvenue", 
    "ברוך הבא",    
    "Welcome",       
    "Willkommen",    
    "Bienvenido",    
    "ようこそ",     
    "Welkom",
    "أهلًا وسهلًا"

  ];

  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = bienvenueList[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Écriture
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Pause après écriture complète
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Effacement
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Passer au mot suivant
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % bienvenueList.length);
        }
      }
    }, isDeleting ? 50 : 100); // Plus rapide à effacer

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div className="container">
      <h1 className="typing-text">
        <span className="prompt">&gt;</span>
        {displayText}
        <span className="cursor">|</span>
      </h1>
    </div>
  );
}