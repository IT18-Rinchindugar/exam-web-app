import React from 'react';
import { TextInputProps } from '@/types/elements/Form';

function TextInput({
  className,
  label,
  name,
  error = false,
  ...props
}: TextInputProps) {
  return (
    <input
      name={name}
      {...props}
      className={`h4 w-full py-2 px-4 text-color-6 focus:bg-white focus:outline-none ${className}`}
    />
  );
}

export default TextInput;
