interface Props {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: Props) {
  return (
    <div>
      <h1>블로그 포스트</h1>
      <p>Slug: {params.slug}</p>
    </div>
  )
}