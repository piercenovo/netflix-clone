import React from 'react'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'

import { useFavorite } from '@/hooks/useFavorite'

interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { isFavorite, toggleFavorites } = useFavorite({ movieId })

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <button
      onClick={toggleFavorites}
      className='
        cursor-pointer
        group/item
        w-6 lg:w-10
        h-6 lg:h-10
        border-white
        border-2
        rounded-full
        flex
        justify-center
        items-center
        transition
        hover:border-neutral-300
      '
    >
      <Icon className='text-white text-xs md:text-base lg:text-xl xl:text-2xl' />
    </button>
  )
}

export default FavoriteButton
