import { Product, CustomizationOption } from '../types/products';

export const products: Product[] = [
  {
    id: 'cake-001',
    name: 'Chocolate Truffle Birthday Cake',
    category: 'cakes',
    description: 'Rich chocolate truffle cake with custom message and photo printing options. Perfect for birthday celebrations.',
    basePrice: 45.00,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop',
    featured: true,
    inStock: true,
    customizable: true,
    tags: ['birthday', 'chocolate', 'customizable'],
    rating: 4.8,
    reviewCount: 127
  },
  {
    id: 'cake-002',
    name: 'Elegant Three-Tier Wedding Cake',
    category: 'wedding',
    description: 'Stunning three-tier wedding cake with elegant frosting and customizable flavors. Serves 100+ guests.',
    basePrice: 250.00,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&h=800&fit=crop',
    featured: true,
    inStock: true,
    customizable: true,
    tags: ['wedding', 'elegant', 'large'],
    rating: 5.0,
    reviewCount: 89
  },
  {
    id: 'gift-001',
    name: 'Premium Gift Hamper',
    category: 'gifts',
    description: 'Curated selection of gourmet snacks, premium wine, and fresh flowers in an elegant presentation box.',
    basePrice: 85.00,
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&h=800&fit=crop',
    featured: true,
    inStock: true,
    customizable: false,
    tags: ['gift', 'premium', 'gourmet'],
    rating: 4.7,
    reviewCount: 203
  },
  {
    id: 'gift-002',
    name: 'Corporate Welcome Box',
    category: 'corporate',
    description: 'Professional gift box with branded items, local treats, and personalized welcome card.',
    basePrice: 65.00,
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: true,
    tags: ['corporate', 'branded', 'welcome'],
    rating: 4.6,
    reviewCount: 156
  },
  {
    id: 'decor-001',
    name: 'Party Decoration Package',
    category: 'decorations',
    description: 'Complete party decoration set with balloon arrangements, table settings, and themed accessories.',
    basePrice: 120.00,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: true,
    tags: ['decorations', 'balloons', 'party'],
    rating: 4.5,
    reviewCount: 98
  },
  {
    id: 'cake-003',
    name: 'Red Velvet Celebration Cake',
    category: 'birthday',
    description: 'Classic red velvet cake with cream cheese frosting. Available with custom text and decorations.',
    basePrice: 55.00,
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: true,
    tags: ['birthday', 'red-velvet', 'classic'],
    rating: 4.9,
    reviewCount: 241
  },
  {
    id: 'gift-003',
    name: 'Seasonal Gift Collection',
    category: 'seasonal',
    description: 'Holiday-themed gift collection featuring seasonal treats, decorations, and specialty items.',
    basePrice: 75.00,
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: false,
    tags: ['seasonal', 'holiday', 'gift'],
    rating: 4.6,
    reviewCount: 134
  },
  {
    id: 'cake-004',
    name: 'Custom Photo Cake',
    category: 'birthday',
    description: 'Personalized cake with edible photo print. Choose your favorite photo and cake flavor.',
    basePrice: 60.00,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=800&fit=crop',
    featured: true,
    inStock: true,
    customizable: true,
    tags: ['birthday', 'photo', 'personalized'],
    rating: 4.7,
    reviewCount: 178
  },
  {
    id: 'decor-002',
    name: 'Balloon Arch Kit',
    category: 'decorations',
    description: 'DIY balloon arch kit with all materials included. Multiple color schemes available.',
    basePrice: 45.00,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: true,
    tags: ['decorations', 'balloons', 'diy'],
    rating: 4.4,
    reviewCount: 89
  },
  {
    id: 'gift-004',
    name: 'Luxury Chocolate Box',
    category: 'gifts',
    description: 'Handcrafted artisan chocolates in a premium gift box. Perfect for any celebration.',
    basePrice: 40.00,
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: false,
    tags: ['gift', 'chocolate', 'luxury'],
    rating: 4.8,
    reviewCount: 312
  },
  {
    id: 'cake-005',
    name: 'Vanilla Bean Layer Cake',
    category: 'cakes',
    description: 'Light and fluffy vanilla bean cake with buttercream frosting. Classic celebration choice.',
    basePrice: 50.00,
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: true,
    tags: ['birthday', 'vanilla', 'classic'],
    rating: 4.6,
    reviewCount: 195
  },
  {
    id: 'corp-001',
    name: 'Corporate Event Catering Package',
    category: 'corporate',
    description: 'Complete catering solution for corporate events with appetizers, main courses, and desserts.',
    basePrice: 450.00,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=800&fit=crop',
    featured: false,
    inStock: true,
    customizable: true,
    tags: ['corporate', 'catering', 'large'],
    rating: 4.9,
    reviewCount: 67
  }
];

