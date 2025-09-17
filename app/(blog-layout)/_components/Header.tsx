'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { House, LayoutList, MoonStar, SquareUserRound, Sun, Tags } from 'lucide-react';
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
                <Link href="/blog">
                  <House aria-hidden="true" size={20} />
                  <span className="sr-only">홈으로 가기</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/series">
                  <LayoutList aria-hidden="true" size={20} />
                  <span className="sr-only">시리즈 목록</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <SquareUserRound aria-hidden="true" size={20} />
                  <span className="sr-only">소개 페이지</span>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun aria-hidden="true" size={20} />
            ) : (
              <MoonStar aria-hidden="true" size={20} />
            )}
            <span className="sr-only">테마 변경</span>
          </button>
        </div>
      </div>
    </header>
  );
}
