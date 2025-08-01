import * as v from 'valibot';
import { setComponent, setWrappers, NFCSchema, patchAttributes } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';

const schema = v.pipe(
  v.object({
    friends: v.pipe(
      v.array(
        v.pipe(
          v.object({
            name: v.pipe(
              v.string(),
              setWrappers(['label', 'validator']),
              patchAttributes({
                placeholder: 'Jane Doe',
              })
            ),
            email: v.pipe(
              v.string(),
              setWrappers(['label', 'validator']),
              v.email(),
              patchAttributes({
                placeholder: 'jane@acme.com',
              })
            ),
          }),
          setComponent('fieldset')
        )
      ),
      setComponent('array-rw')
    ),

    __formHelp: v.pipe(NFCSchema, setComponent('formHelp')),
  }),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function FieldArraysExample() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = {
    friends: [
      {
        name: '',
        email: '',
      },
    ],
  };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
