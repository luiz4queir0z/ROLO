export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  condition: 'new' | 'used';
  offerType: 'cash' | 'trade' | 'cash_or_trade';
  status: 'active' | 'temporary' | 'sold' | 'archived';
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    description: string;
  };
  images: {
    main: string;
    gallery: string[];
  };
  seller: {
    id: number;
    name: string;
    avatar: string;
  };
  location: {
    city: string;
    state: string;
  };
}

const productsData: ProductProps[] = [
  {
    id: 1,
    title: 'produto 1',
    description: 'Descrição do produto 1',
    price: 12.34,
    condition: 'used',
    offerType: 'cash',
    status: 'active',
    createdAt: '2025-11-11T21:31:00-03:00',
    updatedAt: '2025-11-11T21:31:00-03:00',

    category: {
      id: 1,
      name: 'Categoria Padrão',
      description: 'Descrição da categoria',
    },

    images: {
      main: 'https://placehold.co/160/D9D9D9/ffffff?text=PRODUCT',
      gallery: [
        'https://placehold.co/200/D9D9D9/ffffff?text=IMG1',
        'https://placehold.co/200/D9D9D9/ffffff?text=IMG2',
        'https://placehold.co/200/D9D9D9/ffffff?text=IMG3',
      ],
    },

    seller: {
      id: 1,
      name: 'John Doe',
      avatar: 'https://placehold.co/100/D1D4DA/D1D4DA',
    },

    location: {
      city: 'Paulista',
      state: 'PE',
    },
  },

  {
    id: 2,
    title: 'produto 2',
    description: 'Descrição do produto 2',
    price: 45.99,
    condition: 'used',
    offerType: 'cash',
    status: 'active',
    createdAt: '2025-09-17T15:10:00-03:00',
    updatedAt: '2025-09-17T15:10:00-03:00',

    category: {
      id: 1,
      name: 'Categoria Padrão',
      description: 'Descrição da categoria',
    },

    images: {
      main: 'https://placehold.co/160/FFD700/ffffff?text=PRODUTO+2',
      gallery: [
        'https://placehold.co/200/FFD700/ffffff?text=IMG1',
        'https://placehold.co/200/FFD700/ffffff?text=IMG2',
        'https://placehold.co/200/FFD700/ffffff?text=IMG3',
      ],
    },

    seller: {
      id: 2,
      name: 'Maria Silva',
      avatar: 'https://placehold.co/100/FFD700/D1D4DA',
    },

    location: {
      city: 'Paulista',
      state: 'PE',
    },
  },

  {
    id: 3,
    title: 'produto 3',
    description: 'Descrição do produto 3',
    price: 8.5,
    condition: 'used',
    offerType: 'cash',
    status: 'active',
    createdAt: '2025-07-04T11:45:00-03:00',
    updatedAt: '2025-07-04T11:45:00-03:00',

    category: {
      id: 1,
      name: 'Categoria Padrão',
      description: 'Descrição da categoria',
    },

    images: {
      main: 'https://placehold.co/160/87CEEB/000000?text=PRODUTO+3',
      gallery: [
        'https://placehold.co/200/87CEEB/000000?text=IMG1',
        'https://placehold.co/200/87CEEB/000000?text=IMG2',
        'https://placehold.co/200/87CEEB/000000?text=IMG3',
      ],
    },

    seller: {
      id: 3,
      name: 'Carlos Pereira',
      avatar: 'https://placehold.co/100/87CEEB/D1D4DA',
    },

    location: {
      city: 'Paulista',
      state: 'PE',
    },
  },

  {
    id: 4,
    title: 'produto 4',
    description: 'Descrição do produto 4',
    price: 23.75,
    condition: 'used',
    offerType: 'cash',
    status: 'active',
    createdAt: '2025-06-02T18:20:00-03:00',
    updatedAt: '2025-06-02T18:20:00-03:00',

    category: {
      id: 1,
      name: 'Categoria Padrão',
      description: 'Descrição da categoria',
    },

    images: {
      main: 'https://placehold.co/160x180/FF6347/FFFACD?text=PRODUTO+4',
      gallery: [
        'https://placehold.co/200/FF6347/FFFACD?text=IMG1',
        'https://placehold.co/200/FF6347/FFFACD?text=IMG2',
        'https://placehold.co/200/FF6347/FFFACD?text=IMG3',
      ],
    },

    seller: {
      id: 4,
      name: 'Ana Souza',
      avatar: 'https://placehold.co/100/FF6347/FFFACD',
    },

    location: {
      city: 'Paulista',
      state: 'PE',
    },
  },

  {
    id: 5,
    title: 'produto 5',
    description: 'Descrição do produto 5',
    price: 17.0,
    condition: 'used',
    offerType: 'cash',
    status: 'active',
    createdAt: '2025-10-15T08:50:00-03:00',
    updatedAt: '2025-10-15T08:50:00-03:00',

    category: {
      id: 1,
      name: 'Categoria Padrão',
      description: 'Descrição da categoria',
    },

    images: {
      main: 'https://placehold.co/160x180/40E0D0/ffffff?text=PRODUTO+5',
      gallery: [
        'https://placehold.co/200/40E0D0/ffffff?text=IMG1',
        'https://placehold.co/200/40E0D0/ffffff?text=IMG2',
        'https://placehold.co/200/40E0D0/ffffff?text=IMG3',
      ],
    },

    seller: {
      id: 5,
      name: 'Paulo Lima',
      avatar: 'https://placehold.co/100/40E0D0/ffffff',
    },

    location: {
      city: 'Paulista',
      state: 'PE',
    },
  },

  {
    id: 6,
    title: 'produto 6',
    description: 'Descrição do produto 6',
    price: 92.45,
    condition: 'used',
    offerType: 'cash',
    status: 'active',
    createdAt: '2025-08-28T20:05:00-03:00',
    updatedAt: '2025-08-28T20:05:00-03:00',

    category: {
      id: 1,
      name: 'Categoria Padrão',
      description: 'Descrição da categoria',
    },

    images: {
      main: 'https://placehold.co/160x180/8A2BE2/ffffff?text=PRODUTO+6',
      gallery: [
        'https://placehold.co/200/8A2BE2/ffffff?text=IMG1',
        'https://placehold.co/200/8A2BE2/ffffff?text=IMG2',
        'https://placehold.co/200/8A2BE2/ffffff?text=IMG3',
      ],
    },

    seller: {
      id: 6,
      name: 'Fernanda Costa',
      avatar: 'https://placehold.co/100/8A2BE2/ffffff',
    },

    location: {
      city: 'Paulista',
      state: 'PE',
    },
  },
];

export default productsData;