export const customizationOptions: Record<string, CustomizationOption[]> = {
  'cake-001': [
    {
      id: 'flavor',
      name: 'flavor',
      type: 'select',
      required: true,
      options: ['Chocolate Truffle', 'Dark Chocolate', 'Milk Chocolate', 'White Chocolate'],
      label: 'Cake Flavor',
      priceModifier: 0
    },
    {
      id: 'size',
      name: 'size',
      type: 'select',
      required: true,
      options: ['6 inch (Serves 6-8)', '8 inch (Serves 12-15)', '10 inch (Serves 20-25)'],
      label: 'Cake Size',
      priceModifier: 0
    },
    {
      id: 'message',
      name: 'message',
      type: 'text',
      required: false,
      label: 'Custom Message',
      placeholder: 'Happy Birthday!'
    },
    {
      id: 'photoUpload',
      name: 'photoUpload',
      type: 'text',
      required: false,
      label: 'Photo Print (provide URL)',
      placeholder: 'https://...',
      priceModifier: 10
    },
    {
      id: 'deliveryDate',
      name: 'deliveryDate',
      type: 'date',
      required: true,
      label: 'Delivery Date'
    },
    {
      id: 'specialInstructions',
      name: 'specialInstructions',
      type: 'textarea',
      required: false,
      label: 'Special Instructions',
      placeholder: 'Any dietary restrictions or special requests...'
    }
  ],
  'cake-002': [
    {
      id: 'tierFlavors',
      name: 'tierFlavors',
      type: 'textarea',
      required: true,
      label: 'Flavor for Each Tier',
      placeholder: 'Top: Vanilla, Middle: Chocolate, Bottom: Red Velvet'
    },
    {
      id: 'frosting',
      name: 'frosting',
      type: 'select',
      required: true,
      options: ['Buttercream', 'Fondant', 'Whipped Cream', 'Cream Cheese'],
      label: 'Frosting Type'
    },
    {
      id: 'decorations',
      name: 'decorations',
      type: 'textarea',
      required: false,
      label: 'Decoration Preferences',
      placeholder: 'Describe your decoration preferences...'
    },
    {
      id: 'deliveryDateTime',
      name: 'deliveryDateTime',
      type: 'date',
      required: true,
      label: 'Event Date'
    }
  ],
  'gift-002': [
    {
      id: 'companyName',
      name: 'companyName',
      type: 'text',
      required: true,
      label: 'Company Name',
      placeholder: 'Your Company Name'
    },
    {
      id: 'recipientName',
      name: 'recipientName',
      type: 'text',
      required: true,
      label: 'Recipient Name',
      placeholder: 'Employee Name'
    },
    {
      id: 'customMessage',
      name: 'customMessage',
      type: 'textarea',
      required: false,
      label: 'Welcome Message',
      placeholder: 'Write your welcome message...'
    }
  ],
  'decor-001': [
    {
      id: 'theme',
      name: 'theme',
      type: 'select',
      required: true,
      options: ['Birthday Party', 'Wedding', 'Corporate Event', 'Baby Shower', 'Anniversary'],
      label: 'Event Theme'
    },
    {
      id: 'colorScheme',
      name: 'colorScheme',
      type: 'select',
      required: true,
      options: ['Gold & White', 'Pink & Gold', 'Blue & Silver', 'Rainbow', 'Black & Gold', 'Custom'],
      label: 'Color Scheme'
    },
    {
      id: 'guestCount',
      name: 'guestCount',
      type: 'number',
      required: true,
      label: 'Expected Guest Count'
    }
  ]
};

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (category: string) =>
  products.filter(p => p.category === category);

export const getProductById = (id: string) =>
  products.find(p => p.id === id);

export const getCategoryProducts = (category: string) =>
  products.filter(p => p.category === category || p.tags.includes(category));
