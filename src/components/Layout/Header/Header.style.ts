import { globalColors } from "@/theme/globalStyles";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div<{
  $showLine?: boolean;
}>`
  padding: 0 1rem 1rem;

  ${(props) => {
    if (props.$showLine) {
      return css`
        border-bottom: 1px solid ${globalColors.primary300};
      `;
    }
  }}
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const GoBackArror = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;

export const HeaderDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

export const HeaderHeadline = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
`;
