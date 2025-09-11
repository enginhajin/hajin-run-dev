'use client';

import { usePathname } from 'next/navigation';
import { Header } from './_components/Header';
import { Footer } from './_components/Footer';
import { Aside } from './_components/Aside';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname.startsWith('/blog');

  return (
    <>
      <Header />
      <div className="relative mx-auto mt-16 w-full max-w-196">
        <main className="px-6 py-20">{children}</main>
        {showSidebar && (
          <SidebarProvider defaultOpen={true}>
            <Aside />
          </SidebarProvider>
        )}
      </div>
      <Footer />
    </>
  );
}
