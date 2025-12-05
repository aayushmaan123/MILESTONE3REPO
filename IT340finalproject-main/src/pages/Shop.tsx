import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Filter, ChevronDown } from 'lucide-react';

import sneaker1 from '@/assets/sneaker-1.jpg';
import sneaker2 from '@/assets/sneaker-2.jpg';
import sneaker3 from '@/assets/sneaker-3.jpg';
import sneaker4 from '@/assets/sneaker-4.jpg';
import sneaker5 from '@/assets/sneaker-5.jpg';
import sneaker6 from '@/assets/sneaker-6.jpg';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  tag?: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Sky Force Elite',
    description: 'Premium comfort meets street style',
    price: '$189',
    image: sneaker1,
    tag: 'New',
    category: 'Running',
  },
  {
    id: 2,
    name: 'Velocity Pro',
    description: 'Engineered for peak performance',
    price: '$159',
    image: sneaker2,
    tag: 'Popular',
    category: 'Athletic',
  },
  {
    id: 3,
    name: 'Cloud Walker',
    description: 'Walk on clouds, look like fire',
    price: '$229',
    image: sneaker3,
    tag: 'Limited',
    category: 'Lifestyle',
  },
  {
    id: 4,
    name: 'Retro Legend',
    description: 'Classic design, modern comfort',
    price: '$149',
    originalPrice: '$199',
    image: sneaker4,
    tag: 'Sale',
    category: 'Retro',
  },
  {
    id: 5,
    name: 'Tech Runner',
    description: 'Future-forward technology',
    price: '$249',
    image: sneaker5,
    tag: 'New',
    category: 'Running',
  },
  {
    id: 6,
    name: 'Classic Luxe',
    description: 'Timeless elegance redefined',
    price: '$179',
    image: sneaker6,
    tag: 'Popular',
    category: 'Lifestyle',
  },
  {
    id: 7,
    name: 'Urban Street',
    description: 'Own the streets in style',
    price: '$169',
    image: sneaker1,
    category: 'Lifestyle',
  },
  {
    id: 8,
    name: 'Sprint Master',
    description: 'Built for speed and agility',
    price: '$199',
    image: sneaker2,
    category: 'Athletic',
  },
];

const categories = ['All', 'Running', 'Athletic', 'Lifestyle', 'Retro'];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="pt-24 pb-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6">
              Shop All
            </h1>
            <p className="text-xl font-light text-muted-foreground mb-8">
              Discover our complete collection of premium sneakers. From street style to athletic performance, find your perfect pair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <div className="hidden md:flex items-center gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === 'All' ? 'default' : 'ghost'}
                    size="sm"
                    className="font-light"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 font-light">
              Sort by: Featured
              <ChevronDown className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card className="group bg-card border-border hover:border-foreground/20 transition-all duration-200 overflow-hidden h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative overflow-hidden">
                      {product.tag && (
                        <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded text-xs font-normal ${
                          product.tag === 'Sale' 
                            ? 'bg-red-500 text-white' 
                            : 'bg-foreground text-background'
                        }`}>
                          {product.tag}
                        </div>
                      )}
                      <div className="aspect-square overflow-hidden bg-gradient-card">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs text-muted-foreground mb-1">{product.category}</span>
                      <h3 className="text-lg font-normal mb-1 tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-light">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-secondary transition-all duration-200"
                          aria-label={`Add ${product.name} to cart`}
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="font-light px-8"
            >
              Load More Products
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
