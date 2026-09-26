import { ImageResponse } from 'next/og'
import { site } from '@/constants/site'

export const alt = `${site.name} - ${site.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#050311',
        color: '#f8f8f6',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          width: 96,
          height: 8,
          borderRadius: 4,
          background: '#496ebc',
          marginBottom: 40,
        }}
      />
      <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>
        {site.name}
      </div>
      <div style={{ fontSize: 48, color: '#8a9bd6', marginTop: 16 }}>
        {site.jobTitle}
      </div>
      <div
        style={{
          fontSize: 30,
          color: '#b8b8c8',
          marginTop: 48,
          maxWidth: 900,
          lineHeight: 1.4,
        }}
      >
        TypeScript · React · React Native · Next.js
      </div>
    </div>,
    size,
  )
}
