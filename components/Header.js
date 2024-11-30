import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="max-w-4xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Kim Littler</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/technical">Technical Portfolio</Link>
          <Link href="/creative">Creative Portfolio</Link>
          <Link href="/writing">Writing Portfolio</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
      </nav>
    </header>
  );
}

  