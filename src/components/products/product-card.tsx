'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/lib/context/cart-context';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.customizable) {
      // Redirect to product page for customization
      window.location.href = `/products/${product.id}`;
    } else {
      addToCart(product, 1);
      toast.success(`${product.name} added to cart!`);
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="product-card group">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.featured && (
            <div className="absolute top-3 left-3">
              <span className="badge bg-primary text-primary-foreground">Featured</span>
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          {product.rating && (
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                <span className="font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.reviewCount} reviews)
              </span>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <span className="text-sm text-muted-foreground">Starting at</span>
              <div className="price-tag">${product.basePrice.toFixed(2)}</div>
            </div>

            {product.inStock && (
              <Button
                size="sm"
                onClick={handleQuickAdd}
                className="gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                {product.customizable ? 'Customize' : 'Add'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
