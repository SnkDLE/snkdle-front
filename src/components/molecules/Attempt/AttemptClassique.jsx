import React from "react";
import { Container, Typography } from "../../atoms";

const AttemptClassique = ({ character }) => {
  return (
    <Container.Base>
      <Container.Flex>
        <img
          src={character.img}
          alt={character.name}
          style={{ width: "100px", height: "100px" }}
        />
        <Typography.Response color={character.nameColor}>
          {character.name}
        </Typography.Response>
        <Typography.Response color={character.ageColor}>
          {character.age}
        </Typography.Response>
        <Typography.Response color={character.genderColor}>
          {character.gender}
        </Typography.Response>
      </Container.Flex>
    </Container.Base>
  );
};

export default AttemptClassique;
