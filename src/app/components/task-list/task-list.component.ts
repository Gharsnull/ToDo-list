import { Component, Input } from '@angular/core';
import { Task } from '../../common/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  host: { class: 'divide-y divide-gray-200' },
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  openEditTask(task: Task) {
    this.tasks.forEach(t => {
      t.isEditing = t === task
    })
  }

  saveTask(task: Task, newValue: string) {
    if(!newValue) return;

    task.title = newValue;
    task.isEditing = false
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1)
  }

}
