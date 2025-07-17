import clsx from "clsx";
import type { ButtonProps } from "./ButtonTypes";

export const Button = ({
  children,
  variant = "circle",
  className = "",
  ...props
}: ButtonProps) => {
  const base = "text-md text-white font-medium transition focus:outline-none";

  const variants: Record<string, string> = {
    primary: "bg-[#0D81A3] px-4 py-2 rounded-md hover:bg-[#66AEC5]",
    outline:
      "flex items-center md:pl-1 md:pr-3 m:py-2 p-2 rounded-xl border border-white hover:bg-white/10 transition text-sm md:text-base",
    success: "bg-green-600 rounded-md p-2 text-sm hover:bg-green-700",
    danger: "bg-red-600 rounded-md hover:bg-red-700",
    gray: "bg-gray-500 rounded-md px-4 p-2 text-sm hover:bg-gray-600",
    circle: "hover:bg-gray-200 rounded-3xl",
  };

  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};
