"use client";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { CloseButton as Button } from "@/theme/components/Buttons";
import { globalColors } from "@/theme/globalStyles";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <Button onClick={onClick} title="Close">
      <AiOutlineClose size={24} color={globalColors.white} />
    </Button>
  );
};
