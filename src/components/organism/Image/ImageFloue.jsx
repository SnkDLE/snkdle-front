import React from "react";
import { Button, Container, Typography } from "../../atoms";
import { useState } from "react";

const ImageFloue = ({ children, maxTentatives = 10, imageUrl }) => {
  const [estIndice, setEstIndice] = useState(false);
  const tentatives = estIndice ? parseInt(children) || 0 : 0;
  const flouMax = 10;
  const flou = Math.max(0, flouMax - (tentatives * flouMax) / maxTentatives);

  return (
    <Container.Base>
      <Container.Base>
        <span
          style={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          Chaque essai défloute un peu l'image
        </span>

        <Button.Switch
          onClick={() => setEstIndice(!estIndice)}
          onFocus={(e) =>
            (e.target.style.boxShadow =
              "0 0 0 2px #3b82f6, 0 0 0 4px rgba(59, 130, 246, 0.1)")
          }
          onBlur={(e) => (e.target.style.boxShadow = "none")}
        >
          <Typography.Span estIndice={estIndice} />
        </Button.Switch>
      </Container.Base>

      <Container.ImageFloue>
        <img
          src={imageUrl}
          alt="Image test"
          style={{
            filter: `blur(${flou}px)`,
            transition: "filter 0.5s ease-in-out",
            width: "100%",
            maxWidth: "300px",
            borderRadius: "6px",
          }}
        />
      </Container.ImageFloue>
    </Container.Base>
  );
};

export default ImageFloue;
