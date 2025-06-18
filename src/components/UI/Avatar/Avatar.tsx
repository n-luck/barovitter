import React from "react";
import Image from "next/image";

import useUser from "@/hooks/useUser";

import { AvatarWrapper } from "./Avatar.style";
import { LinkItem } from "../Link";

interface AvatarProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

export const Avatar = ({ userId, isLarge, hasBorder }: AvatarProps) => {
  const { data: fetchedUser } = useUser(userId);

  return (
    <AvatarWrapper $hasBorder={hasBorder} $isLarge={isLarge}>
      <LinkItem href={`/users/${userId}`}>
      <Image
        src={fetchedUser?.profileImage || "/images/placeholder.png"}
        fill
        style={{ objectFit: "cover", borderRadius: "50%" }}
        alt="Avatar"
        sizes="(max-width: 768px) 30vw, 10vw"
      />
      </LinkItem>
    </AvatarWrapper>
  );
};
