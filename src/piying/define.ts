import { PiyingGroup, type PiViewConfig } from '@piying/view-react';
import { FieldsetGroup } from './group/fieldset';
import { InputCheckbox } from './input-checkbox';
import { InputNumber } from './input-number';
import { InputRadio } from './input-radio';
import { InputText } from './input-text';
import { LabelWrapper } from './wrapper/label-wrapper';
import { ValidatorWrapper } from './wrapper/validator-wrapper';
import { FormHelp } from './form-help';
import { MultiCheckbox } from './multi-checkbox';
import { ArrayRwGroup } from './group/array-rw';
import { MuiTextField } from './mui/input-text';

export const fieldConfig = {
  types: {
    string: { type: InputText, wrappers: ['label'] },
    number: { type: InputNumber, wrappers: ['label'] },
    radio: { type: InputRadio },
    boolean: { type: InputCheckbox, wrappers: ['label'] },
    fieldset: { type: FieldsetGroup },
    formHelp: { type: FormHelp },
    tuple: { type: PiyingGroup },
    'multi-checkbox': { type: MultiCheckbox },
    'array-rw': { type: ArrayRwGroup },
    'mui-string': { type: MuiTextField },
  },
  wrappers: {
    label: {
      type: LabelWrapper,
    },
    validator: {
      type: ValidatorWrapper,
    },
  },
} as PiViewConfig;
