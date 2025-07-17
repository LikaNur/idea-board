export type InputProps = {
  value: string;
  id?: string;
  autoFocus?: boolean;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  error?: string;
  type?: string;
  label?: string;
  className?: string;
};
