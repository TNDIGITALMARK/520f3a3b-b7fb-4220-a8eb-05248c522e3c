import Link from 'next/link';
import { Gift, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-serif font-bold text-xl">
              <Gift className="w-6 h-6 text-primary" />
              <span>FestiveGifts</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for celebration essentials. Custom cakes, gift items, and party supplies for all occasions.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categories/birthday" className="text-muted-foreground hover:text-primary transition-colors">
                  Birthday Celebrations
                </Link>
              </li>
              <li>
                <Link href="/categories/wedding" className="text-muted-foreground hover:text-primary transition-colors">
                  Wedding Essentials
                </Link>
              </li>
              <li>
                <Link href="/categories/corporate" className="text-muted-foreground hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/categories/cakes" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Cakes
                </Link>
              </li>
              <li>
                <Link href="/categories/gifts" className="text-muted-foreground hover:text-primary transition-colors">
                  Gift Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-muted-foreground hover:text-primary transition-colors">
                  Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>123 Celebration Avenue, Party City, PC 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:hello@festivegifts.com" className="hover:text-primary transition-colors">
                  hello@festivegifts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FestiveGifts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
