import type { InputProps } from "./InputTypes";
import clsx from "clsx";

export const Input = ({
  value,
  id,
  autoFocus = false,
  placeholder = "",
  onChange,
  onBlur,
  onKeyDown,
  editLabel,
  maxLength,
  error,
  label,
  type,
  className,
}: InputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label
          htmlFor={id}
          className={clsx("text-sm font-medium text-black", editLabel)}
        >
          {label}
        </label>
      )}
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        type={type}
        id={id}
        className={clsx(
          "w-full p-3 border rounded-lg text-sm bg-white text-black hover:border-gray-400 focus:outline-none focus:ring-0 focus:ring-gray-400 transition",
          error ? "border-red-600" : "border-gray-300",
          className
        )}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </div>
  );
};
