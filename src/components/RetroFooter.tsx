
import React from 'react';
import { Zap, Shield } from 'lucide-react';

const RetroFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-retro-background py-6 mt-6 border-t border-retro-primary/50 text-retro-muted text-center relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-2">
          <Zap className="w-4 h-4 text-retro-accent mr-2" />
          <p className="font-pixelated cyber-glow text-retro-primary">CYBERSYNC SCHEDULER</p>
          <Zap className="w-4 h-4 text-retro-accent ml-2" />
        </div>
        <p className="text-sm flex items-center justify-center">
          <Shield className="w-3 h-3 mr-2 text-retro-muted" />
          © {currentYear} CYBERCORP INDUSTRIES
        </p>
        <div className="mt-2 mx-auto w-32 h-0.5 bg-gradient-to-r from-transparent via-retro-primary/30 to-transparent"></div>
        <p className="text-xs mt-2 text-retro-muted/70">* SYSTEM OPTIMIZED FOR NEURAL INTERFACE *</p>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-retro-primary/70"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-retro-primary/70"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-retro-primary/70"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-retro-primary/70"></div>
    </footer>
  );
};

export default RetroFooter;
