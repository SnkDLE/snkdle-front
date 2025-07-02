import React from "react";
import { Container, Typography } from "../../atoms";

const Statistique = ({ attempt }) => {
  return (
    <Container.Base>
      <Container.Base>
        <Typography.Title>Statistiques</Typography.Title>
        <Typography.Paragraph>Nombre d'essais : {attempt}</Typography.Paragraph>
      </Container.Base>
    </Container.Base>
  );
};

export default Statistique;
