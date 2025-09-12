'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoonStar, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background/50 fixed top-0 z-10 flex h-16 w-full justify-center border-b-1 backdrop-blur-xs">
      <div className="flex w-full max-w-256 items-center justify-between px-6">
        <Link href="/blog">로고</Link>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/blog">blog</Link>
              </li>
              <li>
                <Link href="/blog/series">series</Link>
              </li>
              <li>
                <Link href="/blog/tag">tags</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="테마 변경"
          >
            {theme === 'dark' ? <Sun /> : <MoonStar />}
          </Button>
        </div>
      </div>
    </header>
  );
}
