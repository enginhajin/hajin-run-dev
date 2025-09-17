import { Badge } from '@/components/ui/badge';

export default async function BlogPostPage() {
  return (
    <article>
      <header className="mb-8">
        <div className="text-muted-foreground mb-2 text-sm">개발일기 • 2025-01-01</div>
        <h1 className="mb-4 text-4xl font-bold">샘플 포스트 제목</h1>
        <div className="flex flex-wrap gap-4">
          <Badge variant="secondary">Next.js</Badge>
          <Badge variant="secondary">React</Badge>
        </div>
      </header>
      <div className="prose prose-lg dark:prose-invert mb-14 h-lvh">
        여기에 Notion에서 가져온 내용이 들어갈 예정...
      </div>
      <footer className="border-t pt-8">
        <div className="text-muted-foreground text-center">이전/다음 포스트 네비게이션</div>
      </footer>
    </article>
  );
}
