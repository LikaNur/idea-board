import type { TextareaHTMLAttributes } from "react";

export type TextareaProps = {
  label?: string;
  editLabel?: string;
  error?: string;
  autoResize?: boolean;
  counterClassName?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
