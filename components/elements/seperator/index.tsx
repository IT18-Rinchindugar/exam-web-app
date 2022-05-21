import React from 'react';
import { SeperatorProps } from '@/types/elements/Seperator';

function Seperator({ height = 1, bgColor, className }: SeperatorProps) {
  return (
    <div
      className={`w-full ${className}`}
      style={{ backgroundColor: bgColor, height }}
    />
  );
}
export default Seperator;
