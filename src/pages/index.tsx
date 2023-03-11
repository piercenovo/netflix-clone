import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'
import { useCurrentUser } from '@/hooks/useCurrentUser'

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

export default function Home () {
  const { data: user } = useCurrentUser()
  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full h-3/4'>
      <h1 className='text-white text-2xl font-medium'>
        Netflix Clone
      </h1>
      <p className='text-white mt-5'>Logged in as: {user?.name}</p>
      <button className='h-10 w-36 bg-white rounded-md' onClick={() => signOut()}>
        Logout!
      </button>
    </div>
  )
}
