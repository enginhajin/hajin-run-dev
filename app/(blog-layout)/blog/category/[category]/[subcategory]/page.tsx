interface Props {
  params: {
    category: string
    subcategory: string
  }
}

export default function SubcategoryPage({ params }: Props) {
  return (
    <div>
      <h1>카테고리: {params.category}</h1>
      <h2>서브카테고리: {params.subcategory}</h2>
    </div>
  )
}