import { ColorTypes } from './Color';

export type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hero';
export type ParagraphTypes = 'p1' | 'p2' | 'p3';

export type HeadingProps = {
  type?: TitleType;
  label: string;
  color?: ColorTypes;
  className?: string;
};

export type ParagraphProps = {
  type?: ParagraphTypes;
  label: string;
  color?: ColorTypes;
  className?: string;
};

export const HeadingDefaultProps = {
  type: 'hero',
  color: 'background',
};

export const ParagraphDefaultProps = {
  type: 'p1',
  color: 'background',
};
