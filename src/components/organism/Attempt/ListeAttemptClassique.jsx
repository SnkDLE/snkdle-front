import React from "react";
import { Container, Typography } from "../../atoms";
import { Attempt } from "../../molecules";

const ListeAttemptClassique = ({ ListeAttempt, attempt }) => {
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
            <Typography.Case>Image</Typography.Case>
            <Typography.Case>Age</Typography.Case>
            <Typography.Case>Gender</Typography.Case>
            <Typography.Case>Status</Typography.Case>
            <Typography.Case>Species</Typography.Case>
          </Container.Flex>
        </Container.Base>
      )}
      {ListeAttempt.map((character, index) => (
        <Attempt.AttemptClassique character={character} key={index} />
      ))}
    </Container.Base>
  );
};

export default ListeAttemptClassique;
