'use client';

import { usePathname } from 'next/navigation';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { TableOfContents } from './_components/TableOfContents';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname.startsWith('/blog/post');

  return (
    <div className="pt-16">
      <Header />
      <div className="relative mx-auto w-full max-w-196">
        <main className="w-full px-6 py-20">{children}</main>
        {showSidebar && <TableOfContents />}
      </div>
      <Footer />
    </div>
  );
}
