export interface SiteStat {
  value: string
  label: string
}

export interface NavItem {
  href: string
  label: string
}

export const site = {
  name: 'J. Cordero e Hijo',
  shortName: 'J. Cordero',
  nameLine2: 'e Hijo',
  subtitle: 'Inmobiliaria',
  zoneLabel: 'Avellaneda · Gerli · Sarandí · Lanús',
  eyebrow: 'Inmobiliaria · Avellaneda y zona sur',
  tagline: 'Encontrá el lugar donde empieza tu próxima etapa.',
  description:
    'Más de 80 años acompañando a familias en la compra, venta y alquiler de propiedades en Avellaneda y zona sur.',
  seo: {
    title: 'J. Cordero e Hijo | Inmobiliaria en Avellaneda y zona sur',
    description:
      'Inmobiliaria en Avellaneda, Gerli, Sarandí y Lanús. Compra, venta, alquiler y tasaciones de casas, departamentos y PH, con más de 80 años de trayectoria.',
    keywords: [
      'inmobiliaria Avellaneda',
      'inmobiliaria Gerli',
      'propiedades en venta Avellaneda',
      'casas en venta Gerli',
      'departamentos en alquiler zona sur',
      'tasaciones Avellaneda',
      'J. Cordero e Hijo',
      'inmobiliaria zona sur Buenos Aires'
    ]
  },
  heroDescription:
    'Compra, venta y alquiler de propiedades con el respaldo de más de 80 años de experiencia.',
  address: 'Gral. Güemes 1300, Gerli, Avellaneda',
  phones: ['4204-3307', '4204-3308'],
  email: 'corderoinmobiliaria@hotmail.com',
  whatsapp: '5491136747099',
  instagram: 'https://www.instagram.com/jcorderopropiedades/',
  facebook: 'https://www.facebook.com/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Gral.+G%C3%BCemes+1300,+Gerli,+Avellaneda',
  hours: 'Lunes a viernes de 9 a 12 y de 15 a 19 h',
  officeCoords: {
    lat: -34.6847,
    lng: -58.3536
  },
  stats: [
    { value: '+80', label: 'Años de trayectoria' },
    { value: '+1000', label: 'Operaciones acompañadas' },
    { value: '1', label: 'Compromiso con cada cliente' }
  ] satisfies SiteStat[]
}

export const navItems: NavItem[] = [
  { href: '/propiedades', label: 'Propiedades' },
  { href: '/venta', label: 'Venta' },
  { href: '/alquiler', label: 'Alquiler' },
  { href: '/tasaciones', label: 'Tasaciones' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' }
]
