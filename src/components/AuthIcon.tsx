import React, { ReactNode } from 'react'

interface AuthIconProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}

export function AuthIcon ({ onClick, children } : AuthIconProps) {
  return (
    <button
      onClick={onClick}
      className='
      w-10
      h-10
      bg-white
      rounded-full
      flex
      items-center
      justify-center
      cursor-pointer
      hover:opacity-80
      transition
      '
    >
      {children}
    </button>
  )
}
