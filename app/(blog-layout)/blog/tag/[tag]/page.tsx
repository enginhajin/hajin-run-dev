interface Props {
  params: {
    tag: string
  }
}

export default function TagPage({ params }: Props) {
  return (
    <div>
      <h1>태그: {params.tag}</h1>
    </div>
  )
}