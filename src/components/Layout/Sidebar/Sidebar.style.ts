import styled from "styled-components";
import { globalColors, device } from "@/theme/globalStyles";

export const SidebarWrapper = styled.div`
  grid-column: 1;
  height: 100vh;
  position: fixed;

  @media ${device.laptop} {
    padding-right: 2rem;
    position: relative;
  }
`;

export const SidebarFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SidebarContent = styled.div`
  padding: 2rem 0;

  @media ${device.laptop} {
    width: 15rem;
  }
`;

export const Logo = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    position: relative;
    left: -1.4rem;
    width: 100%;
    justify-content: flex-start;
    margin-bottom: 1rem;

    &:hover {
      color: ${globalColors.highlight50};
      cursor: pointer;
      transition: ease-in-out 0.5s;
    }
  }
`;

export const LogoText = styled.a`
  display: none;

  @media ${device.laptop} {
    display: inline;
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
      color: ${globalColors.highlight50};
    }
  }
`;

export const SidebarItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const SidebarItem = styled.div`
  position: relative;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:hover, &:active, &:focus {
    cursor: pointer;
    color: ${globalColors.highlight50}
  }

  @media ${device.laptop} {
    border-radius: 0;
    height: auto;
    width: auto;
    gap: 0.5rem;
    transition: ease-in-out 0.5s;
    line-height: 3rem;
  }
`;

export const ItemLabel = styled.a`
  display: none;

  @media ${device.laptop} {
    display: flex;
    font-size: 1rem;
  }
`;

export const PostButton = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${globalColors.highlight50};
  border-radius: 2rem;
  justify-content: center;
  margin-top: 1rem;
  height: 3rem;
  width: 3rem;

  @media ${device.laptop} {
    width: 100%;
    height: auto;
  }

  &:hover {
    background-color: ${globalColors.highlight300};
    transition: ease-in-out 0.5s;
    cursor: pointer;
  }
`;

export const Notification = styled.div`
  position: absolute;
  top: 1rem;
  left: 2.2rem;
  height: 1rem;
  width: 1rem;
  content: " ";
  background-color: ${globalColors.highlight50};
  border-radius: 50%;

  @media ${device.laptop} {
    left: 1.5rem;
  }
`;
