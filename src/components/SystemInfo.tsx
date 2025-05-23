
import React from 'react';
import { Monitor, Cpu, HardDrive, Wifi, Shield, Clock } from 'lucide-react';

const SystemInfo: React.FC = () => {
  const getCurrentTime = () => {
    return new Date().toLocaleString();
  };

  const systemStats = [
    { label: 'SYSTEM STATUS', value: 'ONLINE', icon: Monitor, status: 'active' },
    { label: 'CPU USAGE', value: '23%', icon: Cpu, status: 'normal' },
    { label: 'MEMORY', value: '8.2GB / 16GB', icon: HardDrive, status: 'normal' },
    { label: 'NETWORK', value: 'CONNECTED', icon: Wifi, status: 'active' },
    { label: 'SECURITY', value: 'SECURE', icon: Shield, status: 'active' },
    { label: 'UPTIME', value: '127:45:23', icon: Clock, status: 'normal' }
  ];

  return (
    <div className="retro-window">
      <div className="retro-window-title">
        <span>SYSTEM DIAGNOSTICS</span>
        <span className="animate-blink">▎</span>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {systemStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-retro-background/30 border border-retro-primary/30 p-4 rounded-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-5 h-5 text-retro-accent" />
                    <span className="font-pixelated text-sm text-retro-muted">
                      {stat.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-retro-foreground">{stat.value}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      stat.status === 'active' ? 'bg-green-400 animate-pulse' :
                      stat.status === 'normal' ? 'bg-blue-400' : 'bg-yellow-400'
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-retro-background/30 border border-retro-primary/30 p-4 rounded-md">
          <h3 className="font-pixelated text-retro-accent mb-3">SYSTEM LOG</h3>
          <div className="space-y-2 font-mono text-xs text-retro-muted max-h-40 overflow-y-auto">
            <div>[{getCurrentTime()}] CyberSync Scheduler initialized</div>
            <div>[{getCurrentTime()}] Excel parser module loaded</div>
            <div>[{getCurrentTime()}] Template generator ready</div>
            <div>[{getCurrentTime()}] File upload system active</div>
            <div>[{getCurrentTime()}] Schedule viewer operational</div>
            <div>[{getCurrentTime()}] All systems nominal</div>
          </div>
        </div>

        <div className="bg-retro-background/30 border border-retro-primary/30 p-4 rounded-md">
          <h3 className="font-pixelated text-retro-accent mb-3">APPLICATION INFO</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-retro-muted">Version:</span>
              <span className="ml-2 font-mono text-retro-foreground">v2.1.0</span>
            </div>
            <div>
              <span className="text-retro-muted">Build:</span>
              <span className="ml-2 font-mono text-retro-foreground">#2024.05.23</span>
            </div>
            <div>
              <span className="text-retro-muted">Runtime:</span>
              <span className="ml-2 font-mono text-retro-foreground">React 18.3.1</span>
            </div>
            <div>
              <span className="text-retro-muted">Platform:</span>
              <span className="ml-2 font-mono text-retro-foreground">Web</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemInfo;
