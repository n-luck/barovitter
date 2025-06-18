import { globalColors } from "@/theme/globalStyles";
import styled from "styled-components";

export const PostError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${globalColors.primary300};
  padding: 1rem 1rem 0;
`;
