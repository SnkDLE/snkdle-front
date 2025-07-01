import React from "react";
import { styled } from "styled-components";

const Character = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
  @media (min-width: 601px) and (max-width: 1200px) {
    width: 80%;
    height: auto;
  }
`;

export default Character;
