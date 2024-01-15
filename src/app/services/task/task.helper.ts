import {
  PartialWithFieldValue,
  QueryDocumentSnapshot,
  serverTimestamp,
  SnapshotOptions,
  Timestamp,
} from '@angular/fire/firestore';
import { DbTask, Task } from '../../common/models';
import { AuthService } from '../auth/auth.service';


// toFirestore.ts
export function toFirestore(authService: AuthService) {
  return ({ title }: PartialWithFieldValue<Task>): DbTask => {
    return {
      title: title as string,
      isDone: false,
      createdBy: authService.user()?.uid as string,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
    };
  };
}

export function fromFirestore() {
  return (snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Task => {
    const data = snapshot.data(options) as DbTask;
    return {
      ...data,
      id: snapshot.id,
      createdAt: data.createdAt?.toDate()!,
      updatedAt: data.updatedAt?.toDate()!,
      isEditing: false};
  }
}

