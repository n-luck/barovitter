import { globalColors } from "@/theme/globalStyles";
import styled, { css } from "styled-components";

export const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostWrapper = styled.div`
  border-top: 1px solid ${globalColors.primary200};
  padding: 1.5rem 1rem;
  cursor: pointer;
  transition: ease-in-out 0.25s;
  display: flex;

  &:hover {
    background-color: ${globalColors.primary100};
  }
`;

export const PostContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const UserInfoText = styled.a`
  font-size: 0.75rem;
  color: ${globalColors.white};
  font-weight: 500;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserName = styled.a`
  color: ${globalColors.primary500};
  margin-left: 0.25rem;
  font-size: 0.75rem;
`;

export const PostDate = styled.span`
  font-size: 0.75rem;
  color: ${globalColors.primary600};
  margin-left: 3px;
`;

export const PostControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const PostControls = styled.div<{
  $hasLiked?: string;
}>`
  display: flex;
  align-items: center;
  color: ${globalColors.primary500};
  transition: ease-in-out 0.5s;
  cursor: pointer;
  gap: 0.25rem;

  &:hover {
    color: ${globalColors.highlight50};
  }

  ${(props) => {
    if (props.$hasLiked) {
      return css`
        color: ${globalColors.highlight50};
      `;
    }
  }}
`;
