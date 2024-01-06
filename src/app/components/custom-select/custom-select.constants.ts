import { Option } from './models/select-option.model';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

export const EMPTY_OPTION: Option = {
  label: 'Select an option',
  value: undefined,
}

export const LIST_POSITION = [
  new ConnectionPositionPair(
    { originX: 'start', originY: 'bottom' },
    { overlayX: 'start', overlayY: 'top' }
  )
]
