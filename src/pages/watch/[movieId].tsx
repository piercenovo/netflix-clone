import React from 'react'
import { useMovie } from '@/hooks/useMovie'
import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Watch = () => {
  const router = useRouter()
  const { movieId } = router.query

  const { data } = useMovie(movieId as string)

  return (
    <div className='h-screen w-screen bg-black'>
      <nav
        className='
        fixed
        w-full
        p-4
        z-10
        flex
        flex-row
        items-center
        gap-8
        bg-black/70
        '
      >
        <AiOutlineArrowLeft
          onClick={() => router.push('/')}
          className='text-white text-2xl lg:text-3xl xl:text-4xl cursor-pointer'
        />
        <p className='text-white text-xl md:text-3xl font-bold'>
          <span className='font-light mr-2'>
            Watching:
          </span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className='h-full w-full'
        src={data?.videoUrl}
      />
    </div>
  )
}

export default Watch
