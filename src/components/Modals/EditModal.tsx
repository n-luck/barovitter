"use client";

import React, { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useEditModal } from "@/hooks/useEditModal";

import { Modal } from "../Layout/Modal";
import { Input } from "@/theme/components/Input";
import { ImageUpload } from "../ImageUpload";

import { InputWrapper, ModalContent, ModalLabel } from "./Modals.style";

export const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const { profileImage, coverImage, name, username, bio } = currentUser;

  const [profileImg, setProfileImage] = useState("");
  const [coverImg, setCoverImage] = useState("");
  const [names, setNames] = useState("");
  const [usernames, setUsernames] = useState("");
  const [bios, setBios] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProfileImage(profileImage);
    setCoverImage(coverImage);
    setNames(name);
    setUsernames(username);
    setBios(bio);
  }, [bio, coverImage, name, profileImage, username]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.patch("/api/edit", {
        name: names,
        username: usernames,
        bio: bios,
        profileImage: profileImg,
        coverImage: coverImg,
      });
      mutateFetchedUser();
      toast.success("Updated.");
      editModal.onClose();
    } catch (error) {
      toast.error(`Something went wrong. ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [
    bios,
    coverImg,
    editModal,
    mutateFetchedUser,
    names,
    profileImg,
    usernames,
  ]);

  const modalBody = (
    <ModalContent>
      <InputWrapper>
        <ImageUpload
          value={profileImg}
          onChange={(image) => {
            setProfileImage(image);
          }}
          label="Upload profile image"
        />
        <ImageUpload
          value={coverImg}
          onChange={(image) => {
            setCoverImage(image);
          }}
          label="Upload cover image"
        />
      </InputWrapper>
      <InputWrapper>
        <ModalLabel>Name:</ModalLabel>
        <Input
          onChange={(event) => setNames(event.target.value)}
          placeholder="Name"
          value={names}
        />
      </InputWrapper>
      <InputWrapper>
        <ModalLabel>Username:</ModalLabel>
        <Input
          onChange={(event) => setUsernames(event.target.value)}
          placeholder="Username"
          value={usernames}
        />
      </InputWrapper>
      <InputWrapper>
        <ModalLabel>Bio:</ModalLabel>
        <Input
          onChange={(event) => setBios(event.target.value)}
          placeholder="Bio"
          value={bios}
        />
      </InputWrapper>
    </ModalContent>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      title="Edit your profile"
      buttonLabel="Update"
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      body={modalBody}
    />
  );
};
