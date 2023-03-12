import React from 'react'

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <li className='text-white cursor-pointer hover:text-gray-300 transition text-sm xl:text-base'>
      {label}
    </li>
  )
}

export default NavbarItem
