import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="fixed top-0 z-10 flex h-16 w-full justify-center bg-gray-100">
      <div className="flex w-full max-w-256 items-center justify-between px-6 outline-1">
        <a href="/blog">로고</a>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="/blog">blog</a>
              </li>
              <li>
                <a href="/about">about</a>
              </li>
            </ul>
          </nav>
          <Button variant="outline">다크</Button>
        </div>
      </div>
    </header>
  );
}
