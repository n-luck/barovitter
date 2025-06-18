/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Comment } from "./Comment";

interface CommentsProps {
  comments: Record<string, any>[];
}

export const Comments = ({ comments = [] }: CommentsProps) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
    </>
  );
};
