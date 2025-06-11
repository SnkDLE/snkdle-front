import { styled } from "styled-components";
const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) =>
    theme?.typography?.titleSize ?? theme?.default?.fontSize ?? "2rem"};
  color: ${({ theme }) =>
    theme?.typography?.title ?? theme?.default?.color ?? "black"};
`;

export default Title;
