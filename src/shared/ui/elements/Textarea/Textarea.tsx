import { useEffect, useRef } from "react";
import type { TextareaProps } from "./TextareaTypes";
import clsx from "clsx";

export const Textarea = ({
  value,
  label,
  editLabel,
  error,
  autoResize = false,
  className,
  onChange,
  onBlur,
  onKeyDown,
  counterClassName,
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
        <label
          htmlFor={props.id}
          className={clsx("text-sm font-medium text-black", editLabel)}
        >
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
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={clsx(
          "w-full px-3 py-2 border rounded-lg text-sm bg-white text-black focus:outline-none transition resize-none hover:border-gray-400 focus:ring-gray-400",
          error ? "border-red-600" : "border-gray-300 ",
          className
        )}
        {...props}
      />
      <div className="flex justify-between items-center">
        {error ? <p className="text-xs text-red-600">{error}</p> : <span />}

        {typeof value === "string" && props.maxLength && (
          <p
            className={clsx(
              "text-xs text-gray-500 text-right",
              counterClassName
            )}
          >
            {props.maxLength - value.length} characters left
          </p>
        )}
      </div>
    </div>
  );
};
