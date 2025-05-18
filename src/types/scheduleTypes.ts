
export interface CourseSchedule {
  course: string;
  instructor: string;
  classroom: string;
  date: string;
  startTime: string;
  endTime: string;
  day: string;
}

export interface ExcelRow {
  [key: string]: string | number | null | undefined;
}
