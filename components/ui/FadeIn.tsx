import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

interface FadeInProps {
  children: React.ReactNode;
  delay?: string | number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = "0", className = "" }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transform transition-all duration-1000 ease-out-expo will-change-[transform,opacity,filter] ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100 blur-0' 
          : 'opacity-0 translate-y-8 scale-[0.98] blur-[4px]'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;