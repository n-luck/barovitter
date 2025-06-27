"use client";

import dynamic from "next/dynamic";

const Post = dynamic(() => import("@/components/Layout/Post/Post"), {
  ssr: false,
});

interface PostWrapperProps {
  postId: string;
}

export default function PostWrapper({ postId }: PostWrapperProps) {
  return <Post postId={postId} />;
}
