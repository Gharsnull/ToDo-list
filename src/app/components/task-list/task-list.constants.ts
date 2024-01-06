import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Option } from '../custom-select/models/select-option.model';

export const FILTER_MENU_POSITION = [
  new ConnectionPositionPair(
    {originX: 'center', originY: 'bottom'},
    { overlayX: 'center', overlayY: 'top' }
  )
];

export const STATUS_FILTER_OPTIONS: Option[] = [
  {
    label: 'All',
    value: null
  },
  {
    label: 'Done',
    value: true,
  },
  {
    label: 'Not Done',
    value: false
  }
];
