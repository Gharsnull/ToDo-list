import { Timestamp } from '@angular/fire/firestore'
export interface Task  {
  id?: string;
  title: string;
  isDone: boolean;
  isEditing: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface DbTask extends Omit<Task, 'isEditing' | 'createdAt' | 'updatedAt'> {
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
