import React from 'react';
import Head from 'next/head';
import Header from 'components/Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kim Littler Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-gray-100 text-gray-800 min-h-screen">{children}</main>
    </>
  );
}
