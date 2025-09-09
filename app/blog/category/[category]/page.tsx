interface Props {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: Props) {
  return (
    <div>
      <h1>카테고리: {params.category}</h1>
    </div>
  )
}