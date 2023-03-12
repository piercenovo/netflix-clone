import { useInfoModal } from '@/hooks/useInfoModal'
import { useMovie } from '@/hooks/useMovie'
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import FavoriteButton from './FavoriteButton'
import PlayButton from './PlayButton'

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible)

  const { movieId } = useInfoModal()
  const { data = {} } = useMovie(movieId)

  useEffect(() => {
    setIsVisible(!!visible)
  }, [visible])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  if (!visible) {
    return null
  }

  return (
    <div
      className='
        z-50
        transition
        duration-300
        bg-black/80
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
    '
    >
      <div
        className='
          relative
          w-auto
          mx-auto
          max-w-3xl
          rounded-md
          overflow-hidden
        '
      >
        <div
          className={`
            ${isVisible ? 'scale-100' : 'scale-0'}
            transform
            duration-300
            relative
            flex-auto
            bg-[#141414]
            drop-shadow-md
          `}
        >
          <div className='relative h-96'>
            <video
              autoPlay
              muted
              loop
              className='
               w-full
               brightness-[60%]
               object-cover
               h-full
              '
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
            />
            <div
              className='
              cursor-pointer
              absolute
              top-3
              right-3
              w-10
              h-10
              rounded-full
              bg-black/70
              flex
              items-center
              justify-center
              '
              onClick={handleClose}
            >
              <AiOutlineClose className='text-white text-xs md:text-base lg:text-xl xl:text-2xl' />
            </div>

            <div
              className='
              absolute
              bottom-[10%]
              left-10
              '
            >
              <p className='h-full text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8'>
                {data?.title}
              </p>
              <div className='flex flex-row gap-4 items-center'>
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
              </div>
            </div>
          </div>

          <div className='px-12 py-8 flex flex-col gap-3'>
            <div className='flex flex-col md:flex-row gap-1 md:gap-2 mt-2'>
              <p className='text-green-400 font-semibold text-lg'>
                New
              </p>
              <p className='text-white text-lg'>
                {data?.duration}
              </p>
            </div>
            <p className='text-white text-lg'>
              {data?.genre}
            </p>
            <p className='text-white text-lg'>
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
