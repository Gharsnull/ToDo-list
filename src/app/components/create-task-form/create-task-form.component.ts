import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../common/models';

@Component({
  selector: 'app-create-task-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-task-form.component.html',
  styleUrl: './create-task-form.component.scss'
})
export class CreateTaskFormComponent {
  @Input() tasks: Task[] = [];

  newTask: string = '';

  addTask() {
    if (this.newTask) {
      this.tasks.push({
        title: this.newTask
      });
      this.newTask = '';
    }
  }
}
