import { Timestamp } from '@angular/fire/firestore'
export type Task  = {
  id?: string;
  title: string;
  isDone: boolean;
  isEditing: boolean;
  createdBy: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type DbTask = Omit<Task, 'isEditing'>;
