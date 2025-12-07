export type Category =
  | 'birthday'
  | 'wedding'
  | 'corporate'
  | 'seasonal'
  | 'cakes'
  | 'gifts'
  | 'decorations';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  basePrice: number;
  image: string;
  featured: boolean;
  inStock: boolean;
  customizable: boolean;
  tags: string[];
  rating?: number;
  reviewCount?: number;
}

export interface CustomizationOption {
  id: string;
  name: string;
  type: 'select' | 'text' | 'textarea' | 'date' | 'number';
  required: boolean;
  options?: string[];
  priceModifier?: number;
  label: string;
  placeholder?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: Record<string, string>;
  totalPrice: number;
}

export interface DeliverySlot {
  id: string;
  date: string;
  timeRange: string;
  available: boolean;
}

export interface OrderSummary {
  subtotal: number;
  tax: number;
  delivery: number;
  discount: number;
  total: number;
}
