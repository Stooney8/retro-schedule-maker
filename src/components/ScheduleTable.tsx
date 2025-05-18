
import React, { useState, useMemo } from 'react';
import { CourseSchedule } from '../types/scheduleTypes';
import { exportToExcel } from '../utils/excelParser';
import { Calendar, Clock } from 'lucide-react';

interface ScheduleTableProps {
  schedules: CourseSchedule[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedules }) => {
  const [classroomFilter, setClassroomFilter] = useState<string>('');
  const [dayFilter, setDayFilter] = useState<string>('');

  const uniqueClassrooms = useMemo(() => {
    return [...new Set(schedules.map(s => s.classroom))].sort();
  }, [schedules]);
  
  const uniqueDays = useMemo(() => {
    return [...new Set(schedules.map(s => s.day))].filter(Boolean).sort();
  }, [schedules]);

  const filteredSchedules = useMemo(() => {
    return schedules.filter(s => {
      const matchesClassroom = !classroomFilter || s.classroom === classroomFilter;
      const matchesDay = !dayFilter || s.day === dayFilter;
      return matchesClassroom && matchesDay;
    });
  }, [schedules, classroomFilter, dayFilter]);

  const handleDownload = () => {
    const filename = `classroom_schedule_${classroomFilter || 'all'}_${new Date().toISOString().split('T')[0]}`;
    exportToExcel(filteredSchedules, filename);
  };

  const handleClearFilters = () => {
    setClassroomFilter('');
    setDayFilter('');
  };

  if (schedules.length === 0) {
    return null;
  }

  return (
    <div className="retro-window mb-6">
      <div className="retro-window-title">
        <span>SCHEDULE VIEWER v1.0</span>
      </div>

      {/* Control panel */}
      <div className="bg-blue-900 p-3 mb-4 border-2 border-t-white border-l-white border-r-black border-b-black">
        <div className="flex flex-col md:flex-row gap-4 mb-4 items-start">
          <div className="flex-1">
            <label htmlFor="classroom" className="block text-retro-muted mb-1 font-pixelated text-sm">
              CLASSROOM:
            </label>
            <div className="relative">
              <select
                id="classroom"
                value={classroomFilter}
                onChange={(e) => setClassroomFilter(e.target.value)}
                className="retro-select w-full"
              >
                <option value="">ALL CLASSROOMS</option>
                {uniqueClassrooms.map((classroom) => (
                  <option key={classroom} value={classroom}>
                    {classroom}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                ▼
              </div>
            </div>
          </div>

          <div className="flex-1">
            <label htmlFor="day" className="block text-retro-muted mb-1 font-pixelated text-sm">
              DAY:
            </label>
            <div className="relative">
              <select
                id="day"
                value={dayFilter}
                onChange={(e) => setDayFilter(e.target.value)}
                className="retro-select w-full"
              >
                <option value="">ALL DAYS</option>
                {uniqueDays.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                ▼
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-2">
          <div className="text-xs text-retro-muted">
            FOUND: <span className="text-retro-primary">{filteredSchedules.length}</span> RECORDS
          </div>
          <div className="flex gap-2">
            <button onClick={handleClearFilters} className="retro-button text-sm">
              CLEAR FILTERS
            </button>
            <button onClick={handleDownload} className="retro-button text-sm">
              EXPORT TO EXCEL
            </button>
          </div>
        </div>
      </div>

      {/* Schedule table */}
      <div className="overflow-x-auto">
        <table className="retro-table">
          <thead>
            <tr>
              <th>COURSE</th>
              <th>INSTRUCTOR</th>
              <th>CLASSROOM</th>
              <th>DATE/DAY</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((item, index) => (
                <tr key={index}>
                  <td className="font-mono">{item.course}</td>
                  <td className="font-mono">{item.instructor}</td>
                  <td className="font-pixelated text-retro-accent">{item.classroom}</td>
                  <td>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1 text-retro-muted" />
                      <span>{item.date || 'N/A'}</span>
                      <span className="ml-1 text-retro-muted">{item.day || ''}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-retro-muted" />
                      {item.startTime} - {item.endTime}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-10">
                  <div className="text-retro-muted font-pixelated">
                    NO RECORDS FOUND
                  </div>
                  <div className="text-xs mt-1 text-retro-muted">
                    Try adjusting your filters
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduleTable;
