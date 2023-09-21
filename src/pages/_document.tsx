import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script>
        (window.localStorage.getItem(`theme`)===`dark`)?
        document.documentElement.classList.add(`dark`):
        document.documentElement.classList.remove(`dark`)
      </script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
