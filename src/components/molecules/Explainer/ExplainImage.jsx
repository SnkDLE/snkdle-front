import React from "react";
import { Container, Typography } from "../../atoms";

const ExplainImage = () => {
  return (
    <Container.Explain>
      <Typography.TitleAot>Image</Typography.TitleAot>
      <Typography.Paragraph>
        Trouve le personnage SNK via l'image !
      </Typography.Paragraph>
    </Container.Explain>
  );
};

export default ExplainImage;
