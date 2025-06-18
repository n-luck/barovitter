"use client";

import React, { useCallback, useState } from "react";
import { signIn } from "next-auth/react";

import { useLoginModal } from "@/hooks/useLoginModal";
import { useRegisterModal } from "@/hooks/useRegisterModal";

import { Modal } from "../Layout/Modal";
import { Input } from "@/theme/components/Input";

import { FooterLink, ModalContent, ModalFooter, ModalFooterText } from "./Modals.style";

export const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        console.error("Sign-in error:", res.error);
      } else {
        loginModal.onClose();
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, [email, loginModal, password]);

  const onToggle = useCallback(() => {
    if (isLoading) return;

    loginModal.onClose();
    registerModal.onOpen();
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
        First time using Barovitter?{" "}
        <FooterLink onClick={onToggle}>
          Sign up
        </FooterLink>
      </ModalFooterText>
    </ModalFooter>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      buttonLabel="Log in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={Content}
      footer={Footer}
    />
  );
};
