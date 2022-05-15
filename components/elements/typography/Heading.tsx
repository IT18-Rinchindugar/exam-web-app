import React from 'react';
import { HeadingProps, HeadingDefaultProps } from '@/types/elements/Typography';
import Colors from 'constants/Colors';

function Heading({
  type,
  label,
  color,
  className,
}: HeadingProps & typeof HeadingDefaultProps) {
  return (
    <p
      className={`${type} ${className}`}
      style={{ color: Colors[color] }}
    >{`${label}`}</p>
  );
}

Heading.defaultProps = HeadingDefaultProps;

export default Heading;
