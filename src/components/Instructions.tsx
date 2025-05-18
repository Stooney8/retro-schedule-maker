
import React, { useState } from 'react';

const Instructions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`retro-window mb-6 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="retro-window-title flex justify-between">
        <span>README.TXT</span>
        <button 
          onClick={() => setIsOpen(false)}
          className="font-bold px-2 hover:text-retro-accent"
        >
          X
        </button>
      </div>
      <div className="text-retro-muted p-2 font-mono text-sm">
        <p className="mb-2">WELCOME TO RETRO CLASS SCHEDULER 1.0</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>UPLOAD an Excel or Google Sheets file containing your schedule data</li>
          <li>Your spreadsheet should include columns for: <span className="text-retro-primary">course, instructor, classroom, date, start time, end time, day</span></li>
          <li>FILTER the data by classroom or day</li>
          <li>DOWNLOAD the filtered schedule in Excel format</li>
        </ol>
        <p className="mt-4 text-xs">NOTE: Make sure your Excel file has proper column headers</p>
      </div>
    </div>
  );
};

export default Instructions;
