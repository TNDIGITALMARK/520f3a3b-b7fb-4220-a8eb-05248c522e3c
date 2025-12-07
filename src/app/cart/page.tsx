'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Trash2, ArrowLeft, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();

  const subtotal = total;
  const tax = subtotal * 0.1; // 10% tax
  const deliveryFee = subtotal >= 50 ? 0 : 10;
  const finalTotal = subtotal + tax + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="container py-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="mx-auto w-24 h-24 rounded-full bg-muted flex items-center justify-center">
            <ShoppingBag className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <p className="text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet. Start shopping to create your perfect celebration!
          </p>
          <Button size="lg" asChild>
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="bg-card border rounded-lg p-4 md:p-6">
              <div className="flex gap-4">
                {/* Product Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="128px"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link href={`/products/${item.product.id}`}>
                        <h3 className="font-semibold text-lg hover:text-primary transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.product.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Customizations */}
                  {item.customizations && Object.keys(item.customizations).length > 0 && (
                    <div className="text-sm text-muted-foreground space-y-1">
                      {Object.entries(item.customizations).map(([key, value]) => (
                        <div key={key} className="flex gap-2">
                          <span className="font-medium capitalize">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                        className="w-16 text-center"
                        min="1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">
                        ${item.totalPrice.toFixed(2)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ${item.product.basePrice.toFixed(2)} each
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card border rounded-lg p-6 sticky top-20 space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>

            <Separator />

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal ({itemCount} items)</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax (10%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-medium">
                  {deliveryFee === 0 ? (
                    <span className="text-success">FREE</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>

              {deliveryFee > 0 && subtotal < 50 && (
                <p className="text-xs text-muted-foreground">
                  Add ${(50 - subtotal).toFixed(2)} more for free delivery!
                </p>
              )}
            </div>

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">${finalTotal.toFixed(2)}</span>
            </div>

            <Button size="lg" className="w-full gap-2" asChild>
              <Link href="/checkout">
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <div className="space-y-2 text-sm text-muted-foreground pt-4 border-t">
              <p>✓ Secure checkout</p>
              <p>✓ Free delivery on orders over $50</p>
              <p>✓ Same-day delivery available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
