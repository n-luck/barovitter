import styled from "styled-components";
import { globalColors } from "@/theme/globalStyles";

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalLabel = styled.label`
  margin: 0;
  font-size: 0.75rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalFooterText = styled.p`
  color: ${globalColors.primary700};
  font-size: 0.8rem;
  margin-top: 1rem;
`;

export const FooterLink = styled.span`
  cursor: pointer;
  text-decoration: underline;
  color: ${globalColors.white};

  &:hover {
    text-decoration: none;
  }
`;
