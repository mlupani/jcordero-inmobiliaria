export interface Area {
  slug: string
  name: string
  description: string
  image: string
}

export const areas: Area[] = [
  {
    slug: 'gerli',
    name: 'Gerli',
    description: 'Barrio residencial, a pasos de nuestra oficina.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'avellaneda',
    name: 'Avellaneda',
    description: 'Centro, avenidas y excelente conectividad.',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'sarandi',
    name: 'Sarandí',
    description: 'Casas, PH y una vida de barrio consolidada.',
    image:
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'lanus',
    name: 'Lanús',
    description: 'Comercios, departamentos y gran movimiento.',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'villa-dominico',
    name: 'Villa Dominico',
    description: 'Zona residencial con perfil familiar.',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80'
  },
  {
    slug: 'wilde',
    name: 'Wilde',
    description: 'Propiedades sobre calles tranquilas y avenidas.',
    image:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=1200&q=80'
  }
]
