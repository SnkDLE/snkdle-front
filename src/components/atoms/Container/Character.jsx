import react from "react";
import { styled } from "styled-components";

const Character = styled.div`
  color: #fff;
  padding: 6px 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #7a3b1e;
    color: #fff;
  }
`;

export default Character;
