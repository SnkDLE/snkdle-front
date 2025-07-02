import React from "react";
import { Container, Typography } from "../atoms";

const About = () => {
  return (
    <Container.Card>
      <Typography.TitleAot>À propos</Typography.TitleAot>
      <Typography.Paragraph color="white">
        Ce jeu est inspiré de l'univers de l'Attaque des Titans.
      </Typography.Paragraph>
      <Typography.Paragraph color="white">
        Il a été développé dans le cadre d'un projet de fin d'études à Ynov
        Campus Lyon.
      </Typography.Paragraph>
    </Container.Card>
  );
};

export default About;
