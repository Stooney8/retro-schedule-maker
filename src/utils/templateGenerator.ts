
import * as XLSX from 'xlsx';
import { CourseSchedule } from '../types/scheduleTypes';

export const generateExcelTemplate = (): void => {
  // Create sample data that shows the expected format
  const sampleData: CourseSchedule[] = [
    {
      course: "Introduction to Computer Science",
      instructor: "Dr. Sarah Johnson",
      classroom: "Room A101",
      date: "2024-01-15",
      startTime: "09:00",
      endTime: "10:30",
      day: "Monday"
    },
    {
      course: "Advanced Mathematics",
      instructor: "Prof. Michael Chen",
      classroom: "Room B205",
      date: "2024-01-15",
      startTime: "11:00",
      endTime: "12:30",
      day: "Monday"
    },
    {
      course: "Physics Laboratory",
      instructor: "Dr. Emily Rodriguez",
      classroom: "Lab C301",
      date: "2024-01-16",
      startTime: "14:00",
      endTime: "16:00",
      day: "Tuesday"
    }
  ];

  try {
    // Create worksheet from sample data
    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    
    // Set column widths for better readability
    const columnWidths = [
      { wch: 30 }, // course
      { wch: 20 }, // instructor
      { wch: 15 }, // classroom
      { wch: 12 }, // date
      { wch: 10 }, // startTime
      { wch: 10 }, // endTime
      { wch: 12 }  // day
    ];
    worksheet['!cols'] = columnWidths;
    
    // Create workbook and add the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule Template');
    
    // Generate and download the file
    const filename = `CyberSync_Schedule_Template_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, filename);
  } catch (error) {
    console.error('Error generating Excel template:', error);
    throw new Error('Failed to generate template');
  }
};
