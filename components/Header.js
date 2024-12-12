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
        {/* Hamburger Icon for Mobile */}
        <button
          className="block md:hidden text-foreground-light focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        {/* Dropdown Menu */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-16 right-0 w-64 bg-background-dark text-foreground-light rounded-md shadow-lg opacity-100 md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 text-lg font-medium tracking-wide">
            <li>
              <Link
                href="/technical"
                className="block py-2 px-4 hover:text-primary-green transition duration-300"
              >
                Technical
              </Link>
            </li>
            <li>
              <Link
                href="/creative"
                className="block py-2 px-4 hover:text-primary-green transition duration-300"
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                href="/writing"
                className="block py-2 px-4 hover:text-primary-green transition duration-300"
              >
                Writing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 hover:text-primary-green transition duration-300"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
