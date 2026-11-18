// Structured data (schema.org JSON-LD) that search engines read to understand a page: the site's
// name and search box, breadcrumb trails, and articles. `<` is escaped so text from the
// catalog or a post can never close the script tag.
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
