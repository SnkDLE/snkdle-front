import { styled } from "styled-components";

const Response = styled.div`
  background: ${({ color }) => {
    return color || "black";
  }};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Response;
