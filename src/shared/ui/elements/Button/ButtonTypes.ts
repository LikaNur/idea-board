import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "success" | "danger" | "gray" | "circle";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
