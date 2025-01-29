export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/Py8u8MXim4oD/${id}`
  );
  const data = await res.json();

  return (
    <div className="space-y-2 p-6">
      <h3 className="text-2xl font-semibold tracking-tight">{data.name}</h3>
      <p> {data.content}</p>
    </div>
  );
}
