import styled, { css } from "styled-components";
import { globalColors } from "@/theme/globalStyles";

export const AvatarWrapper = styled.div<{
  $hasBorder?: boolean;
  $isLarge?: boolean;
}>`
  display: flex;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  transition: ease-in-out 0.5s;
  position: relative;

  &:hover {
    opacity: 0.75;
    cursor: pointer;
  }

  ${(props) => {
    if (props.$hasBorder) {
      return css`
        border: 4px solid ${globalColors.highlight50};
      `;
    }
  }}
  ${(props) => {
    if (props.$isLarge) {
      return css`
        height: 7rem;
        width: 7rem;
      `;
    }
  }}
`;
