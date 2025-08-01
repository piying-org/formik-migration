import * as v from 'valibot';
import { setComponent, patchInputs, setWrappers, patchProps, NFCSchema, patchAsyncProps, asControl } from '@piying/view-core';
import { fieldConfig } from './piying/define';
import { CustomNgBuilder } from './piying/custom.builder';
import { PiyingView } from '@piying/view-react';
import { map } from 'rxjs';

const schema = v.pipe(
  v.object({
    toggle: v.pipe(
      v.boolean(),
      patchProps({ titlePosition: 'right' }),
      patchAsyncProps({
        title: (field) => {
          return field.form.control!.valueChanges.pipe(map((a) => (a ? 'true' : 'false')));
        },
      })
    ),
    checked: v.pipe(
      v.array(v.string()),
      asControl(),
      setComponent('multi-checkbox'),
      setWrappers(['label']),
      v.title('Checked'),
      patchProps({ titlePosition: 'top' }),
      patchInputs({
        options: [
          { label: 'One', value: 'One' },
          { label: 'Two', value: 'Two' },
          { label: 'Three', value: 'Three' },
        ],
      })
    ),
    __formHelp: v.pipe(NFCSchema, setComponent('formHelp')),
  }),
  v.title('form'),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function CheckboxesExample() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = { toggle: false, checked: [] };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
