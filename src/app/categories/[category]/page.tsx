'use client';

import { use } from 'react';
import Link from 'next/link';
import { getCategoryProducts } from '@/lib/data/products';
import { ProductCard } from '@/components/products/product-card';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ category: string }>;
}

const categoryTitles: Record<string, string> = {
  birthday: 'Birthday Celebrations',
  wedding: 'Wedding Essentials',
  corporate: 'Corporate Events',
  seasonal: 'Seasonal Celebrations',
  cakes: 'Custom Cakes',
  gifts: 'Gift Collections',
  decorations: 'Party Decorations',
  all: 'All Products'
};

const categoryDescriptions: Record<string, string> = {
  birthday: 'Make birthdays unforgettable with our custom cakes and party supplies',
  wedding: 'Elegant wedding cakes and premium gift sets for your special day',
  corporate: 'Professional gift boxes and catering solutions for corporate events',
  seasonal: 'Celebrate every season with our themed decorations and treats',
  cakes: 'Custom cakes for every occasion, crafted with love and premium ingredients',
  gifts: 'Curated gift collections perfect for any celebration',
  decorations: 'Transform your venue with our beautiful party decoration packages',
  all: 'Browse our complete collection of celebration essentials'
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const category = resolvedParams.category;
  const products = category === 'all'
    ? require('@/lib/data/products').products
    : getCategoryProducts(category);

  const title = categoryTitles[category] || 'Products';
  const description = categoryDescriptions[category] || '';

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Category Header */}
      <div className="mb-12 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>{products.length} products</span>
        </div>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No products found in this category.
          </p>
          <Link href="/" className="text-primary hover:underline mt-4 inline-block">
            Browse all products
          </Link>
        </div>
      )}
    </div>
  );
}
