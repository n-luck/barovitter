"use client";

import React, { useCallback } from "react";

import { CloseButton } from "@/components/UI/CloseButton";

import { ButtonSecondary } from "@/theme/components/Buttons";
import {
  ModalBackground,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeadline,
  ModalWrapper,
} from "./Modal.style";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  buttonLabel?: string;
  disabled?: boolean;
}

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  buttonLabel,
  disabled,
}: ModalProps) => {
  const handleClose = useCallback(() => {
    if (disabled) return;

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <>
      <ModalBackground onClick={() => onClose()}>
        <ModalWrapper onClick={(e) => e.stopPropagation()}>
          <ModalContent>
            <ModalHeader>
              <ModalHeadline>{title}</ModalHeadline>
              <CloseButton onClick={handleClose} />
            </ModalHeader>
            <ModalBody>{body}</ModalBody>
            <ModalFooter>
              {buttonLabel && (
                <ButtonSecondary disabled={disabled} onClick={handleSubmit}>
                  {buttonLabel}{" "}
                </ButtonSecondary>
              )}
              {footer}
            </ModalFooter>
          </ModalContent>
        </ModalWrapper>
      </ModalBackground>
    </>
  );
};
