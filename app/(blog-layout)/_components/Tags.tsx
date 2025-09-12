import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function Tags() {
  return (
    <>
      {Array.from({ length: 20 }, (_, i) => (
        <Link href="#" key={i}>
          <Badge variant="secondary">Tag{i + 1} (0)</Badge>
        </Link>
      ))}
    </>
  );
}
