import { useBillboard } from '@/hooks/useBillboard'

import { AiOutlineInfoCircle } from 'react-icons/ai'

export function Billboard () {
  const { data } = useBillboard()

  return (
    <div className='relative h-[56.25vw]'>
      <video
        className='
          w-full
          h-[56.25vw]
          object-cover
          brightness-[60%]
          transition
          duration-500
        '
        autoPlay
        muted
        loop
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      />
      <div className='absolute top-[30%] md:top-[40%] ml-10 md:ml-16'>
        <p className='
        text-white
        text-xl
        md:text-5xl
        lg:text-6xl
        h-full
        w-[70%]
        font-bold
        drop-shadow-xl
        '
        >
          {data?.title}
        </p>
        <p className='
          text-white
          text-[8px]
          md:text-lg
          mt-3
          md:md-8
          w-[90%]
          md:w-[80%]
          lg:w-[50%]
          drop-shadow-xl
        '
        >
          {data?.description}
        </p>
        <div className='flex flex-row  items-center mt-3 md:mt-4 gap-3'>
          <button
            className='
              bg-white
              text-white
              bg-opacity-30
              rounded-md
              py-1 md:py-2
              px-2 md:px-4
              w-auto
              text-sm lg:text-lg
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
              gap-2
          '
          >
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
