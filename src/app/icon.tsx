import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

/* eslint-disable @next/next/no-img-element */

export const size = {
  width: 512,
  height: 512
}
export const contentType = 'image/png'

export default async function Icon () {
  const logo = await readFile(join(process.cwd(), 'public/images/logo.png'))
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0b0b'
        }}
      >
        <img src={logoSrc} alt={site.name} width={480} height={231} />
      </div>
    ),
    { ...size }
  )
}
