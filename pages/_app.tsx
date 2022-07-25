import '../styles/globals.css'
import Head from 'next/head';
import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Component {...pageProps} />
  </>
  )
}
