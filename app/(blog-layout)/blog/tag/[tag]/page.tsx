import { PostList } from '@/app/(blog-layout)/_components/PostList';
import { SeriesList } from '@/app/(blog-layout)/_components/SeriesList';
import { Tags } from '@/app/(blog-layout)/_components/Tags';

interface Props {
  params: Promise<{
    tag: string;
  }>;
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;

  return (
    <>
      <section className="mb-16 flex flex-wrap gap-4">
        <Tags selectedValue={tag} />
      </section>
      <section className="mb-16">
        <h1 className="mb-8 text-2xl font-bold">{tag} 게시글</h1>
        <PostList />
      </section>
    </>
  );
}
