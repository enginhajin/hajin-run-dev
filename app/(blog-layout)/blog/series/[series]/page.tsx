interface Props {
  params: {
    series: string;
  };
}

export default function SeriesPage({ params }: Props) {
  return (
    <div>
      <h1>시리즈: {params.series}</h1>
    </div>
  );
}
