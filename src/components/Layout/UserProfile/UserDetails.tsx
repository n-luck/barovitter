import React, { useMemo } from "react";
import { format } from "date-fns";
import { BiCalendar } from "react-icons/bi";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useEditModal } from "@/hooks/useEditModal";
import useFollow from "@/hooks/useFollow";

import {
  Button,
  ButtonOutline,
  ButtonSecondary,
} from "@/theme/components/Buttons";
import {
  UserHeroDateWrapper,
  UserHeroInteraction,
  UserHeroName,
  UserHeroDetailsWrapper,
  UserHeroStats,
  UserHeroStatsWrapper,
  UserHeroUsername,
} from "./UserProfile.style";

interface UserDetailsProps {
  userId: string;
}

export const UserDetails = ({ userId }: UserDetailsProps) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedUser } = useUser(userId);

  const editModal = useEditModal();

  const { isFollowing, toggleFollow } = useFollow(userId);

  const createdAt = useMemo(() => {
    if (!fetchedUser?.createdAt) return null;

    return format(new Date(fetchedUser.createdAt), "MMMM yyyy");
  }, [fetchedUser.createdAt]);

  const FollowButton = isFollowing ? ButtonOutline : Button;

  return (
    <>
      <UserHeroInteraction>
        {currentUser?.id === userId ? (
          <ButtonSecondary onClick={editModal.onOpen}>Edit</ButtonSecondary>
        ) : (
          <FollowButton onClick={toggleFollow}>
            {isFollowing ? "Unfollow " : "Follow"}
          </FollowButton>
        )}
      </UserHeroInteraction>
      <UserHeroDetailsWrapper>
        <UserHeroName>{fetchedUser?.name}</UserHeroName>
        <UserHeroUsername>@{fetchedUser?.username}</UserHeroUsername>
      </UserHeroDetailsWrapper>
      <UserHeroDetailsWrapper>{fetchedUser?.bio}</UserHeroDetailsWrapper>
      <UserHeroDateWrapper>
        <BiCalendar size={20} />
        <p>Joined {createdAt}</p>
      </UserHeroDateWrapper>
      <UserHeroStatsWrapper>
        <UserHeroStats>
          Following: {fetchedUser?.followingIds?.length}
        </UserHeroStats>
        <UserHeroStats>
          Followers: {fetchedUser?.followerCount || 0}
        </UserHeroStats>
      </UserHeroStatsWrapper>
    </>
  );
};
