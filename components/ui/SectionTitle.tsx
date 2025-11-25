import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: "center" | "left";
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-8 md:mb-12 ${align === "left" ? "text-left" : "text-center"} px-4 relative z-10`}>
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-300 dark:to-blue-600 leading-tight">
      {title}
    </h2>
    <p className="font-body text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
      {subtitle}
    </p>
  </div>
);

export default SectionTitle;