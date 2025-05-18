
import React, { useState } from 'react';
import { parseExcelFile } from '../utils/excelParser';
import { CourseSchedule } from '../types/scheduleTypes';
import { toast } from "@/hooks/use-toast";
import { File } from 'lucide-react';

interface FileUploaderProps {
  onScheduleLoaded: (schedules: CourseSchedule[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onScheduleLoaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = async (files: FileList) => {
    const file = files[0];
    
    if (!file) return;
    
    // Check if the file is an Excel file
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.google-apps.spreadsheet',
      '.xlsx',
      '.xls',
      '.csv'
    ];
    
    // Check extension as well
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const isValidExtension = ['xlsx', 'xls', 'csv'].includes(fileExtension || '');
    
    if (!validTypes.includes(file.type) && !isValidExtension) {
      toast({
        title: "Invalid File",
        description: "Please upload an Excel or CSV file",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    setFileName(file.name);
    
    try {
      const schedules = await parseExcelFile(file);
      onScheduleLoaded(schedules);
      toast({
        title: "File Uploaded",
        description: `Successfully loaded ${schedules.length} schedule entries`,
      });
    } catch (error) {
      toast({
        title: "Error Parsing File",
        description: "There was an error processing your file. Please check the format.",
        variant: "destructive"
      });
      console.error('Error parsing file:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="retro-window mb-6 max-w-2xl mx-auto">
      <div className="retro-window-title">
        <span>C:\UPLOAD\SCHEDULE.XLS</span>
        <span className="animate-blink">▎</span>
      </div>
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed p-6 text-center cursor-pointer transition-colors
                    ${isDragging ? 'border-retro-primary bg-blue-900' : 'border-retro-muted bg-blue-950'}`}
      >
        <input
          type="file"
          accept=".xlsx,.xls,.csv"
          className="hidden"
          onChange={handleFileChange}
          id="file-input"
          disabled={isLoading}
        />
        
        <label htmlFor="file-input" className="cursor-pointer">
          <div className="mx-auto mb-2 flex justify-center">
            <File className="h-12 w-12 text-retro-muted" />
          </div>
          
          {isLoading ? (
            <div className="text-retro-muted">
              <div className="font-pixelated text-lg">LOADING...</div>
              <div className="mt-2 text-xs">PLEASE WAIT</div>
            </div>
          ) : (
            <div className="text-retro-muted">
              <div className="font-pixelated text-lg">
                {fileName ? fileName : 'DROP EXCEL FILE HERE'}
              </div>
              <div className="mt-2 text-xs">
                {fileName ? 'CLICK TO CHANGE FILE' : 'OR CLICK TO BROWSE'}
              </div>
              <div className="mt-4 text-retro-primary text-xs">
                SUPPORTED FORMATS: .XLSX, .XLS, .CSV
              </div>
            </div>
          )}
        </label>
      </div>
    </div>
  );
};

export default FileUploader;
