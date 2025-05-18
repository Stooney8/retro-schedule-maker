
import React, { useState } from 'react';
import RetroHeader from '@/components/RetroHeader';
import FileUploader from '@/components/FileUploader';
import ScheduleTable from '@/components/ScheduleTable';
import RetroFooter from '@/components/RetroFooter';
import Instructions from '@/components/Instructions';
import { CourseSchedule } from '@/types/scheduleTypes';

const Index = () => {
  const [schedules, setSchedules] = useState<CourseSchedule[]>([]);

  const handleScheduleLoaded = (loadedSchedules: CourseSchedule[]) => {
    setSchedules(loadedSchedules);
  };

  return (
    <div className="retro-app min-h-screen flex flex-col">
      <RetroHeader />
      
      <main className="container mx-auto px-4 flex-grow">
        <Instructions />
        
        <FileUploader onScheduleLoaded={handleScheduleLoaded} />
        
        {schedules.length > 0 ? (
          <ScheduleTable schedules={schedules} />
        ) : (
          <div className="retro-window text-center py-10">
            <div className="font-pixelated text-xl text-retro-primary mb-2">
              NO DATA LOADED
            </div>
            <p className="text-retro-muted mb-4">
              Please upload a schedule file to continue
            </p>
            <div className="text-xs text-retro-muted">
              C:\&gt; <span className="animate-blink">_</span>
            </div>
          </div>
        )}
      </main>
      
      <RetroFooter />
    </div>
  );
};

export default Index;
