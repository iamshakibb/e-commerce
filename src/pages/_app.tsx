import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Layout from 'src/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://kit.fontawesome.com/bc3726c6f7.js"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}

export default MyApp;
