export default function BlogPage() {
  return (
    <>
      <section className="flex h-40 items-center justify-center bg-sky-50">
        <h2>tags</h2>
      </section>
      <section className="pt-16">
        <h2>posts</h2>
        <ul className="mt-8 grid grid-cols-3 gap-4">
          <li className="outline-1 outline-dotted">
            <a href="#" className="flex h-60 w-full items-center justify-center bg-sky-50">
              post1
            </a>
          </li>
          <li className="outline-1 outline-dotted">
            <a href="#" className="flex h-60 w-full items-center justify-center bg-sky-50">
              post2
            </a>
          </li>
          <li className="outline-1 outline-dotted">
            <a href="#" className="flex h-60 w-full items-center justify-center bg-sky-50">
              post3
            </a>
          </li>
          <li className="outline-1 outline-dotted">
            <a href="#" className="flex h-60 w-full items-center justify-center bg-sky-50">
              post4
            </a>
          </li>
          <li className="outline-1 outline-dotted">
            <a href="#" className="flex h-60 w-full items-center justify-center bg-sky-50">
              post5
            </a>
          </li>
          <li className="outline-1 outline-dotted">
            <a href="#" className="flex h-60 w-full items-center justify-center bg-sky-50">
              post6
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
