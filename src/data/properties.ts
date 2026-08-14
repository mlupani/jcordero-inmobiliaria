export type Operation = 'venta' | 'alquiler'
export type PropertyType = 'casa' | 'departamento' | 'ph' | 'local' | 'terreno'
export type Zone =
  | 'gerli'
  | 'avellaneda'
  | 'sarandi'
  | 'lanus'
  | 'villa-dominico'
  | 'wilde'

export interface Property {
  id: string
  slug: string
  title: string
  operation: Operation
  type: PropertyType
  address: string
  locality: string
  zone: Zone
  price: number
  currency: 'USD' | 'ARS'
  period?: 'month'
  rooms: number
  bedrooms: number
  bathrooms: number
  surface: number
  description: string
  features: string[]
  images: string[]
  featured: boolean
  coords: {
    lat: number
    lng: number
  }
}

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const properties: Property[] = [
  {
    id: '1',
    slug: 'casa-gerli-teodoro-garcia-1240',
    title: 'Casa familiar en Gerli',
    operation: 'venta',
    type: 'casa',
    address: 'Av. Teodoro García 1240',
    locality: 'Gerli, Avellaneda',
    zone: 'gerli',
    price: 89000,
    currency: 'USD',
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    surface: 145,
    description:
      'Casa familiar de amplios ambientes, con living comedor, cocina independiente, tres dormitorios, patio y terraza.',
    features: [
      'Living comedor amplio',
      'Cocina independiente',
      'Patio',
      'Terraza',
      'Tres dormitorios',
      'Buena iluminación natural'
    ],
    images: [
      img('photo-1570129477492-45c003edd2be'),
      img('photo-1600210492486-724fe5c67fb0'),
      img('photo-1554995207-c18c203602cb'),
      img('photo-1600566753190-17f0baa2a6c3')
    ],
    featured: true,
    coords: { lat: -34.6851, lng: -58.3548 }
  },
  {
    id: '2',
    slug: 'departamento-avellaneda-mitre-1850',
    title: 'Departamento de 3 ambientes en Avellaneda',
    operation: 'venta',
    type: 'departamento',
    address: 'Av. Mitre 1850',
    locality: 'Avellaneda',
    zone: 'avellaneda',
    price: 72000,
    currency: 'USD',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    surface: 68,
    description:
      'Departamento de 3 ambientes con excelente distribución, luminoso y cercano a medios de transporte y comercios.',
    features: [
      'Excelente distribución',
      'Luminoso',
      'Cercano a transporte',
      'Comercios a metros',
      'Living comedor',
      'Cocina integrada'
    ],
    images: [
      img('photo-1522708323590-d24dbb6b0267'),
      img('photo-1560448204-e02f11c3d0e2'),
      img('photo-1505691938895-1758d7feb511'),
      img('photo-1484154214962-2cf2e169bb54')
    ],
    featured: true,
    coords: { lat: -34.6632, lng: -58.3648 }
  },
  {
    id: '3',
    slug: 'ph-gerli-helguera-980',
    title: 'PH al frente en Gerli',
    operation: 'venta',
    type: 'ph',
    address: 'Helguera 980',
    locality: 'Gerli, Avellaneda',
    zone: 'gerli',
    price: 65000,
    currency: 'USD',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 1,
    surface: 82,
    description:
      'PH al frente con entrada independiente, patio y terraza propia.',
    features: [
      'Entrada independiente',
      'Patio',
      'Terraza propia',
      'Al frente',
      'Dos dormitorios',
      'Ideal primera vivienda'
    ],
    images: [
      img('photo-1568605114967-8130f3a36994'),
      img('photo-1600585154526-990dced4db0d'),
      img('photo-1560185893-a55cbc8c57bb'),
      img('photo-1600607687939-ce8a6c25118c')
    ],
    featured: true,
    coords: { lat: -34.6842, lng: -58.3521 }
  },
  {
    id: '4',
    slug: 'casa-sarandi-lacarra-1450',
    title: 'Casa con patio en Sarandí',
    operation: 'venta',
    type: 'casa',
    address: 'Lacarra 1450',
    locality: 'Sarandí, Avellaneda',
    zone: 'sarandi',
    price: 98000,
    currency: 'USD',
    rooms: 4,
    bedrooms: 3,
    bathrooms: 2,
    surface: 160,
    description:
      'Casa familiar con jardín, patio, cochera y amplios espacios interiores.',
    features: [
      'Jardín',
      'Patio',
      'Cochera',
      'Amplios interiores',
      'Tres dormitorios',
      'Dos baños'
    ],
    images: [
      img('photo-1605146769289-440113cc3d00'),
      img('photo-1600047509807-ba8f99d2cdbc'),
      img('photo-1600566753086-00f18fb6b3ea'),
      img('photo-1618221195710-dd6b41faaea6')
    ],
    featured: true,
    coords: { lat: -34.6798, lng: -58.3462 }
  },
  {
    id: '5',
    slug: 'departamento-lanus-yrigoyen-3200',
    title: 'Departamento moderno en Lanús',
    operation: 'venta',
    type: 'departamento',
    address: 'Hipólito Yrigoyen 3200',
    locality: 'Lanús',
    zone: 'lanus',
    price: 110000,
    currency: 'USD',
    rooms: 3,
    bedrooms: 2,
    bathrooms: 2,
    surface: 78,
    description:
      'Departamento moderno, luminoso y con excelente ubicación.',
    features: [
      'Edificio moderno',
      'Muy luminoso',
      'Dos baños',
      'Excelente ubicación',
      'Living amplio',
      'Cercano a avenida'
    ],
    images: [
      img('photo-1502672260266-1c1ef2d93688'),
      img('photo-1493809842364-78817add7ffb'),
      img('photo-1556020685-ae41abfc9365'),
      img('photo-1631889993959-41b4e9c6e3c5')
    ],
    featured: true,
    coords: { lat: -34.7068, lng: -58.3904 }
  },
  {
    id: '6',
    slug: 'casa-gerli-campichuelo-850',
    title: 'Amplia casa familiar en Gerli',
    operation: 'venta',
    type: 'casa',
    address: 'Campichuelo 850',
    locality: 'Gerli, Avellaneda',
    zone: 'gerli',
    price: 120000,
    currency: 'USD',
    rooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    surface: 190,
    description:
      'Amplia propiedad familiar con cochera, patio, quincho y terraza.',
    features: [
      'Cochera',
      'Patio',
      'Quincho',
      'Terraza',
      'Cinco ambientes',
      'Ideal familia grande'
    ],
    images: [
      img('photo-1583608205776-bfd35f0d9f83'),
      img('photo-1600585154340-be6161a56a0c'),
      img('photo-1600210492493-0945399458c0'),
      img('photo-1560185007-cde436f6a4d0')
    ],
    featured: true,
    coords: { lat: -34.6864, lng: -58.3512 }
  },
  {
    id: '7',
    slug: 'ph-gerli-arenales-1420',
    title: 'PH cómodo en Gerli',
    operation: 'venta',
    type: 'ph',
    address: 'Arenales 1420',
    locality: 'Gerli, Avellaneda',
    zone: 'gerli',
    price: 58000,
    currency: 'USD',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    surface: 55,
    description:
      'PH cómodo y funcional, ideal para primera vivienda o inversión.',
    features: [
      'Ideal primera vivienda',
      'Buena inversión',
      'Funcional',
      'Bajas expensas',
      'Un dormitorio',
      'Barrio residencial'
    ],
    images: [
      img('photo-1572120360610-d971b9d7767c'),
      img('photo-1502672023488-70e19990d340'),
      img('photo-1595526114035-0d45ed16cfbf'),
      img('photo-1556912173-3bb406ef7e77')
    ],
    featured: false,
    coords: { lat: -34.6836, lng: -58.3559 }
  },
  {
    id: '8',
    slug: 'departamento-gerli-varela-1780',
    title: 'Departamento de 2 ambientes en alquiler',
    operation: 'alquiler',
    type: 'departamento',
    address: 'Florencio Varela 1780',
    locality: 'Gerli, Avellaneda',
    zone: 'gerli',
    price: 650000,
    currency: 'ARS',
    period: 'month',
    rooms: 2,
    bedrooms: 1,
    bathrooms: 1,
    surface: 48,
    description:
      'Departamento luminoso de 2 ambientes, ubicado cerca de comercios y transporte.',
    features: [
      'Luminoso',
      'Cerca de comercios',
      'Cerca de transporte',
      'Dos ambientes',
      'Listo para habitar',
      'Zona residencial'
    ],
    images: [
      img('photo-1560448204-603b3fc33ddc'),
      img('photo-1536376072261-38c75010dc6a'),
      img('photo-1616594038041-c1c412dfba95'),
      img('photo-1552321554-5fefe8c9ef14')
    ],
    featured: false,
    coords: { lat: -34.6849, lng: -58.3504 }
  },
  {
    id: '9',
    slug: 'casa-gerli-de-la-serna-1050',
    title: 'Amplia casa familiar con jardín',
    operation: 'venta',
    type: 'casa',
    address: 'De la Serna 1050',
    locality: 'Gerli, Avellaneda',
    zone: 'gerli',
    price: 135000,
    currency: 'USD',
    rooms: 5,
    bedrooms: 4,
    bathrooms: 2,
    surface: 210,
    description:
      'Amplia casa familiar con jardín, cochera para dos vehículos y terraza.',
    features: [
      'Jardín',
      'Cochera doble',
      'Terraza',
      'Cuatro dormitorios',
      'Dos baños',
      'Espacios amplios'
    ],
    images: [
      img('photo-1592595896551-12b371d546d5'),
      img('photo-1600607687644-c7171b42498f'),
      img('photo-1600573472592-401b489a3cdc'),
      img('photo-1583847268964-b28dc8f51f92')
    ],
    featured: false,
    coords: { lat: -34.6872, lng: -58.3566 }
  },
  {
    id: '10',
    slug: 'local-avellaneda-pavon-2100',
    title: 'Local comercial sobre avenida',
    operation: 'venta',
    type: 'local',
    address: 'Av. Pavón 2100',
    locality: 'Avellaneda',
    zone: 'avellaneda',
    price: 95000,
    currency: 'USD',
    rooms: 3,
    bedrooms: 0,
    bathrooms: 1,
    surface: 90,
    description:
      'Local comercial sobre avenida de alto tránsito, ideal para comercio o inversión.',
    features: [
      'Sobre avenida',
      'Alto tránsito',
      'Vidriera a la calle',
      'Ideal comercio',
      'Buena inversión',
      '90 m² cubiertos'
    ],
    images: [
      img('photo-1441986300917-64674bd600d8'),
      img('photo-1445116572660-236099ec97a0'),
      img('photo-1604014237800-1d155d536b27'),
      img('photo-1556742049-0cfed4f6a45d')
    ],
    featured: false,
    coords: { lat: -34.6658, lng: -58.3672 }
  }
]

export const heroImage = img('photo-1600585154340-be6161a56a0c', 2400)

export const valuationImage = img('photo-1600047509807-ba8f99d2cdbc', 1800)

export const aboutImage = img('photo-1600210492486-724fe5c67fb0', 1600)
