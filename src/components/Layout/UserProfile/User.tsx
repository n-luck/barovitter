"use client";

import React from "react";

import useUser from "@/hooks/useUser";

import { LoadingCircle } from "@/components/UI/LoadingCircle";
import { Header } from "@/components/Layout/Header";
import { UserHero } from "./UserHero";
import { UserDetails } from "./UserDetails";
import { EditModal } from "@/components/Modals/EditModal";
import useCurrentUser from "@/hooks/useCurrentUser";
import { Feed } from "../Feed";

import {
  UserWrapper,
  UserFeedHeadline,
  UserFeedHeadlineSpan,
} from "./UserProfile.style";

interface UserProps {
  userId: string;
}

export const User = ({ userId }: UserProps) => {
  const { data: fetchedUser, isLoading } = useUser(userId as string);
  const { data: currentUser } = useCurrentUser();

  if (isLoading || !fetchedUser) return <LoadingCircle />;

  return (
    <>
      {currentUser && <EditModal />}
      <Header label={fetchedUser.name} showBack showLine={false} />
      <UserWrapper>
        <UserHero userId={userId as string} />
        <UserDetails userId={userId as string} />
      </UserWrapper>
      <UserFeedHeadline>
        <UserFeedHeadlineSpan>Posts</UserFeedHeadlineSpan>
      </UserFeedHeadline>
      <Feed profileId={userId} />
    </>
  );
};
