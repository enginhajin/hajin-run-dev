import { Tags } from '../_components/Tags';
import { PostList } from '../_components/PostList';

export default function BlogPage() {
  return (
    <>
      <section className="mb-16 flex flex-wrap gap-4">
        <Tags />
      </section>
      <section>
        <h1 className="mb-8 text-2xl font-bold">모든 게시글</h1>
        <PostList />
      </section>
    </>
  );
}
