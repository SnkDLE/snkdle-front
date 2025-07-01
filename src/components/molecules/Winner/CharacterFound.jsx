import React from "react";
import { Container, Typography } from "../../atoms";

const CharacterFound = ({ character }) => {
  console.log("CharacterFound", character);
  return (
    <Container.Base>
      <Container.Flex>
        <img
          src={character?.image?.split("/revision")[0]}
          alt={character.name}
          style={{ width: "100px", height: "100px" }}
        />
        <Typography.Title>{character.name}</Typography.Title>
      </Container.Flex>
    </Container.Base>
  );
};

export default CharacterFound;
