/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";

import { Avatar } from "@/components/UI/Avatar";

import {
  CommentWrapper,
  Comment as CommentContainer,
  UserInfo,
  UserInfoText,
  UserInfoSpan,
  CommentBody,
} from "./Comments.style";

interface CommentProps {
  data: Record<string, any>;
}

export const Comment = ({ data }: CommentProps) => {
  const router = useRouter();

  const gotToUser = useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();

      router.push(`/users/${data.user.id}`);
    },
    [data.user.id, router],
  );

  const createdAt = useMemo(() => {
    if (!data.createdAt) return null;

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt]);

  return (
    <CommentWrapper>
      <CommentContainer>
        <Avatar userId={data.user.id} />
        <div>
          <UserInfo>
            <UserInfoText onClick={gotToUser}>{data.user.name}</UserInfoText>
            <UserInfoSpan>@{data.user.username}</UserInfoSpan>
            <UserInfoSpan>{createdAt} ago</UserInfoSpan>
          </UserInfo>
          <CommentBody>{data.body}</CommentBody>
        </div>
      </CommentContainer>
    </CommentWrapper>
  );
};
