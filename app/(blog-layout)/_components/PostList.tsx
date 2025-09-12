import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export function PostList() {
  return (
    <ul className="grid grid-cols-2 gap-8">
      {Array.from({ length: 4 }, (_, i) => {
        return (
          <li key={i} className="overflow-hidden rounded-xl">
            <Link href="#" className="flex h-90 flex-col">
              <div className="relative h-6/10 overflow-hidden rounded-xl">
                <Image src="/image/sample-image01.jpg" alt="sample image" fill />
              </div>
              <div className="flex h-4/10 flex-col justify-between py-4">
                {i % 2 === 0 ? (
                  <h2 className="text-lg font-bold">
                    포스트 제목 포스트 제목포스트 제목포스트 제목포스트 제목포스트 제목
                  </h2>
                ) : (
                  <h2 className="text-lg font-bold">포스트 제목</h2>
                )}

                <div>
                  <span className="text-sm">2025.10.10</span>
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
