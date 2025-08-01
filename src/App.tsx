import { AccessibleInstantFeedbackExample } from './Accessible-Instant-Feedback-Example';
import './App.css';
import { AsyncSubmissionExample } from './Async-Submission-Example';
import { BasicExample } from './Basic-Example';
import { CheckboxesExample } from './Checkboxes-Example';
import { DependentFieldsExample } from './Dependent-Fields-Example';
import { DependentFieldsExampleAsync } from './Dependent-Fields-Example-Async';
import { FieldArraysExample } from './Field-Arrays-Example';
import { MaterialUI } from './Material-UI';
import { PiyingPage } from './piying-page';
import { RadioGroupExample } from './Radio-Group-Example';

const List = [
  {
    label: 'Basic Example',
    from: 'https://formik.org/docs/examples/basic',
    to: '',
    Component: BasicExample,
  },
  {
    label: 'Async Submission Example',
    from: 'https://formik.org/docs/examples/async-submission',
    to: '',
    Component: AsyncSubmissionExample,
  },
  {
    label: 'Checkboxes Example',
    from: 'https://formik.org/docs/examples/checkboxes',
    to: '',
    Component: CheckboxesExample,
  },
  {
    label: 'Radio Group Example',
    from: 'https://formik.org/docs/examples/radio-group',
    to: '',
    Component: RadioGroupExample,
  },
  {
    label: 'Dependent Fields Example',
    from: 'https://formik.org/docs/examples/dependent-fields',
    to: '',
    Component: DependentFieldsExample,
  },
  {
    label: 'Dependent Fields Example Async',
    from: 'https://formik.org/docs/examples/dependent-fields-async-api-request',
    to: '',
    Component: DependentFieldsExampleAsync,
  },
  {
    label: 'Field Arrays Example',
    from: 'https://formik.org/docs/examples/field-arrays',
    to: '',
    Component: FieldArraysExample,
  },
  {
    label: 'Accessible Instant Feedback Example',
    from: 'https://formik.org/docs/examples/instant-feedback',
    to: '',
    Component: AccessibleInstantFeedbackExample,
  },
  {
    label: 'Material UI',
    from: 'https://formik.org/docs/examples/with-material-ui',
    to: '',
    Component: MaterialUI,
  },
];
function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {List.map((item, index) => {
          return (
            <div key={index}>
              <div className="flex gap-4 *:flex-1 items-center *:first:flex-0">
                <label className="label">{item.label}</label>
                <a href={item.from} className="link-primary btn" target="_blank">
                  Formik Page
                </a>
                <a href={item.to} className="link-secondary btn" target="_blank">
                  Piying Code
                </a>
              </div>
              <item.Component key={index}></item.Component>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
