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
  }));
  titleFilter:WritableSignal<string> = signal('');
  statusFilter:WritableSignal<boolean | null> = signal(null);

  constructor(private readonly taskService: TaskService) {
  }

  openEditTask(task: Task) {
  }

  saveTask(task: Task, newValue: string) {
    if(!newValue) return;

    task.title = newValue;
    task.isEditing = false
  }

  deleteTask(index: number) {
    // this.tasks().splice(index, 1)
  }

  protected readonly STATUS_FILTER_OPTIONS = STATUS_FILTER_OPTIONS;
}
