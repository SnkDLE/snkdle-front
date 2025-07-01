import React from "react";
import { Container, Typography } from "../atoms";
import "../../aot-theme.css";

const About = () => {
  return (
    <div className="aot-card" style={{marginTop:'2rem'}}>
      <div className="aot-title">À propos</div>
      <p style={{color:'#e0d6c3'}}>Ce jeu est inspiré de l'univers de l'Attaque des Titans.</p>
    </div>
  );
};

export default About;
