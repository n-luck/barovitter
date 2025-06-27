"use client";

import usePost from "@/hooks/usePost";

import { LoadingCircle } from "@/components/UI/LoadingCircle";
import { Header } from "../Header";
import { Post as PostItem } from "../Feed/Post";
import { Form } from "@/components/Form";
import { Comments } from "../Comments";

import { PostError, CommentWrapper } from "./Post.style";
import { Headline } from "@/components/UI/Headline";

interface PostProps {
  postId: string;
}

const Post = ({ postId }: PostProps) => {
  const { data: fetchedPost, isLoading } = usePost(postId as string);

  if (isLoading || !fetchedPost) {
    return (
      <PostError>
        <LoadingCircle />
      </PostError>
    );
  }

  return (
    <>
      <Header label="Post" showBack />
      <PostItem data={fetchedPost} />
      <CommentWrapper>
        <Headline size="h3">
          Write a reply
        </Headline>
        <Form
          postId={postId as string}
          isComment
          placeholder="Post a comment."
        />
      </CommentWrapper>
      <Comments comments={fetchedPost?.comments} />
    </>
  );
};

export default Post