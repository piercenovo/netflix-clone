import React from 'react'

import { BsFillPlayFill } from 'react-icons/bs'

interface MovieCardProps {
  data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className='group bg-[#141414] col-span relative h-[12vw]'>
      <img
        className='
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
        '
        src={data.thumbnailUrl}
        alt='Thumbnail'
      />
      <div
        className='
        opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        invisible
        sm:visible
        delay-300
        w-full
        scale-0
        group-hover:cursor-pointer
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100
      '
      >
        <img
          className='
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
          '
          src={data.thumbnailUrl}
          alt='Thumbnail'
        />
        <div
          className='
          z-10
          bg-[#181818]
          p-2 lg:p-4
          absolute
          w-full
          transition
          shadow-md
          rounded-b-md
        '
        >
          <div className='flex flex-row items-center gap-3'>
            <div
              className='
                w-6 lg:w-10
                h-6 lg:h-10
                bg-white
                rounded-full
                flex
                justify-center
                items-center
                transition
                hover:bg-neutral-300
            '
              onClick={() => {}}
            >
              <BsFillPlayFill size={30} />
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-1 md:gap-2 mt-2 text-[0.65rem] lg:text-sm font-semibold'>
            <p className='text-green-400'>
              New
            </p>
            <p className='text-white'>
              {data.duration}
            </p>
          </div>
          <div className='flex flex-row mt-2 md:mt-3 gap-2 items-center'>
            <p className='text-white text-[10px] lg:text-sm'>
              {data.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
