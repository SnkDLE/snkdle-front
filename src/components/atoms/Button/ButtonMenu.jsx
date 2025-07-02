import react from "react";
import { styled } from "styled-components";

const ButtonReturn = styled.button`
  font-family: "CloisterBlack", "Oswald", Arial, sans-serif !important;
  background: linear-gradient(90deg, #3a3a3a 0%, #7a3b1e 100%);
  color: #fff;
  border: 2px solid #b22222;
  border-radius: 12px;
  padding: 1.1rem 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  transition:
    background 0.3s,
    transform 0.2s;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  font-weight: 400;

  &:hover {
    background: linear-gradient(90deg, #7a3b1e 0%, #3a3a3a 100%);
    color: #b22222;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export default ButtonReturn;
