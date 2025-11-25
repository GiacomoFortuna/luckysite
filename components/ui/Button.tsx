import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, primary, fullWidth, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative overflow-hidden group px-8 py-4 rounded-xl font-bold font-heading tracking-wide 
      transition-all duration-300 ease-out-expo active:scale-[0.98] transform-gpu
      ${fullWidth ? 'w-full' : 'w-auto'}
      ${primary 
        ? 'bg-slate-950 text-white shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] border border-cyan-500/50 hover:border-cyan-400' 
        : 'bg-transparent text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 hover:border-cyan-500/50 hover:bg-white/5'}
    `}
  >
    {/* Gradient Background for Primary */}
    {primary && (
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-blue-950 to-slate-950 opacity-80 group-hover:opacity-100 transition-opacity duration-500 ease-smooth" />
    )}

    {/* Light Runner Effect (Shine) */}
    <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 animate-shine" />

    {/* Content */}
    <span className={`relative z-10 flex items-center justify-center gap-2 ${primary ? 'text-cyan-50 group-hover:text-white transition-colors duration-300' : ''}`}>
      {children}
    </span>
  </button>
);

export default Button;