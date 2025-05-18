
import React from 'react';
import { Calendar } from 'lucide-react';

const RetroHeader: React.FC = () => {
  return (
    <div className="bg-blue-950 py-4 mb-6 border-b-4 border-retro-accent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <Calendar className="w-8 h-8 mr-3 text-retro-primary" />
          <h1 className="font-pixelated text-3xl md:text-4xl text-retro-primary tracking-wider">
            RETRO CLASS SCHEDULER 1.0
          </h1>
        </div>
        <div className="text-center mt-2 text-retro-muted font-mono text-sm">
          * C:\&gt; CLASSROOM SCHEDULE MANAGEMENT SYSTEM *
        </div>
      </div>
    </div>
  );
};

export default RetroHeader;
