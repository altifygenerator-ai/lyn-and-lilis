export default function SeoJsonLd({ data }: { data: any | any[] }) {
  const items = Array.isArray(data) ? data.filter(Boolean) : [data].filter(Boolean);

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}