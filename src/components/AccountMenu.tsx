import { useCurrentUser } from '@/hooks/useCurrentUser'
import { signOut } from 'next-auth/react'
import React from 'react'

interface AccountMenuProps {
  visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser()
  if (!visible) {
    return null
  }

  return (
    <div className='flex bg-black/90 w-56 absolute top-14 right-0 py-5 flex-col border-[1px]  border-gray-800'>
      <div className='flex flex-col gap-3'>
        <div className='px-4 group/item flex flex-row gap-3 items-center w-full'>
          <figure className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-md overflow-hidden'>
            <img src='/images/default-red.png' alt='Profile' />
          </figure>
          <p className='text-white text-sm group-hover/item:underline'>
            {currentUser?.name}
          </p>
        </div>
        <hr className='bg-gray-700 border-0 h-px my-2' />
        <button
          onClick={() => signOut()}
          className='px-2 text-center text-white text-sm hover:underline'
        >
          Sign out of Netflix
        </button>
      </div>
    </div>
  )
}

export default AccountMenu
