import styled, { css } from "styled-components";
import { globalColors } from "@/theme/globalStyles";

export const FormWrapper = styled.div`
  display: flex;
`;

export const FormHeadline = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const FormControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const FormLoggedOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 3px;
  padding: 1rem;
`;

export const FormLoggedIn = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
`;

export const FormPostWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 1rem;
`;

export const FormInput = styled.textarea<{
  $disabled?: boolean;
}>`
  height: 4rem;
  width: 100%;
  background-color: ${globalColors.black};
  border: none;
  outline: none;
  font-size: 0.75rem;
  color: ${globalColors.white};
  padding: 0.5rem;
  border-bottom: 1px solid ${globalColors.black};

  &:focus {
    border-bottom: 1px solid ${globalColors.highlight50};
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
