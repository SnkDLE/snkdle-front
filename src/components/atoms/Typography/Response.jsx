import { styled } from "styled-components";

const Response = styled.p`
  color: ${({ color }) => {
    return color || "black";
  }};
`;

export default Response;
