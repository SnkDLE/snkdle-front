import { styled } from "styled-components";

const Paragraph = styled.p`
  color: ${({ color, theme }) => {
    return (
      color ?? theme?.typography?.paragraph ?? theme?.default?.color ?? "black"
    );
  }};
  font-size: 16px;
`;

export default Paragraph;
