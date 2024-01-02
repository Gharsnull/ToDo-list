import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../components/section-wrapper/section-wrapper.component';
import { CreateTaskFormComponent } from '../../components/create-task-form/create-task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { Task } from '../../common/models';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SectionWrapperComponent,
    CreateTaskFormComponent,
    TaskListComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  tasks: Task[] = [];
}
