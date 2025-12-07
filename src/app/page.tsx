import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/product-card';
import { getFeaturedProducts } from '@/lib/data/products';
import { Cake, Gift, Sparkles, TrendingUp, Award, Clock } from 'lucide-react';

const categories = [
  {
    name: 'Birthday Celebrations',
    description: 'Custom cakes & party supplies',
    icon: Cake,
    href: '/categories/birthday',
    color: 'bg-pink-50 text-pink-600 hover:bg-pink-100'
  },
  {
    name: 'Wedding Essentials',
    description: 'Elegant cakes & gift sets',
    icon: Sparkles,
    href: '/categories/wedding',
    color: 'bg-purple-50 text-purple-600 hover:bg-purple-100'
  },
  {
    name: 'Corporate Events',
    description: 'Branded gifts & catering',
    icon: TrendingUp,
    href: '/categories/corporate',
    color: 'bg-blue-50 text-blue-600 hover:bg-blue-100'
  },
  {
    name: 'Gift Collections',
    description: 'Premium hampers & boxes',
    icon: Gift,
    href: '/categories/gifts',
    color: 'bg-amber-50 text-amber-600 hover:bg-amber-100'
  }
];

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Handcrafted with finest ingredients'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Scheduled delivery for your event'
  },
  {
    icon: Sparkles,
    title: 'Full Customization',
    description: 'Personalize every detail'
  }
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 gradient-celebration text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Make Every Celebration Unforgettable
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Custom cakes, premium gifts, and party supplies for all your special moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link href="#featured">Shop Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 border-white text-white hover:bg-white/20">
                <Link href="/categories/cakes">Custom Cakes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Occasion</h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect celebration essentials for any event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group"
                >
                  <div className="bg-card border rounded-lg p-6 hover:shadow-md transition-all hover:-translate-y-1">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 transition-colors`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Our most popular celebration essentials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/categories/all">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-gold">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Planning a Special Event?
            </h2>
            <p className="text-lg text-foreground/80">
              Let us help you create memorable moments with our custom cakes, gift collections, and decoration packages tailored to your celebration.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
