
import React from 'react';
import { Calendar, Zap, Terminal } from 'lucide-react';

const RetroHeader: React.FC = () => {
  return (
    <div className="bg-retro-background py-6 mb-6 border-b border-retro-primary/50 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="mr-3 bg-retro-primary/10 p-2 rounded-full border border-retro-primary/30 animate-pulse-glow">
            <Calendar className="w-8 h-8 text-retro-primary" />
          </div>
          <h1 className="font-pixelated text-3xl md:text-4xl text-retro-primary tracking-wider cyber-glow">
            CYBER<span className="text-retro-accent">SYNC</span> SCHEDULER
          </h1>
          <div className="ml-3 text-retro-accent">
            <Zap className="w-6 h-6" />
          </div>
        </div>
        <div className="text-center mt-2 text-retro-muted font-mono text-sm flex items-center justify-center">
          <Terminal className="w-4 h-4 mr-2" />
          <span className="animate-blink opacity-70">&gt;</span> 
          <span className="ml-1">CLASSROOM MANAGEMENT SYSTEM v2.0.5</span>
        </div>
        
        {/* Decorative horizontal line with animated pulse */}
        <div className="mt-4 mx-auto w-48 h-0.5 bg-gradient-to-r from-transparent via-retro-primary to-transparent opacity-70"></div>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-retro-primary/70"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-retro-primary/70"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-retro-primary/70"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-retro-primary/70"></div>
    </div>
  );
};

export default RetroHeader;
