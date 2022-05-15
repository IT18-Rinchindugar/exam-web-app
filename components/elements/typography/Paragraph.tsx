import React from 'react';
import {
  ParagraphProps,
  ParagraphDefaultProps,
} from '@/types/elements/Typography';
import Colors from 'constants/Colors';

function Paragraph({
  type,
  label,
  color,
  className,
}: ParagraphProps & typeof ParagraphDefaultProps) {
  return (
    <p className={`${type} ${className}`} style={{ color: Colors[color] }}>
      {label}
    </p>
  );
}

Paragraph.defaultProps = ParagraphDefaultProps;

export default Paragraph;
