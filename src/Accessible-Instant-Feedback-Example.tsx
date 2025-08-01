import * as v from 'valibot';
import { setComponent, patchInputs, setWrappers, patchProps, NFCSchema, patchAsyncProps, asControl } from '@piying/view-core';
import { fieldConfig } from './piying/define';
import { CustomNgBuilder } from './piying/custom.builder';
import { PiyingView } from '@piying/view-react';
import { map } from 'rxjs';

const schema = v.pipe(
  v.object({
    username: v.pipe(
      v.string(),
      v.minLength(8),
      v.maxLength(20),
      v.regex(/^[a-zA-Z0-9]+$/),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' })
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
export function AccessibleInstantFeedbackExample
() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = { username: '' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
