import styled, { css } from "styled-components";

export const HeadlineSpan = styled.span<{
  $size?: "h1" | "h2" | "h3" | "h4";
}>`
  font-size: 1rem;
  font-weight: 500;

  ${(props) => {
    switch (props.$size) {
      case "h1":
        return css`
          font-size: 2rem;
        `;
      case "h2":
        return css`
          font-size: 1.5rem;
        `;
      case "h3":
        return css`
          font-size: 1rem;
        `;
      case "h4":
        return css`
          font-size: 0.75rem;
        `;
      default:
        return null;
    }
  }}
`;
