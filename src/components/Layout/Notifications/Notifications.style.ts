import { globalColors } from "@/theme/globalStyles";
import styled from "styled-components";

export const NotifcationEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NotifcationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  border-bottom: 1px solid  ${globalColors.highlight50};
`;
