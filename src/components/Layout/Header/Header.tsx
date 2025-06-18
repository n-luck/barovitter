"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

import styles from "./Header.module.css";
import {
  HeaderWrapper,
  Header as HeaderContainer,
  HeaderHeadline,
  HeaderDetails,
} from "./Header.style";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Avatar } from "@/components/UI/Avatar";

interface HeaderProps {
  label: string;
  showBack?: boolean;
  showLine?: boolean;
}

export const Header = ({ label, showBack = true, showLine = true }: HeaderProps) => {
  const router = useRouter();
  const currentUser = useCurrentUser();

  const handleGoBack = useCallback(() => router.back(), [router]);

  return (
    <HeaderWrapper $showLine={showLine}>
      <HeaderContainer>
        {showBack && (
          <BiArrowBack
            size={20}
            color="#fff"
            onClick={handleGoBack}
            className={styles.goBackArrow}
            data-testid="back-arrow"
          />
        )}
        <HeaderDetails>
          <HeaderHeadline>{label}</HeaderHeadline>
          {currentUser?.data?.id && <Avatar userId={currentUser?.data?.id} />}
        </HeaderDetails>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
