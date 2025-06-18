import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

import useCurrentUser from "@/hooks/useCurrentUser";
import { useLoginModal } from "@/hooks/useLoginModal";

import {
  SidebarItemWrapper,
  SidebarItem as SidebarItemDiv,
  Notification,
  ItemLabel,
} from "./Sidebar.style";

interface SidebarProps {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  loggedIn?: boolean;
  alert?: boolean;
}

export const SidebarItem = ({
  label,
  href,
  icon: Icon,
  onClick,
  loggedIn,
  alert,
}: SidebarProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const handleClick = useCallback(() => {
    if (onClick) return onClick();

    if (loggedIn && !currentUser) {
      loginModal.onOpen();
    } else if (href) return router.push(href);
  }, [currentUser, href, loggedIn, loginModal, onClick, router]);

  return (
    <SidebarItemWrapper onClick={handleClick}>
      <SidebarItemDiv>
        <Icon size={28} /> {alert && <Notification />}
        <ItemLabel>{label}</ItemLabel>
      </SidebarItemDiv>
    </SidebarItemWrapper>
  );
};
