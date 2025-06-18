// import { useRouter } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

import { useNewPostModal } from "@/hooks/useNewPostModal";

import {
  PostButton,
  ItemLabel,
  PostButtonWrapper,
  SidebarItem,
} from "./Sidebar.style";
import { globalColors } from "@/theme/globalStyles";

interface PostProps {
  onClick: () => void;
  icon: IconType;
  label: string;
}

export const SidebarPost = ({ onClick, icon: Icon, label }: PostProps) => {
  const newPostModal = useNewPostModal();

  const openModal = useCallback(() => {
    newPostModal.onOpen();
  }, [newPostModal]);

  return (
    <PostButton onClick={openModal}>
      <PostButtonWrapper>
        <SidebarItem onClick={onClick}>
          <Icon size={28} color="white" />
          <ItemLabel style={{ color: globalColors.white }}>{label}</ItemLabel>
        </SidebarItem>
      </PostButtonWrapper>
    </PostButton>
  );
};
