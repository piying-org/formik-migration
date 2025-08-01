import * as v from 'valibot';
import {
  setComponent,
  patchInputs,
  setWrappers,
  patchProps,
  NFCSchema,
  patchAsyncProps,
  asControl,
  patchAttributes,
} from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
import { map } from 'rxjs';

const schema = v.pipe(
  v.object({
    email: v.pipe(v.string(), setComponent('mui-string'), v.email(), v.title('Email')),
    password: v.pipe(v.string(), setComponent('mui-string'), v.minLength(8), patchAttributes({ type: 'password' }), v.title('Password')),
    __formHelp: v.pipe(NFCSchema, setComponent('formHelp')),
  }),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function MaterialUI() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = { email: 'foobar@example.com', password: 'foobar' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
