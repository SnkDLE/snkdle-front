import React from "react";
import { Container, Typography } from "../../atoms";
import * as Winner from "../../molecules/Winner";

const WinnerCharacter = ({ character, attempt, isLooser }) => {
  console.log("WinnerCharacter", character, attempt);
  return (
    <Container.Card>
      {isLooser ? (
        <Container.Flex>
          <Typography.TitleAot color="red">
            Vous avez perdu, Essayez encore !
          </Typography.TitleAot>
        </Container.Flex>
      ) : (
        <Container.Flex>
          <Typography.TitleAot color="green">
            Vous avez gagné, Bravo !
          </Typography.TitleAot>
        </Container.Flex>
      )}
      <Container.Base>
        <Winner.CharacterFound character={character} />
        <Winner.Statistique attempt={attempt} />
      </Container.Base>
    </Container.Card>
  );
};

export default WinnerCharacter;
