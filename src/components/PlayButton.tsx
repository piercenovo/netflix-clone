import React from 'react'
import { useRouter } from 'next/router'

import { BsFillPlayFill } from 'react-icons/bs'

interface PlayButtonProps {
  movieId?: string
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className='
      bg-white
      rounded-[0.30rem]
      py-[0.30rem] md:py-[0.40rem] lg:py-[0.47rem] xl:py-2
      px-4 md:px-4 lg:px-6 xl:px-8
      w-auto
      text-[0.60rem] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl
      font-semibold
      flex
      flex-row
      items-center
      hover:bg-neutral-300
      transition
      gap-1 xl:gap-2
    '
    >
      <BsFillPlayFill
        className='text-xs md:text-base lg:text-xl xl:text-2xl'
      />
      Play
    </button>
  )
}

export default PlayButton
