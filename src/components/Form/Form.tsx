"use client";

import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import usePosts from "@/hooks/usePosts";
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useNewPostModal } from "@/hooks/useNewPostModal";

import { Button, ButtonSecondary } from "@/theme/components/Buttons";
import { Avatar } from "../UI/Avatar";

import usePost from "@/hooks/usePost";
import {
  FormWrapper,
  FormLoggedOut,
  FormHeadline,
  FormControls,
  FormLoggedIn,
  FormPostWrapper,
  ButtonWrapper,
  FormInput,
} from "./Form.styles";

interface FormProps {
  placeholder?: string;
  isComment?: boolean;
  postId?: string;
  isModal?: boolean;
}

export const Form = ({ placeholder, isComment, postId }: FormProps) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const newPostModal = useNewPostModal();

  const { data: currentUser } = useCurrentUser();
  const { mutate: mutatePosts } = usePosts();
  const { mutate: mutatePost } = usePost(postId as string);

  const [body, setBody] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const url = isComment ? `/api/comments?postId=${postId}` : "/api/posts";

      await axios.post(url, { body });

      toast.success("Post created.");

      setBody("");
      newPostModal.onClose();
      mutatePosts();
      mutatePost();
    } catch (error) {
      return toast.error(`Something went wrong ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [body, isComment, mutatePost, mutatePosts, newPostModal, postId]);

  return (
    <FormWrapper>
      {currentUser ? (
        <FormLoggedIn>
          <div>
            <Avatar userId={currentUser.id} />
          </div>
          <FormPostWrapper>
            <FormInput
              disabled={isLoading}
              onChange={(event) => setBody(event.target.value)}
              value={body}
              placeholder={placeholder}
            />
            <ButtonWrapper>
              <Button disabled={isLoading || !body} onClick={onSubmit}>
                Post
              </Button>
            </ButtonWrapper>
          </FormPostWrapper>
        </FormLoggedIn>
      ) : (
        <FormLoggedOut>
          {!isComment && <FormHeadline>Welcome to Barovitter</FormHeadline>}
          <FormControls>
            <Button onClick={loginModal.onOpen}>Login</Button>
            <ButtonSecondary onClick={registerModal.onOpen}>
              Register
            </ButtonSecondary>
          </FormControls>
        </FormLoggedOut>
      )}
    </FormWrapper>
  );
};
