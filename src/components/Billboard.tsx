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
      <div className='absolute top-[30%] lg:top-[30%] ml-10 md:ml-16'>
        <p className='
        text-white
        text-xl
        md:text-4xl
        lg:text-5xl
        xl:text-6xl
        h-full
        w-[60%]
        font-bold
        drop-shadow-xl
        '
        >
          {data?.title}
        </p>
        <p className='
          text-white
          text-[0.55rem]
          sm:text-[0.65rem]
          md:text-base
          lg:text-lg
          xl:text-xl
          mt-2
          md:mt-4
          lg:mt-6
          w-[50%]
          lg:w-[45%]
          xl:w-[40%]
          drop-shadow-xl
        '
        >
          {data?.description}
        </p>
        <div className='flex flex-row  items-center mt-3 md:mt-5 lg:mt-6 gap-3'>
          <button
            className='
              bg-white
              text-white
              bg-opacity-30
              rounded-[0.30rem]
              py-[0.30rem] md:py-2
              px-4 md:px-6 xl:px-8
              w-auto
              text-[0.60rem] md:text-sm lg:text-lg xl:text-xl
              font-semibold
              flex
              flex-row
              items-center
              justify-center
              hover:bg-opacity-20
              transition
              gap-1 md:gap-2
          '
          >
            <AiOutlineInfoCircle className='text-xs md:text-base lg:text-xl xl:text-2xl' />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}
