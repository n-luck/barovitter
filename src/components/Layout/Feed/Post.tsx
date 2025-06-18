/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useMemo } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { CgComment } from "react-icons/cg";

import useCurrentUser from "@/hooks/useCurrentUser";
import { useLoginModal } from "@/hooks/useLoginModal";
import useLike from "@/hooks/useLike";

import { Avatar } from "@/components/UI/Avatar";

import {
  PostWrapper,
  PostContentWrapper,
  PostContent,
  UserInfoWrapper,
  UserInfo,
  PostDate,
  PostDetails,
  PostControlsWrapper,
  PostControls,
} from "./Feed.style";
import { globalColors } from "@/theme/globalStyles";
import { LinkItem as Link } from "@/components/UI/Link";

interface PostProps {
  data: Record<string, any>;
  userId?: string;
}

export const Post = ({ data, userId }: PostProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId });

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [data.id, router]);

  const onLike = useCallback(
    (event: { stopPropagation: () => void }) => {
      event.stopPropagation();

      if (!currentUser) return loginModal.onOpen();

      toggleLike();
    },
    [currentUser, loginModal, toggleLike],
  );

  const createdAt = useMemo(() => {
    if (!data?.createdAt) return null;

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart;

  const profileLink = `/users/${data.user.id}`;

  return (
    <PostWrapper onClick={goToPost}>
      <PostContentWrapper>
        <div>
          <Avatar userId={data.user.id} />
        </div>
        <PostContent>
          <UserInfoWrapper>
            <UserInfo>
              <Link
                size="small"
                href={profileLink}
                style={{ marginRight: "3px" }}
              >
                {data.user.name}
              </Link>
              <Link tertiary size="small" href={profileLink}>
                @{data.user.username}
              </Link>
            </UserInfo>
            <PostDate>{createdAt} ago</PostDate>
          </UserInfoWrapper>
          <PostDetails>{data.body}</PostDetails>
          <PostControlsWrapper>
            <PostControls>
              <CgComment size={20} />
              <p>{data.comments?.length || 0}</p>
            </PostControls>
            <PostControls
              onClick={onLike}
              $hasLiked={hasLiked ? globalColors.highlight50 : ""}
            >
              <LikeIcon size={20} />
              <p>{data.likedIds?.length || 0}</p>
            </PostControls>
          </PostControlsWrapper>
        </PostContent>
      </PostContentWrapper>
    </PostWrapper>
  );
};
