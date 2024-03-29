import { Component, computed, signal, WritableSignal } from '@angular/core';
import { Task } from '../../common/models';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task/task.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { FILTER_MENU_POSITION, STATUS_FILTER_OPTIONS } from './task-list.constants';
import { CustomSelectComponent } from '../custom-select/custom-select.component';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ListFilterComponent } from './list-filter/list-filter.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    JsonPipe,
    CdkMenu,
    CdkMenuTrigger,
    CdkMenuItem,
    CustomSelectComponent,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    ListFilterComponent
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  protected readonly FILTER_MENU_POSITION = FILTER_MENU_POSITION;
  private readonly tasks = this.taskService.tasks;

  filteredTasks = computed(() => this.tasks().filter((t) => {
    let result = true;
    if(!!this.titleFilter()) {
      result &&= !!t.title.match(this.titleFilter())
    }

    if(this.statusFilter() !== null) {
      result &&= t.isDone === this.statusFilter()
    }
    return result;
  }).sort((a,b) => +b.createdAt - +a.createdAt));

  titleFilter:WritableSignal<string> = signal('');
  statusFilter:WritableSignal<boolean | null> = signal(null);

  constructor(readonly taskService: TaskService) {
  }

  openEditTask(task: Task) {
    task.isEditing = true;
  }

  async saveTask(task: Task, { title, isDone }: Partial<Task>) {
    if(!title && isDone === undefined) return;

    await this.taskService.updateTask(task.id!, {title, isDone})
    task.isEditing = false;
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id!)
  }

  protected readonly STATUS_FILTER_OPTIONS = STATUS_FILTER_OPTIONS;
}
