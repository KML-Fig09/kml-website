import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-background-dark text-foreground-light sticky top-0 z-50 border-b border-border-color shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-3xl font-bold tracking-wide">
          <Link href="/" className="hover:text-primary-green">
            Kim Littler
          </Link>
        </h1>
        <button
          className="block md:hidden text-foreground-light"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 text-lg font-medium tracking-wide`}
        >
          <Link
            href="/technical"
            className="hover:text-primary-green transition duration-300"
          >
            Technical
          </Link>
          <Link
            href="/creative"
            className="hover:text-primary-green transition duration-300"
          >
            Design
          </Link>
          <Link
            href="/writing"
            className="hover:text-primary-green transition duration-300"
          >
            Writing
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary-green transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </header>
  );
}
