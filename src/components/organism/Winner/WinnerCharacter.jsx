import React from "react";
import { Container, Typography } from "../../atoms";
import * as Winner from "../../molecules/Winner";

const WinnerCharacter = ({ character, attempt, isLooser }) => {
  console.log("WinnerCharacter", character, attempt);
  return (
    <Container.Base>
      {isLooser ? (
        <Container.Flex>
          <Typography.Response color="red">
            Vous avez perdu, Essayez encore !
          </Typography.Response>
        </Container.Flex>
      ) : (
        <Container.Flex>
          <Typography.Response color="green">
            Vous avez gagné, Bravo !
          </Typography.Response>
        </Container.Flex>
      )}
      <Container.Base>
        <Winner.CharacterFound character={character} />
        <Winner.Statistique attempt={attempt} />
      </Container.Base>
    </Container.Base>
  );
};

export default WinnerCharacter;
