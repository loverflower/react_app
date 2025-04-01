import React, { ReactNode } from 'react';

interface IWrapper {
    children: ReactNode,
    color?: string,
    size?: number
    onDelete: ()=> void
}

const SvgWrapper = ({ children, size = 20, onDelete}: IWrapper) => {
  return (
    <svg
      cursor="pointer"
      width={size}
      height={size}
      onClick={onDelete}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

export default SvgWrapper;