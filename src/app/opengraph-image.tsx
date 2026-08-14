import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

/* eslint-disable @next/next/no-img-element */

export const alt = `${site.name} · ${site.subtitle} en Avellaneda y zona sur`
export const size = {
  width: 1200,
  height: 630
}
export const contentType = 'image/png'

export default async function OpenGraphImage () {
  const logo = await readFile(join(process.cwd(), 'public/images/logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0b0b',
          color: '#f6f3ed'
        }}
      >
        <img
          src={logoSrc}
          alt={site.name}
          width={620}
          height={298}
          style={{ marginBottom: 28 }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            letterSpacing: 8,
            color: '#c4a06a',
            textTransform: 'uppercase'
          }}
        >
          Inmobiliaria
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 14,
            fontSize: 28,
            color: '#d4c8b8'
          }}
        >
          Avellaneda · Gerli · Sarandí · Lanús
        </div>
      </div>
    ),
    { ...size }
  )
}
