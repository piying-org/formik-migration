import type { ControlValueAccessor } from '@piying/view-core';
import { CVA, PI_VIEW_FIELD_TOKEN, useControlValueAccessor, useInputTextModel, useSignalToRef } from '@piying/view-react';
import { useContext, useImperativeHandle } from 'react';

interface PiInputOptions {
  [CVA]: React.RefObject<ControlValueAccessor>;
}
export function InputText(props: PiInputOptions) {
  const { cva, cvaa } = useControlValueAccessor();
  useImperativeHandle(props[CVA], () => cva, [cva]);
  const textModel = useInputTextModel(cvaa, false);
  const field = useContext(PI_VIEW_FIELD_TOKEN)!;
  let attributes = useSignalToRef(field, () => field?.attributes());

  return (
    <>
      <input type="text" className="input" {...textModel} {...attributes} />
    </>
  );
}
