import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const titles = ['Web Developer', 'Frontend Specialist', 'React Expert', 'UI/UX Enthusiast'];
  const currentTitle = titles[currentIndex];
  const { elementRef, isVisible } = useScrollReveal({ triggerOnce: true });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (typedText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setTypedText(currentTitle.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentTitle, currentIndex]);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={elementRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements with Parallax */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float parallax" 
        style={{ 
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          animationDelay: '0s'
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float parallax" 
        style={{ 
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          animationDelay: '3s' 
        }} 
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-60 animate-glow-pulse" />
          <img
            src={profileImage}
            alt="Profile"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/20 shadow-glow"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          <span className="gradient-text">Jatin saini</span>
        </h1>

        {/* Animated Title */}
        <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-12 flex items-center justify-center">
          <span className="typing font-mono">
            {typedText}
          </span>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Crafting beautiful, responsive web experiences with modern technologies. 
          Passionate about clean code and exceptional user interfaces.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => scrollToNextSection()}
            className="btn-primary"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glass"
          >
            Get In Touch
          </button>
        </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer glass p-3 rounded-full hover:bg-white/10 transition-all"
      >
        <ChevronDown size={24} className="text-foreground" />
      </button>
    </section>
  );
};

export default Hero;