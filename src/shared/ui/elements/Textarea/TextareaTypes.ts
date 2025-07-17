import type { TextareaHTMLAttributes } from "react";

export type TextareaProps = {
  label?: string;
  error?: string;
  autoResize?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
