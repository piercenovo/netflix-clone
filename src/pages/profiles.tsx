import { useCurrentUser } from '@/hooks/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export async function getServerSideProps (context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Profiles () {
  const router = useRouter()
  const { data: user } = useCurrentUser()

  return (
    <div className='flex items-center h-full justify-center'>
      <div className='flex flex-col'>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center'>
          Who is watching now?
        </h1>
        <div className='flex items-center justify-center gap-6 mt-6 md:mt-8 lg:mt-10 xl:mt-12'>
          <div onClick={() => router.push('/')}>
            <div className='group flex-row w-24 md:w-32 lg:w-40 xl:w-44 mx-auto'>
              <figure
                className='
                w-24 md:w-32 lg:w-40 xl:w-44
                h-24 md:h-32 lg:h-40 xl:h-44
                rounded-md
                flex
                items-center
                justify-center
                border-4
                border-transparent
                group-hover:cursor-pointer
                group-hover:border-white
                overflow-hidden
              '
              >
                <img src='/images/default-green.png' alt='Profile' />
              </figure>

              <p
                className='
                mt-1 md:mt-2 lg:mt-3 xl:mt-4
                text-gray-400
                text-base md:text-xl lg:text-2xl xl:text-3xl
                text-center
                group-hover:cursor-pointer
                group-hover:text-white
              '
              >
                {user?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
