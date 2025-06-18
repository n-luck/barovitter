import { globalColors } from "@/theme/globalStyles";
import styled, { css } from "styled-components";

export const LinkWrapper = styled.span<{
  $size?: "small" | "large";
  $secondary?: boolean;
  $tertiary?: boolean;
  $underline?: boolean;
}>`
  font-weight: 500;
  font-size: 1rem;
  color: ${globalColors.white};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  ${(props) => {
    if (props.$secondary) {
      return css`
        color: ${globalColors.highlight50};
      `;
    }
  }}

  ${(props) => {
    if (props.$tertiary) {
      return css`
        color: ${globalColors.primary800};
      `;
    }
  }}

  ${(props) => {
    if (props.$underline) {
      return css`
        text-decoration: underline;

        &:hover {
          text-decoration: none;
          cursor: pointer;
        }
      `;
    }
  }}

  ${(props) => {
    switch (props.$size) {
      case "small":
        return css`
          font-size: 0.75rem;
        `;
      case "large":
        return css`
          font-size: 1.5rem;
        `;
      default:
        return null;
    }
  }}
`;
