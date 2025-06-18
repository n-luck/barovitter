import { globalColors } from "@/theme/globalStyles";
import styled from "styled-components";

export const CommentWrapper = styled.div`
  border-top: 1px solid ${globalColors.primary300};
  cursor: pointer;
  padding: 1rem;
  transition: ease-in-out 0.5s;

  &:hover {
    opacity: 0.75;
    background-color: ${globalColors.primary100};
  }
`;

export const Comment = styled.div`
  display: flex;
  gap: 1rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UserInfoText = styled.a`
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const UserInfoSpan = styled.span`
  font-size: 0.75rem;
  color: ${globalColors.primary700};
`;

export const CommentBody = styled.div`
  margin-top: 0.5rem;
`;
