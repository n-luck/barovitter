import styled, { css } from "styled-components";
import { globalColors } from "@/theme/globalStyles";

export const Button = styled.button<{
  $disabled?: boolean;
  $fullWidth?: boolean;
  $large?: boolean;
}>`
  background-color: crimson;
  cursor: pointer;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  color: ${globalColors.white};
  border: 2px solid ${globalColors.highlight50};
  font-size: 1rem;
  transition: ease-in-out 0.5s;

  &:hover {
    opacity: 0.75;
  }

  ${(props) => {
    if (props.$disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
    if (props.$fullWidth) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
    if (props.$large) {
      return css`
        font-size: 1.25rem;
        padding: 1rem 2rem;
      `;
    }
  }}
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${globalColors.white};
  border-color: ${globalColors.white};
  color: ${globalColors.black};
`;

export const ButtonOutline = styled(Button)`
  background-color: transparent;
  border-color: ${globalColors.highlight50};
`;

export const ButtonSecondaryOutline = styled(Button)`
  background-color: transparent;
  border-color: ${globalColors.white};
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: ease-in-out 0.5s;
`;
