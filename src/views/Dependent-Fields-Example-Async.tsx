import * as v from 'valibot';
import { setComponent, patchInputs, setWrappers, patchProps, NFCSchema, patchAsyncProps, asControl, valueChange, type _PiResolvedCommonViewFieldConfig } from '@piying/view-core';
import { fieldConfig } from '../piying/define';
import { CustomNgBuilder } from '../piying/custom.builder';
import { PiyingView } from '@piying/view-react';
import { filter, switchMap } from 'rxjs';

const schema = v.pipe(
  v.object({
    textA: v.pipe(v.string(), v.title('textA')),
    textB: v.pipe(v.string(), v.title('textB')),
    textC: v.pipe(
      v.string(),
      v.title('textC'),
      valueChange((fn) => {
        fn({
          list: [
            ['..', 'textA'],
            ['..', 'textB'],
          ],
        })
          .pipe(
            filter(({ list }) => list.filter(Boolean).length === 2),
            switchMap((a) => {
              return new Promise<{
                field: _PiResolvedCommonViewFieldConfig;
                list: any[];
              }>((resolve) => {
                setTimeout(() => {
                  resolve(a);
                }, 500);
              });
            })
          )
          .subscribe(({ list, field }) => {
            field.form.control?.updateValue(`textA: ${list[0]}, textB: ${list[1]}`);
          });
      })
    ),
    __formHelp: v.pipe(NFCSchema, setComponent('formHelp')),
  }),
  setComponent('fieldset')
);
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
};
export function DependentFieldsExampleAsync() {
  function modelChange(event: any) {
    console.log(event);
  }
  const initValue = { textA: '', textB: '', textC: '' };
  return (
    <>
      <PiyingView schema={schema} options={options} modelChange={modelChange} model={initValue}></PiyingView>
    </>
  );
}
