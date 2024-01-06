import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';

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
  newTask: string = '';

  constructor(private readonly taskService: TaskService) {
  }

  addTask() {
    if (this.newTask) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }
}
