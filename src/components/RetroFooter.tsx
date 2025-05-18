
import React from 'react';

const RetroFooter: React.FC = () => {
  return (
    <footer className="bg-blue-950 py-4 mt-6 border-t-4 border-retro-accent text-retro-muted text-center">
      <div className="container mx-auto px-4">
        <p className="font-pixelated">RETRO CLASS SCHEDULER 1.0</p>
        <p className="text-sm mt-1">© 2025 ALL RIGHTS RESERVED</p>
        <p className="text-xs mt-2">* RECOMMENDED RESOLUTION: 640x480 *</p>
      </div>
    </footer>
  );
};

export default RetroFooter;
