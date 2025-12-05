import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

import sneaker1 from '@/assets/sneaker-1.jpg';
import sneaker2 from '@/assets/sneaker-2.jpg';
import sneaker3 from '@/assets/sneaker-3.jpg';
import sneaker4 from '@/assets/sneaker-4.jpg';
import sneaker5 from '@/assets/sneaker-5.jpg';
import sneaker6 from '@/assets/sneaker-6.jpg';

interface Collection {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
  link: string;
}

const collections: Collection[] = [
  {
    id: 1,
    name: 'New Arrivals',
    subtitle: 'Fresh Drops',
    description: 'Be the first to rock the latest releases. Our newest additions feature cutting-edge designs and premium materials.',
    image: sneaker1,
    itemCount: 24,
    link: '/shop?collection=new',
  },
  {
    id: 2,
    name: 'Street Essentials',
    subtitle: 'Urban Culture',
    description: 'Curated picks for the streets. Bold statements and iconic silhouettes that define urban fashion.',
    image: sneaker2,
    itemCount: 18,
    link: '/shop?collection=street',
  },
  {
    id: 3,
    name: 'Performance Pro',
    subtitle: 'Athletic Excellence',
    description: 'Engineered for athletes. Maximum performance meets innovative technology for every sport.',
    image: sneaker3,
    itemCount: 32,
    link: '/shop?collection=performance',
  },
  {
    id: 4,
    name: 'Retro Classics',
    subtitle: 'Timeless Icons',
    description: 'Legendary styles that never fade. Vintage-inspired designs with modern comfort technology.',
    image: sneaker4,
    itemCount: 15,
    link: '/shop?collection=retro',
  },
  {
    id: 5,
    name: 'Limited Edition',
    subtitle: 'Exclusive Drops',
    description: 'Rare finds and collaborations. Limited quantities, unlimited style for the true collectors.',
    image: sneaker5,
    itemCount: 8,
    link: '/shop?collection=limited',
  },
  {
    id: 6,
    name: 'Sale Collection',
    subtitle: 'Best Deals',
    description: 'Premium sneakers at unbeatable prices. Quality never goes on sale, but our prices do.',
    image: sneaker6,
    itemCount: 42,
    link: '/shop?collection=sale',
  },
];

const Collection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm font-light text-muted-foreground tracking-widest uppercase mb-4 block"
            >
              Explore Our World
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6">
              Collections
            </h1>
            <p className="text-xl font-light text-muted-foreground">
              Curated selections for every style, occasion, and passion. Find the collection that speaks to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={collection.link} className="group block">
                  <div className="relative overflow-hidden rounded-lg bg-card border border-border hover:border-foreground/20 transition-all duration-300">
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <span className="text-xs font-light text-muted-foreground tracking-widest uppercase mb-2">
                          {collection.subtitle}
                        </span>
                        <h2 className="text-2xl md:text-3xl font-light tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                          {collection.name}
                        </h2>
                        <p className="text-sm text-muted-foreground font-light mb-4 line-clamp-2">
                          {collection.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {collection.itemCount} Items
                          </span>
                          <span className="flex items-center gap-2 text-sm font-light group-hover:gap-3 transition-all duration-300">
                            Explore
                            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tighter mb-4">
              Can't decide?
            </h2>
            <p className="text-muted-foreground font-light mb-8">
              Browse our entire catalog and discover your next favorite pair.
            </p>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-md font-light hover:bg-foreground/90 transition-colors duration-200"
              >
                Shop All Products
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;
