export type ColorTypes =
  | 'transparent'
  | 'color-1'
  | 'color-2'
  | 'color-3'
  | 'color-4'
  | 'color-5'
  | 'color-6'
  | 'primary'
  | 'background'
  | 'facebook-blue'
  | 'google-red'
  | 'color-white';

export type ColorProps = {
  // eslint-disable-next-line no-unused-vars
  [key in ColorTypes]: string;
};
