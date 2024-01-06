import { inject, Injectable, Signal } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { Task } from '../../common/models';
import { AuthService } from '../auth/auth.service';
import { fromFirestore, toFirestore } from './task.helper';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly authService: AuthService = inject(AuthService);
  private readonly firestore: Firestore = inject(Firestore);
  private readonly TASK_CONVERTER = {
    toFirestore: toFirestore(this.authService),
    fromFirestore: fromFirestore(),
  };
  private readonly taskCollection = collection(this.firestore, 'task').withConverter(this.TASK_CONVERTER);
  private readonly userQuery = query(this.taskCollection, where('createdBy', '==', this.authService.userTest.uid));

  tasks: Signal<Task[]> = toSignal(collectionData<Task>(this.userQuery), {initialValue: []});

  addTask(title: string) {
    void addDoc(this.taskCollection, { title } as Partial<Task>);
  }
}
