
import React, { useState } from 'react';
import RetroHeader from '@/components/RetroHeader';
import FileUploader from '@/components/FileUploader';
import ScheduleTable from '@/components/ScheduleTable';
import RetroFooter from '@/components/RetroFooter';
import Instructions from '@/components/Instructions';
import TabNavigation from '@/components/TabNavigation';
import SystemInfo from '@/components/SystemInfo';
import { CourseSchedule } from '@/types/scheduleTypes';

const Index = () => {
  const [schedules, setSchedules] = useState<CourseSchedule[]>([]);
  const [activeTab, setActiveTab] = useState('upload');

  const handleScheduleLoaded = (loadedSchedules: CourseSchedule[]) => {
    setSchedules(loadedSchedules);
    // Automatically switch to schedule tab when data is loaded
    setActiveTab('schedule');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'upload':
        return (
          <>
            <Instructions />
            <FileUploader onScheduleLoaded={handleScheduleLoaded} />
          </>
        );
      case 'schedule':
        return schedules.length > 0 ? (
          <ScheduleTable schedules={schedules} />
        ) : (
          <div className="retro-window text-center py-10">
            <div className="font-pixelated text-xl text-retro-primary mb-2">
              NO SCHEDULE DATA
            </div>
            <p className="text-retro-muted mb-4">
              Please upload a schedule file first
            </p>
            <button
              onClick={() => setActiveTab('upload')}
              className="retro-button"
            >
              GO TO UPLOAD
            </button>
          </div>
        );
      case 'system':
        return <SystemInfo />;
      default:
        return null;
    }
  };

  return (
    <div className="retro-app min-h-screen flex flex-col">
      <RetroHeader />
      
      <main className="container mx-auto px-4 flex-grow">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        {renderTabContent()}
      </main>
      
      <RetroFooter />
    </div>
  );
};

export default Index;
