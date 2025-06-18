/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import styles from "./ImageUpload.module.css";

import { UploadedImage, UploadLabel } from "./ImageUpload.style";

interface ImageUploadProps {
  value: string;
  disabled?: boolean;
  onChange: (base64: string) => void;
  label: string;
}

export const ImageUpload = ({
  value,
  disabled,
  onChange,
  label,
}: ImageUploadProps) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange],
  );

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };

      reader.readAsDataURL(file);
    },
    [handleChange],
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
    },
  });

  return (
    <div
      {...getRootProps({
        className: styles.imageUploadWrapper,
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <UploadedImage>
          <Image src={base64} height={100} width={100} alt="Uploaded Image" />
        </UploadedImage>
      ) : (
        <UploadLabel>{label}</UploadLabel>
      )}
    </div>
  );
};
