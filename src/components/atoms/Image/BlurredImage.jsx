import React from "react";
import styled from "styled-components";

const BlurredImage = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  filter: blur(${(props) => props.blurLevel}px);
  transition: filter 0.5s ease-in-out;
`;

export default BlurredImage;
