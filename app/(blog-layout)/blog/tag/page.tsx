import { Tags } from '../../_components/Tags';

interface Props {
  params: {
    tag: string;
  };
}

export default function BlogTagPage({ params }: Props) {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold">태그</h1>
      <section className="mb-16 flex flex-wrap gap-4">
        <Tags selectedValue={params.tag} />
      </section>
    </div>
  );
}
