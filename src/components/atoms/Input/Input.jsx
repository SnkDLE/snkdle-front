import react from "react";
import { styled } from "styled-components";

const Input = styled.input`
  width: 100%;
  background: rgba(34, 34, 34, 0.92);
  color: #e0d6c3;
  border: 2px solid #7a3b1e;
  border-radius: 8px;
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  font-family: "Oswald", Arial, sans-serif;
  margin: 1.2rem 0 1.5rem 0;
  outline: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition:
    border 0.2s,
    box-shadow 0.2s;
  box-sizing: border-box;

  &:focus {
    border: 2px solid #b22222;
    box-shadow: 0 0 0 2px #7a3b1e55;
  }
`;

export default Input;
