import { effect, inject, Injectable, signal } from '@angular/core';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  onSnapshot,
  query,
  Unsubscribe,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { DbTask, Task } from '../../common/models';
import { AuthService } from '../auth/auth.service';
import { fromFirestore, toFirestore } from './task.helper';

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
  private unsubscribeSnapshot: Unsubscribe;

  readonly tasks = signal<Task[]>([]);

  constructor() {
    effect(() => {
      if(this.authService.user()) {
        const userQuery = query(
          this.taskCollection,
          where('createdBy', '==', this.authService.user()!.uid)
        );
        this.unsubscribeSnapshot = onSnapshot(userQuery, (snapshot) => {
          this.tasks.set(snapshot.docs.map((x)=> x.data() as Task))
        })
      } else {
        this.unsubscribeSnapshot();
      }
    });
  }

  addTask(title: string) {
    void addDoc(this.taskCollection, { title } as Partial<Task>);
  }

  async updateTask(id: string, {title, isDone}: Partial<Task>) {
    const taskRef = doc(this.taskCollection, id);

    let updateObject: Partial<DbTask> = {};
    if(!!title) {
      updateObject.title = title;
    }

    if(isDone !== undefined) {
      updateObject.isDone = isDone;
    }

    if(Object.keys(updateObject)?.length) {
      await updateDoc(taskRef, updateObject);
    }
  }

  deleteTask(id: string) {
    const taskRef = doc(this.taskCollection, id);
    void deleteDoc(taskRef)
  }
}
