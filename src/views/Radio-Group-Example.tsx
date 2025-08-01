import * as v from 'valibot';
import { setComponent, patchInputs, setWrappers, patchProps, NFCSchema, patchAsyncProps, asControl } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';

const schema = v.pipe(
  v.object({
    picked: v.pipe(
      v.picklist(['One', 'Two']),
      setComponent('radio'),
      patchProps({ titlePosition: 'top' }),
    ),
    __formHelp: v.pipe(NFCSchema, setComponent('formHelp')),
  }),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function RadioGroupExample() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = { picked: '' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
