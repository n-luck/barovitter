import React from "react";
import { ClipLoader } from "react-spinners";

import { LoadingWrapper } from "./LoadingCircle.style";

export const LoadingCircle = () => {
  return (
    <LoadingWrapper>
      <ClipLoader color="#fff" size={80} />
    </LoadingWrapper>
  );
};
