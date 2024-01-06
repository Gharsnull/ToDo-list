import { effect, inject, Injectable } from '@angular/core';
import { addDoc, collection, Firestore, onSnapshot, query, where } from '@angular/fire/firestore';
import { Task } from '../../common/models';
import { AuthService } from '../auth/auth.service';
import { fromFirestore, toFirestore } from './task.helper';
import { toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';

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
  private readonly _tasks = new BehaviorSubject<Task[]>([]);

  readonly tasks = toSignal(this._tasks, { initialValue: <Task[]>[]});

  constructor() {
    effect(() => {
      if(this.authService.user()) {
        const userQuery = query(
          this.taskCollection,
          where('createdBy', '==', this.authService.user()!.uid)
        );
        onSnapshot(userQuery, (snapshot) => {
          this._tasks.next(snapshot.docs.map((x)=> x.data() as Task))
        })
      }
    });
  }

  addTask(title: string) {
    void addDoc(this.taskCollection, { title } as Partial<Task>);
  }
}
