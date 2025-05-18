
import React, { useState } from 'react';
import { Terminal, X, Info, Database } from 'lucide-react';

const Instructions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`retro-window mb-6 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="retro-window-title flex justify-between">
        <div className="flex items-center">
          <Terminal className="w-5 h-5 mr-2 text-retro-primary" />
          <span>SYSTEM.README</span>
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="font-bold px-2 hover:text-retro-accent flex items-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="text-retro-muted p-3 font-mono text-sm bg-retro-background/30 rounded-md border border-retro-primary/20">
        <p className="mb-3 text-retro-primary font-pixelated flex items-center">
          <Info className="w-4 h-4 mr-2" />
          CYBERSYNC SCHEDULER SYSTEM MANUAL
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-retro-foreground/80">
          <li className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            UPLOAD an Excel or Google Sheets file containing schedule data
          </li>
          <li className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            Required data columns: <span className="text-retro-primary">course, instructor, classroom, date, start time, end time, day</span>
          </li>
          <li className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            FILTER the data by classroom or day using the control panel
          </li>
          <li className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            EXPORT filtered schedule to Excel format for offline access
          </li>
        </ol>
        <div className="mt-4 p-2 border border-retro-accent/30 bg-retro-accent/5 rounded text-xs flex items-start">
          <Database className="w-4 h-4 mr-2 shrink-0 text-retro-accent" />
          <p>
            SYSTEM NOTE: Ensure your Excel file includes proper column headers for optimal data synchronization
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
