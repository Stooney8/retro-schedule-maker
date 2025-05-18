
import * as XLSX from 'xlsx';
import { CourseSchedule, ExcelRow } from '../types/scheduleTypes';

export const parseExcelFile = (file: File): Promise<CourseSchedule[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rawRows = XLSX.utils.sheet_to_json<ExcelRow>(sheet);
        
        // Map Excel rows to our CourseSchedule format
        const schedules = rawRows.map((row) => {
          // Try to find the field names in a case-insensitive way
          const getCaseInsensitiveField = (fields: string[]): string | number | null | undefined => {
            for (const field of fields) {
              for (const key of Object.keys(row)) {
                if (key.toLowerCase() === field.toLowerCase()) {
                  return row[key];
                }
              }
            }
            return null;
          };

          const course = String(getCaseInsensitiveField(['course', 'class', 'course name', 'title']) || 'Unknown');
          const instructor = String(getCaseInsensitiveField(['instructor', 'teacher', 'professor']) || 'Unknown');
          const classroom = String(getCaseInsensitiveField(['classroom', 'room', 'location']) || 'Unknown');
          const date = String(getCaseInsensitiveField(['date']) || '');
          const startTime = String(getCaseInsensitiveField(['start', 'start time', 'time start']) || '');
          const endTime = String(getCaseInsensitiveField(['end', 'end time', 'time end']) || '');
          const day = String(getCaseInsensitiveField(['day', 'weekday']) || '');
          
          return {
            course,
            instructor,
            classroom,
            date,
            startTime,
            endTime,
            day
          } as CourseSchedule;
        });
        
        resolve(schedules);
      } catch (error) {
        console.error('Error parsing Excel file:', error);
        reject(error);
      }
    };
    
    reader.onerror = (error) => {
      console.error('FileReader error:', error);
      reject(error);
    };
    
    reader.readAsBinaryString(file);
  });
};

export const exportToExcel = (data: CourseSchedule[], filename: string): void => {
  try {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule');
    
    // Generate the Excel file
    XLSX.writeFile(workbook, `${filename}.xlsx`);
  } catch (error) {
    console.error('Error exporting to Excel:', error);
  }
};
