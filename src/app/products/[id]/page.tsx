'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, customizationOptions } from '@/lib/data/products';
import { useCart } from '@/lib/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Star, ShoppingCart, Heart, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);
  const customizations = customizationOptions[resolvedParams.id] || [];
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [customizationData, setCustomizationData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!product) {
    notFound();
  }

  const handleCustomizationChange = (id: string, value: string) => {
    setCustomizationData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateCustomizations = () => {
    const newErrors: Record<string, string> = {};
    customizations.forEach(option => {
      if (option.required && !customizationData[option.id]) {
        newErrors[option.id] = `${option.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddToCart = () => {
    if (customizations.length > 0 && !validateCustomizations()) {
      toast.error('Please fill in all required fields');
      return;
    }

    addToCart(product, quantity, customizations.length > 0 ? customizationData : undefined);
    toast.success(`${product.name} added to cart!`);
  };

  const totalPrice = product.basePrice * quantity;

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.featured && (
              <div className="absolute top-4 left-4">
                <span className="badge bg-primary text-primary-foreground">Featured</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {product.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-muted rounded-full capitalize">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Product Info & Customization */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>

            {product.rating && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-secondary text-secondary'
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            )}

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="border-t border-b py-4">
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">Starting at</span>
              <span className="price-tag">${product.basePrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Customization Options */}
          {customizations.length > 0 && (
            <div className="space-y-4 border-t pt-6">
              <h3 className="text-xl font-semibold">Customize Your Order</h3>

              {customizations.map(option => (
                <div key={option.id} className="space-y-2">
                  <Label htmlFor={option.id} className="flex items-center gap-2">
                    {option.label}
                    {option.required && <span className="text-destructive">*</span>}
                    {option.priceModifier && option.priceModifier > 0 && (
                      <span className="text-sm text-muted-foreground">
                        (+${option.priceModifier})
                      </span>
                    )}
                  </Label>

                  {option.type === 'select' && (
                    <Select
                      value={customizationData[option.id] || ''}
                      onValueChange={(value) => handleCustomizationChange(option.id, value)}
                    >
                      <SelectTrigger id={option.id} className={errors[option.id] ? 'border-destructive' : ''}>
                        <SelectValue placeholder={`Select ${option.label.toLowerCase()}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {option.options?.map(opt => (
                          <SelectItem key={opt} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  {option.type === 'text' && (
                    <Input
                      id={option.id}
                      type="text"
                      placeholder={option.placeholder}
                      value={customizationData[option.id] || ''}
                      onChange={(e) => handleCustomizationChange(option.id, e.target.value)}
                      className={errors[option.id] ? 'border-destructive' : ''}
                    />
                  )}

                  {option.type === 'textarea' && (
                    <Textarea
                      id={option.id}
                      placeholder={option.placeholder}
                      value={customizationData[option.id] || ''}
                      onChange={(e) => handleCustomizationChange(option.id, e.target.value)}
                      className={errors[option.id] ? 'border-destructive' : ''}
                      rows={4}
                    />
                  )}

                  {option.type === 'date' && (
                    <Input
                      id={option.id}
                      type="date"
                      value={customizationData[option.id] || ''}
                      onChange={(e) => handleCustomizationChange(option.id, e.target.value)}
                      className={errors[option.id] ? 'border-destructive' : ''}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  )}

                  {option.type === 'number' && (
                    <Input
                      id={option.id}
                      type="number"
                      placeholder={option.placeholder}
                      value={customizationData[option.id] || ''}
                      onChange={(e) => handleCustomizationChange(option.id, e.target.value)}
                      className={errors[option.id] ? 'border-destructive' : ''}
                      min="1"
                    />
                  )}

                  {errors[option.id] && (
                    <p className="text-sm text-destructive">{errors[option.id]}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="space-y-4 border-t pt-6">
            <div className="flex items-center gap-4">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  -
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center"
                  min="1"
                  disabled={!product.inStock}
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!product.inStock}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xl font-bold">
              <span>Total:</span>
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </div>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 gap-2"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-3 text-sm text-muted-foreground border-t pt-6">
            <p>✓ Fresh ingredients and premium quality</p>
            <p>✓ On-time delivery guaranteed</p>
            <p>✓ Custom message included</p>
            <p>✓ Satisfaction guaranteed or money back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
