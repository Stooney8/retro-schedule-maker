
import React from 'react';
import { Upload, Calendar, Info } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'upload', label: 'FILE UPLOAD', icon: Upload },
    { id: 'schedule', label: 'SCHEDULE VIEWER', icon: Calendar },
    { id: 'system', label: 'SYSTEM INFO', icon: Info }
  ];

  return (
    <div className="retro-window mb-6">
      <div className="retro-window-title">
        <span>CYBERSYNC NAVIGATION</span>
        <span className="animate-blink">▎</span>
      </div>
      <div className="flex border-b border-retro-primary/30">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 px-4 py-3 font-pixelated text-sm transition-all duration-200 flex items-center justify-center gap-2 border-r border-retro-primary/30 last:border-r-0 ${
                activeTab === tab.id
                  ? 'bg-retro-primary text-retro-background'
                  : 'bg-retro-background/50 text-retro-muted hover:bg-retro-primary/20 hover:text-retro-primary'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabNavigation;
