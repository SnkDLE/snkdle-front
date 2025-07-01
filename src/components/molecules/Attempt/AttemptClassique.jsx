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
        <Typography.Response color={character.ageColor}>
          {character.age}
        </Typography.Response>
        <Typography.Response color={character.genderColor}>
          {character.gender}
        </Typography.Response>
        <Typography.Response color={character.statusColor}>
          {character.status}
        </Typography.Response>
        <Typography.Response color={character.speciesColor}>
          {character.species}
        </Typography.Response>
      </Container.Flex>
    </Container.Base>
  );
};

export default AttemptClassique;
