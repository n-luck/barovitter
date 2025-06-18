import React from "react";
import Image from "next/image";

import useUser from "@/hooks/useUser";
import { Avatar } from "@/components/UI/Avatar";

import {
  UserDetailsCoverWrapper,
  UserHeroFooterWrapper,
} from "./UserProfile.style";

interface UserHeroProps {
  userId: string;
}

export const UserHero = ({ userId }: UserHeroProps) => {
  const { data: fetchedUser } = useUser(userId);

  return (
    <UserDetailsCoverWrapper>
      {fetchedUser?.coverImage && (
        <Image
          src={fetchedUser.coverImage}
          fill
          alt="Cover image"
          style={{ objectFit: "cover" }}
        />
      )}
      <UserHeroFooterWrapper>
        <Avatar userId={userId} isLarge={true} />
      </UserHeroFooterWrapper>
    </UserDetailsCoverWrapper>
  );
};
