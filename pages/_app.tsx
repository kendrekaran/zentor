import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";  // Changed from next/document to next/head

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Head>
        <title>Zentor | Digital Solution Agency</title>
        <meta name="description" content="Transform your digital presence with Zentor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
