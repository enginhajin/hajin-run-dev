import Link from 'next/link';

export function TableOfContents() {
  return (
    <nav className="absolute top-0 -right-50 h-full w-50 py-20">
      <div className="sticky top-16">
        <ul>
          <li>
            <Link href="#heading1">제목 1</Link>
          </li>
          <li>
            <Link href="#heading2">제목 2</Link>
            <ul className="ml-4">
              <li>
                <Link href="#heading2-1">제목 2-1</Link>
              </li>
              <li>
                <Link href="#heading2-2">제목 2-2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#heading3">제목 3</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
