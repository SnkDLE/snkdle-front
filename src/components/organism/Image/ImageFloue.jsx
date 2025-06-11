import React from "react";
import { Container } from "../../atoms";
import { useState } from "react";

const ImageFloue = ({ children, maxTentatives = 10, imageUrl }) => {
  const [estIndice, setEstIndice] = useState(false);
  const tentatives = estIndice ? parseInt(children) || 0 : 0;
  const flouMax = 10;
  const flou = Math.max(0, flouMax - (tentatives * flouMax) / maxTentatives);

  return (
    <img
      onClick={() => setEstIndice(!estIndice)}
      src={imageUrl}
      style={{
        filter: `blur(${flou}px)`,
        transition: "filter 0.5s ease-in-out",
        width: "100%",
        maxWidth: "300px",
      }}
    />
  );
};

export default ImageFloue;
