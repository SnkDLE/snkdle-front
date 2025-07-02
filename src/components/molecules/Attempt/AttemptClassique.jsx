import React from "react";
import { Container, Typography } from "../../atoms";

const AttemptClassique = ({ character }) => {
  return (
    <Container.Base>
      <Container.Flex>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: "100px", height: "100px" }}
        />
        <Container.Response color={character.ageColor}>
          {character.age}
        </Container.Response>
        <Container.Response color={character.genderColor}>
          {character.gender}
        </Container.Response>
        <Container.Response color={character.statusColor}>
          {character.status}
        </Container.Response>
        <Container.Response color={character.speciesColor}>
          {character.species}
        </Container.Response>
      </Container.Flex>
    </Container.Base>
  );
};

export default AttemptClassique;
