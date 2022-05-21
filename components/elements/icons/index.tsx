import React from 'react';

export const ArrowRightIcon = () => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const CloseIcon = () => {
  return (
    <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 1.41 12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41Z"
        fill="#ffffff"
      />
    </svg>
  );
};
