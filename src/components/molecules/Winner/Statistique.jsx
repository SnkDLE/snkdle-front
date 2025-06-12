import React from "react";
import { Container, Typography } from "../../atoms";

const Statistique = ({ attempt }) => {
  return (
    <Container.Base>
      <Container.Flex>
        <Typography.Title>Statistiques</Typography.Title>
        <Typography.Paragraph>Nombre d'essais : {attempt}</Typography.Paragraph>
      </Container.Flex>
    </Container.Base>
  );
};

export default Statistique;
