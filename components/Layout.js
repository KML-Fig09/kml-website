import React from 'react';
import Header from './Header';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Kim Littler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A professional portfolio, showcasing technical projects, creative designs, and written works."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-gray-100 text-gray-800 min-h-screen">{children}</main>
      <footer className="bg-secondary-dark text-center text-foreground-light py-4 mt-10">
        <p>&copy; 2024 Kim Littler | Portfolio</p>
      </footer>
    </>
  );
}
