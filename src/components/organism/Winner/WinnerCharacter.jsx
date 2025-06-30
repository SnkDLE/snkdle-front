import React from "react";
import { Container } from "../../atoms";
import * as Winner from "../../molecules/Winner";

const WinnerCharacter = ({ character, attempt }) => {
  return (
    <Container.Base>
      <Container.Flex>
        <Winner.CharacterFound character={character} />
        <Winner.Statistique attempt={attempt} />
      </Container.Flex>
    </Container.Base>
  );
};

export default WinnerCharacter;
