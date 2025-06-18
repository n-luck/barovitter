/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { Suspense } from "react";

import usePosts from "@/hooks/usePosts";

import { Post } from "./Post";

import { FeedWrapper } from "./Feed.style";
import { LoadingCircle } from "@/components/UI/LoadingCircle";

interface FeedProps {
  profileId?: string;
}

export const Feed = ({ profileId }: FeedProps) => {
  const { data: posts = [] } = usePosts(profileId ? profileId : undefined);

  return (
    <Suspense fallback={<LoadingCircle />}>
      <FeedWrapper>
        {posts.map((post: Record<string, any>) => {
          {
            return <Post key={post.id} data={post} />;
          }
        })}
      </FeedWrapper>
    </Suspense>
  );
};
