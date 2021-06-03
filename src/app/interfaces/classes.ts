export interface IClasses {
  id: number;
  classYear: number;
  className: string;
  classDescription: string;
  isActive: boolean;
  numOfStudents: number;
}

export interface IClassesCreate {
  classYear: number;
  className: string;
  classDescription: string;
  isActive: boolean;
}

export interface IClassesEdit {
  id: number;
  classYear: number;
  className: string;
  classDescription: string;
  isActive: boolean;
}
