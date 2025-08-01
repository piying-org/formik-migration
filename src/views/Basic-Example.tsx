import * as v from 'valibot';
import { setComponent, setWrappers, patchAttributes, NFCSchema } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
import { getId } from '../piying/util/get-id';

const schema = v.pipe(
  v.object({
    firstName: v.pipe(
      v.string(),
      setWrappers(['label']),
      v.title('First Name'),
      patchAttributes({ id: getId(), placeholder: 'Jane' })
    ),
    lastName: v.pipe(
      v.string(),
      setWrappers(['label']),
      v.title('Last Name'),
      patchAttributes({ id: getId(), placeholder: 'Doe' })
    ),
    email: v.pipe(
      v.string(),
      setWrappers(['label']),
      v.email(),
      v.title('Email'),
      patchAttributes({ id: getId(), placeholder: 'jane@acme.com' })
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
export function BasicExample() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = { firstName: '', lastName: '', email: '' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
