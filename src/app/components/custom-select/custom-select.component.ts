import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from './models/select-option.model';
import { EMPTY_OPTION, LIST_POSITION } from './custom-select.constants';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItem,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
    NgClass,
    NgStyle,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
})
export class CustomSelectComponent{
  @Input() options: Option[] = [];
  @Input() set value(value: unknown) {
    this.selectedOption = this.options.find(option => option.value === value) ?? EMPTY_OPTION;
  };

  @Output() changeSelection = new EventEmitter<unknown>();

  protected isOpen: boolean = false;
  protected selectedOption: Option;
  protected readonly LIST_POSITION = LIST_POSITION;
}
