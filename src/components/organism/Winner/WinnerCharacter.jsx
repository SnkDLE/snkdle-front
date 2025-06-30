import React from "react";
import { Container, Typography } from "../../atoms";
import * as Winner from "../../molecules/Winner";

const WinnerCharacter = ({ character, attempt }) => {
  console.log("WinnerCharacter", character, attempt);
  return (
    <Container.Base>
      <Typography.Title>
        Félicitations, vous avez trouvé le personnage !
      </Typography.Title>
      <Container.Base>
        <Winner.CharacterFound character={character} />
        <Winner.Statistique attempt={attempt} />
      </Container.Base>
    </Container.Base>
  );
};

export default WinnerCharacter;
