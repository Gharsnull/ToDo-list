import { Component, Input, ViewChild, WritableSignal } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { CdkMenu } from '@angular/cdk/menu';
import { CustomSelectComponent } from '../../custom-select/custom-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STATUS_FILTER_OPTIONS } from '../task-list.constants';
import { OVERLAY_POSITION } from './list-filter.constants';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list-filter',
  standalone: true,
  imports: [
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    CdkMenu,
    CustomSelectComponent,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe
  ],
  templateUrl: './list-filter.component.html',
  styleUrl: './list-filter.component.scss'
})
export class ListFilterComponent {
  @Input() titleFilter: WritableSignal<string>;
  @Input() statusFilter: WritableSignal<boolean | null>
  @ViewChild(CdkConnectedOverlay) protected readonly overlay2: CdkConnectedOverlay;
  protected isOpen: boolean = false;

  protected readonly STATUS_FILTER_OPTIONS = STATUS_FILTER_OPTIONS;
  private isTogglePending = false;

  updateFilter(signal: WritableSignal<unknown>, value: unknown) {
    signal.set(value);
  }


  toggleOverlay() {
    if (this.isTogglePending) return;
    this.isTogglePending = true;

    this.isOpen = !this.isOpen;

    //thanks again to angular material team for making everything work halfway
    setTimeout(() => {
      this.isTogglePending = false;
    }, 0);
  }

  protected readonly OVERLAY_POSITION = OVERLAY_POSITION;
}
