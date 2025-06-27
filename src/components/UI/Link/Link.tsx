import React, { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { LinkWrapper } from "./Link.style";

interface LinkProps {
  children: ReactNode;
  href: string;
  size?: "small" | "large";
  secondary?: boolean;
  tertiary?: boolean;
  underline?: boolean;
  style?: CSSProperties;
  target?: string;
}

export const LinkItem = ({
  children,
  href = "",
  size,
  secondary,
  tertiary,
  underline,
  style,
  target = "_self",
}: LinkProps) => {
  return (
    <Link href={href} style={{ textDecoration: "none" }} target={target}>
      <LinkWrapper
        $size={size}
        $secondary={secondary}
        $tertiary={tertiary}
        $underline={underline}
        style={style}
      >
        {children}
      </LinkWrapper>
    </Link>
  );
};
