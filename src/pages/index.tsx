import { Billboard } from '@/components/Billboard'
import { Navbar } from '@/components/Navbar'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'

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
  return (
    <>
      <Head>
        <title>Home | Netflix App</title>
      </Head>
      <Navbar />
      <Billboard />
    </>
  )
}
