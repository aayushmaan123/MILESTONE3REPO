import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import sneakerBg from '@/assets/sneaker-4.jpg';

const LoginSuccessful = () => {
  const location = useLocation();
  const username = location.state?.username || 'User';
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
      <div className='bg-card border border-border rounded-lg w-full max-w-5xl flex justify-between overflow-hidden min-h-[600px]'>
        <div
          className='w-full lg:w-1/2 px-4 lg:px-16 relative overflow-hidden'
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div
            className={`absolute pointer-events-none w-[500px] h-[500px] bg-gradient-to-r from-purple-300/10 via-blue-300/10 to-pink-300/10 rounded-full blur-3xl transition-opacity duration-200 ${
              isHovering ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
          <div className="relative z-10 h-full flex flex-col justify-center">
            <div className="text-center py-10 md:py-20 grid gap-6">
              <div className='grid gap-4 md:gap-6 mb-2'>
                <h1 className='text-3xl md:text-4xl font-extrabold'>🎉 Login Successful! 🎉</h1>
                <h2 className='text-2xl md:text-3xl font-bold text-primary'>Welcome back, {username}!</h2>
                <p className='text-sm md:text-base text-muted-foreground mt-4'>
                  You have successfully logged in to your account.
                </p>
              </div>
              <div className='flex gap-4 justify-center items-center mt-6'>
                <Link to="/">
                  <button 
                    className="group/button relative inline-flex justify-center items-center overflow-hidden rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/50 cursor-pointer"
                  >
                    <span className="relative z-10">Explore Collection</span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <div className="relative h-full w-8 bg-white/20" />
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden lg:block w-1/2 overflow-hidden relative'>
          <img
            src={sneakerBg}
            alt="Sneaker background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessful;
