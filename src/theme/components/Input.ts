import styled, { css } from "styled-components";
import { globalColors } from "@/theme/globalStyles";

export const Input = styled.input<{
  $disabled?: boolean;
}>`
  width: auto;
  padding: 1rem;
  background-color: ${globalColors.primary200};
  border: 2px solid ${globalColors.primary100};
  color: ${globalColors.white};
  border-radius: 0.25rem;
  margin: 0.5rem 0;

  &:focus {
    border-color: ${globalColors.highlight50};
    outline: none;
  }

  ${(props) => {
    if (props.$disabled) {
      return css`
        opacity: 0.5;
        cursor: not-allowed;
      `;
    }
  }}
`;
