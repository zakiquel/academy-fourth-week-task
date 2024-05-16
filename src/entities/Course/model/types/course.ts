export interface Task {
  id: string;
  name: string;
}

export interface Chapter {
  id: string;
  title: string;
  tasks: Task[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  chapters: Chapter[];
}