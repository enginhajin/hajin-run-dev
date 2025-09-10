import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';

export default function BlogMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="relative mx-auto mt-16 w-full max-w-196">
        <main className="px-6 py-20 outline-1">{children}</main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}
