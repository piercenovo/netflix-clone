import { AiOutlineInfoCircle } from 'react-icons/ai'

const InfoButton = () => {
  return (
    <button
      className='
      bg-white
      text-white
      rounded-[0.30rem]
      py-[0.30rem] md:py-[0.40rem] lg:py-[0.47rem] xl:py-2
      px-4 md:px-4 lg:px-6 xl:px-8
      w-auto
      text-[0.60rem] md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl
      font-semibold
      flex
      flex-row
      items-center
      bg-opacity-30
      hover:bg-opacity-20
      transition
      gap-1 xl:gap-2
  '
    >
      <AiOutlineInfoCircle
        className='text-xs md:text-base lg:text-xl xl:text-2xl'
      />
      More Info
    </button>
  )
}

export default InfoButton
