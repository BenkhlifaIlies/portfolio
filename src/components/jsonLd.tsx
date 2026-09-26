interface Props {
  data: Record<string, unknown>
}

// Structured data for search engines; `<` is escaped so content can't close the tag.
const JsonLd = ({ data }: Props) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}

export default JsonLd
