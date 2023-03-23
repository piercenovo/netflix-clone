import { BsSearch, BsBell } from 'react-icons/bs'
import { AiFillCaretDown } from 'react-icons/ai'

import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'
import NavbarItem from './NavbarItem'
import { useScroll } from '@/hooks/useScroll'
import { useToggleMenu } from '@/hooks/useToggleMenu'

export function Navbar () {
  const { showMobileMenu, showAccountMenu, toggleMobileMenu, toggleAccountMenu } = useToggleMenu()
  const { showBackground } = useScroll()

  return (
    <nav className='w-full fixed z-40'>
      <div className={`
      px-6
      sm:px-10
      md:px-12
      lg:px-14
      xl:px-16
      py-6
      flex
      flex-row
      items-center
      transition
      duration-500
      ${showBackground ? 'bg-[#141414]/90' : ''}
      `}
      >
        <img
          src='/images/logo.png'
          alt='Logo'
          className='h-4 sm:h-5 md:h-6 lg:h-7'
        />

        <ul
          className='
          flex-row
          ml-12
          gap-7
          hidden
          lg:flex'
        >
          <NavbarItem label='Home' />
          <NavbarItem label='Series' />
          <NavbarItem label='Films' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My List' />
          <NavbarItem label='Browse by languages' />
        </ul>

        <button
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
        >
          <p className='text-white text-sm'>Browse</p>
          <AiFillCaretDown
            className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`}
          />

          <MobileMenu visible={showMobileMenu} />
        </button>

        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsSearch className='text-sm lg:text-base xl:text-lg' />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <BsBell className='text-sm lg:text-base xl:text-lg' />
          </div>
          <button
            onClick={toggleAccountMenu}
            className='flex flex-row items-center gap-2 cursor-pointer relative'
          >
            <figure className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-md overflow-hidden'>
              <img src='/images/default-green.png' alt='Profile' />
            </figure>
            <AiFillCaretDown
              className={`text-white transition hidden
              lg:flex ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`}
            />
            <AccountMenu visible={showAccountMenu} />
          </button>
        </div>
      </div>
    </nav>
  )
}
