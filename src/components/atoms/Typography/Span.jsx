import { styled } from "styled-components";

const Span = styled.span`
  font-size: 14px;
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: white;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;
  transform: ${({ estIndice }) =>
    estIndice ? "translateX(28px)" : "translateX(4px)"};
`;

export default Span;
