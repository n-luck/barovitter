import { device, globalColors } from "@/theme/globalStyles";
import styled from "styled-components";

export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: #11111181;
  inset: 0;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem auto;
  height: 100vh;
  background-color: ${globalColors.black};

  @media ${device.laptop} {
    width: 50%;
    max-width: 50rem;
    height: auto;
    min-height: 10rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalHeadline = styled.h2`
  font-weight: 500;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
