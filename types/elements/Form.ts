import { InputHTMLAttributes } from 'react';

export type TextInputProps = {
  name: string;
  className?: string;
  label?: string;
  error?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
