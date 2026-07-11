type JsonLdItem = Record<string, unknown> | null | undefined | false;

export default function SeoJsonLd({ data }: { data: JsonLdItem | JsonLdItem[] }) {
  const items = Array.isArray(data) ? data.filter(Boolean) : [data].filter(Boolean);

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
