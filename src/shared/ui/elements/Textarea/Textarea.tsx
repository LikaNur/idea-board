import { useEffect, useRef } from "react";
import type { TextareaProps } from "./TextareaTypes";
import clsx from "clsx";

export const Textarea = ({
  value,
  label,
  error,
  autoResize = false,
  className,
  onChange,
  ...props
}: TextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, autoResize]);

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium text-black">
          {label}
        </label>
      )}

      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => {
          if (autoResize && textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
          }
          onChange?.(e);
        }}
        className={clsx(
          "w-full px-3 py-2 border rounded-lg text-sm bg-white text-black focus:outline-none transition resize-none",
          error ? "border-red-600" : "border-gray-300 hover:border-gray-400",
          className
        )}
        {...props}
      />

      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
};
