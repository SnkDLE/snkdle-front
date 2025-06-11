import React from "react";
import { Container, Typography } from "../../atoms";
import { Attempt } from "../../molecules";

const ListeAttempt = ({ ListeAttempt, attempt }) => {
  return (
    <Container.Base>
      {ListeAttempt.length === 0 && attempt === 0 ? (
        <Container.Flex>
          <Container.Base>
            <h2>Vous n'avez pas encore fait d'essai</h2>
          </Container.Base>
        </Container.Flex>
      ) : (
        <Container.Base>
          <h2>Vos essais</h2>
          <Container.Flex>
            <Typography.Paragraph>Image</Typography.Paragraph>
            <Typography.Paragraph>Name</Typography.Paragraph>
            <Typography.Paragraph>Age</Typography.Paragraph>
            <Typography.Paragraph>Gender</Typography.Paragraph>
          </Container.Flex>
        </Container.Base>
      )}
      {ListeAttempt.map((character, index) => (
        <Attempt.AttemptClassique character={character} key={index} />
      ))}
    </Container.Base>
  );
};

export default ListeAttempt;
