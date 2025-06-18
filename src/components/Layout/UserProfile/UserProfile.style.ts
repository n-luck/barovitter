import styled from "styled-components";
import { globalColors } from "@/theme/globalStyles";

export const UserWrapper = styled.div`
  border: 1px solid ${globalColors.highlight100};
`;

export const UserDetailsCoverWrapper = styled.div`
  height: 10rem;
  position: relative;
`;

export const UserHeroInteraction = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;

export const UserHeroDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
`;

export const UserHeroName = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
`;

export const UserHeroUsername = styled.p`
  color: ${globalColors.primary700};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

export const UserHeroDateWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #aaa;
  font-size: 0.75rem;
`;

export const UserHeroStatsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem 1rem;
`;

export const UserHeroStats = styled.p`
  font-size: 0.75rem;
  margin-top: 1rem;
`;

export const UserHeroFooterWrapper = styled.div`
  position: absolute;
  bottom: -3rem;
  left: 1rem;
`;

export const UserFeedHeadline = styled.h2`
  padding: 1rem 1rem 0.5rem;
  border-bottom: 1px solid ${globalColors.primary200};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const UserFeedHeadlineSpan = styled.span`
  border-bottom: 3px solid ${globalColors.highlight100};
  padding-bottom: 0.4rem;
`;
