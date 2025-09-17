import { PostList } from '@/app/(blog-layout)/_components/PostList';

interface Props {
  params: Promise<{
    series: string;
  }>;
}

export default async function SeriesPage({ params }: Props) {
  const { series } = await params;

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">{series} 시리즈</h1>
      <PostList />
    </div>
  );
}
