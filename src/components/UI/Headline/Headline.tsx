import React, { CSSProperties, ReactNode } from "react";
import { HeadlineSpan } from "./Headline.styles";

interface HeadlineProps {
  size: "h1" | "h2" | "h3" | "h4";
  children?: ReactNode;
  style?: CSSProperties
}

export const Headline = ({ size, children, style }: HeadlineProps) => {
  const Title = size;
  return (
    <Title>
      <HeadlineSpan $size={size} style={style}>{children}</HeadlineSpan>
    </Title>
  );
};
