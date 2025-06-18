"use client";

import React, { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { useNewPostModal } from "@/hooks/useNewPostModal";

import { Modal } from "../Layout/Modal";

import { ModalContent } from "./Modals.style";
import { Form } from "../Form";

export const NewPostModal = () => {
  const newPostModal = useNewPostModal();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      newPostModal.onClose();
    } catch (error) {
      toast.error(`Something went wrong. ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [newPostModal]);

  const Content = (
    <ModalContent>
      <Form placeholder="What's happening?" />
    </ModalContent>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={newPostModal.isOpen}
      title="Write a new post"
      onClose={newPostModal.onClose}
      onSubmit={onSubmit}
      body={Content}
    />
  );
};
