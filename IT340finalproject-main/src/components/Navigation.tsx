import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Search, Menu, Footprints, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount and when storage changes
    checkAuthState();
    window.addEventListener('storage', checkAuthState);
    return () => window.removeEventListener('storage', checkAuthState);
  }, []);

  const checkAuthState = () => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    setIsLoggedIn(!!token);
    setUsername(storedUsername || '');
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
    navigate('/');
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <Footprints className="w-6 h-6" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#new">New Drops</NavLink>
            <NavLink href="#trending">Trending</NavLink>
            <NavLink href="#sale">Sale</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>

          {/* Right Side Icons & Buttons */}
          <div className="flex items-center gap-3">
            <IconButton icon={Search} label="Search" />
            <IconButton icon={ShoppingCart} label="Cart" />
            
            <div className="hidden md:flex items-center gap-2 ml-2">
              {isLoggedIn ? (
                <>
                  <span className="text-sm text-muted-foreground mr-2">
                    {username}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleSignOut}
                    className="font-light transition-all duration-200 hover:bg-secondary"
                  >
                    <LogOut className="w-4 h-4 mr-1" />
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-light transition-all duration-200 hover:bg-secondary"
                    >
                      Log in
                    </Button>
                  </Link>
                  <Link to="/create-account">
                    <Button
                      size="sm"
                      className="font-light transition-all duration-200 bg-foreground text-background hover:bg-foreground/90"
                    >
                      Sign up
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors duration-200"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border py-4"
          >
            <div className="flex flex-col gap-4">
              <NavLink href="#new" mobile>New Drops</NavLink>
              <NavLink href="#trending" mobile>Trending</NavLink>
              <NavLink href="#sale" mobile>Sale</NavLink>
              <NavLink href="#about" mobile>About</NavLink>
              <div className="flex gap-2 pt-4 border-t border-border">
                {isLoggedIn ? (
                  <div className="flex flex-col gap-2 w-full">
                    <span className="text-sm text-muted-foreground text-center">
                      {username}
                    </span>
                    <Button
                      variant="ghost"
                      onClick={handleSignOut}
                      className="w-full font-light"
                    >
                      <LogOut className="w-4 h-4 mr-1" />
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="flex-1">
                      <Button
                        variant="ghost"
                        className="w-full font-light"
                      >
                        Log in
                      </Button>
                    </Link>
                    <Link to="/create-account" className="flex-1">
                      <Button
                        className="w-full font-light bg-foreground text-background hover:bg-foreground/90"
                      >
                        Sign up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  return (
    <a
      href={href}
      className={`font-light text-muted-foreground hover:text-foreground transition-colors duration-200 ${
        mobile ? 'text-base py-2' : 'text-sm'
      }`}
    >
      {children}
    </a>
  );
}

function IconButton({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.15 }}
      className="p-2 hover:bg-secondary rounded-md transition-colors duration-200"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.button>
  );
}
