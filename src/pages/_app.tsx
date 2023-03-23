import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Netflix App</title>
        <meta name='description' content='Netflix Clone, built with Next.js, TypeScript, TailwindCSS & Prisma. 🚀' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicons/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
