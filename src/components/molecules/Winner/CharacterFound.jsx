import React from "react";
import { Container, Typography } from "../../atoms";

const CharacterFound = ({ character }) => {
  console.log("CharacterFound", character);
  return (
    <Container.Base>
      <Container.Character>
        <img
          src={character?.image?.split("/revision")[0]}
          alt={character.name}
          style={{ width: "100px", height: "100px", marginRight: "10px" }}
        />
        <Typography.Title>{character.name}</Typography.Title>
      </Container.Character>
    </Container.Base>
  );
};

export default CharacterFound;
