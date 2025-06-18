"use client";

import React, { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

import { useRegisterModal } from "@/hooks/useRegisterModal";
import { useLoginModal } from "@/hooks/useLoginModal";

import { Modal } from "../Layout/Modal";
import { Input } from "@/theme/components/Input";

import { FooterLink, ModalContent, ModalFooter, ModalFooterText } from "./Modals.style";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      await axios.post("/api/register", { email, password, username, name });

      toast.success("Account created");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      toast.error(`Something went wrong. ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [email, name, password, registerModal, username]);

  const onToggle = useCallback(() => {
    if (isLoading) return;

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, loginModal, registerModal]);

  const Content = (
    <ModalContent>
      <Input
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
        disabled={isLoading}
      />
      <Input
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        value={username}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
        disabled={isLoading}
        type="password"
      />
    </ModalContent>
  );

  const Footer = (
    <ModalFooter>
      <ModalFooterText>
        Already have an account?{" "}
        <FooterLink onClick={onToggle}>
          Sign in
        </FooterLink>
      </ModalFooterText>
    </ModalFooter>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      buttonLabel="Sign up"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={Content}
      footer={Footer}
    />
  );
};
