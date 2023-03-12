import React from 'react'

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null
  }

  return (
    <div className='flex bg-black/90 w-56 absolute top-8 left-0 py-5 flex-col border-[1px] border-gray-800'>
      <ul className='flex flex-col gap-4 text-sm'>
        <li className='px-3 text-center text-white hover:underline'>
          Home
        </li>
        <li className='px-3 text-center text-white hover:underline'>
          Series
        </li>
        <li className='px-3 text-center text-white hover:underline'>
          Films
        </li>
        <li className='px-3 text-center text-white hover:underline'>
          New & Popular
        </li>
        <li className='px-3 text-center text-white hover:underline'>
          My List
        </li>
        <li className='px-3 text-center text-white hover:underline'>
          Browse by languages
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
