import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export function SeriesList() {
  return (
    <ul className="grid grid-cols-2 gap-8">
      {Array.from({ length: 4 }, (_, i) => {
        return (
          <li key={i} className="overflow-hidden rounded-xl">
            <Link href="#" className="flex h-30">
              <div className="relative w-30 shrink-0 overflow-hidden rounded-xl">
                <Image src="/image/sample-image01.jpg" alt="sample image" fill />
              </div>
              <div className="flex grow-1 flex-col justify-between pl-4">
                {i % 2 === 0 ? (
                  <h2 className="text-lg font-bold">
                    시리즈 제목 시리즈 제목 시리즈 시리즈 제목 시리즈 제목
                  </h2>
                ) : (
                  <h2 className="text-lg font-bold">시리즈 제목</h2>
                )}

                <div>
                  <div className="flex gap-2">
                    <span className="text-sm">2 Post</span>
                    <span className="text-sm">2025.10.10 Updated</span>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Badge variant="outline">Tag1</Badge>
                    <Badge variant="outline">Tag2</Badge>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
