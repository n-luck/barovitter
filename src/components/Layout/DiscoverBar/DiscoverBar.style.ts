// TO DO: GLOBAL STYLE display: flex; gap: 1rem

import { device, globalColors } from "@/theme/globalStyles";
import styled from "styled-components";

export const DiscoverbarWrapper = styled.div`
  display: none;

  @media ${device.laptop} {
    grid-column: 4;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
  }
`;

export const DiscoverbarHeadline = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0;
`;

export const DiscoverbarLine = styled.hr`
  color: ${globalColors.primary300};
  width: 100%;
  margin: 1.5rem 0;
  align-self: center;
`;

export const FollowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
`;

export const FollowWrapperText = styled.p`
  margin: 0.15rem 0;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DiscoverbarFooterWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const DiscoverbarFooterLinksDot = styled.span`
  font-size: 0.8rem;
  line-height: 1.3rem;
  color: ${globalColors.highlight100};
`;
