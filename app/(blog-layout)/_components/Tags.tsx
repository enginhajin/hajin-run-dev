import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Props {
  selectedValue?: string;
}

export function Tags({ selectedValue }: Props) {
  return (
    <>
      {Array.from({ length: 20 }, (_, i) => {
        const tagName = `Tag${i}`;
        const isSelected = selectedValue === tagName;
        const href = isSelected ? '/blog' : `/blog/tag/${tagName}`;

        return (
          <Link href={href} key={i}>
            <Badge variant={isSelected ? 'default' : 'secondary'}>Tag{i} (0)</Badge>
          </Link>
        );
      })}
    </>
  );
}
