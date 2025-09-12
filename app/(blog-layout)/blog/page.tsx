import { Tags } from '../_components/Tags';
import { PostList } from '../_components/PostList';
import { SeriesList } from '../_components/SeriesList';

export default function BlogPage() {
  return (
    <>
      <section className="flex flex-wrap gap-4">
        <Tags />
      </section>
      <section className="pt-16">
        <h2 className="mb-4">모든 게시글</h2>
        <PostList />
      </section>
      <section className="pt-16">
        <h2 className="mb-4">모든 시리즈</h2>
        <SeriesList />
      </section>
    </>
  );
}
