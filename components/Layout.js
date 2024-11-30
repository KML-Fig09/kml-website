import React from 'react';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <title>Kim Littler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Header>
      <main className="bg-gray-100 text-gray-800 min-h-screen">{children}</main>
    </>
  );
}
