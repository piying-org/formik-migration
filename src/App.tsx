import { AccessibleInstantFeedbackExample } from './views/Accessible-Instant-Feedback-Example';
import './App.css';
import { AsyncSubmissionExample } from './views/Async-Submission-Example';
import { BasicExample } from './views/Basic-Example';
import { CheckboxesExample } from './views/Checkboxes-Example';
import { DependentFieldsExample } from './views/Dependent-Fields-Example';
import { DependentFieldsExampleAsync } from './views/Dependent-Fields-Example-Async';
import { FieldArraysExample } from './views/Field-Arrays-Example';
import { MaterialUI } from './views/Material-UI';
import { RadioGroupExample } from './views/Radio-Group-Example';

const List = [
  {
    label: 'Basic Example',
    from: 'https://formik.org/docs/examples/basic',
    to: '/views/Basic-Example',
    Component: BasicExample,
  },
  {
    label: 'Async Submission Example',
    from: 'https://formik.org/docs/examples/async-submission',
    to: '/views/Async-Submission-Example',
    Component: AsyncSubmissionExample,
  },
  {
    label: 'Checkboxes Example',
    from: 'https://formik.org/docs/examples/checkboxes',
    to: '/views/Checkboxes-Example',
    Component: CheckboxesExample,
  },
  {
    label: 'Radio Group Example',
    from: 'https://formik.org/docs/examples/radio-group',
    to: '/views/Radio-Group-Example',
    Component: RadioGroupExample,
  },
  {
    label: 'Dependent Fields Example',
    from: 'https://formik.org/docs/examples/dependent-fields',
    to: '/views/Dependent-Fields-Example',
    Component: DependentFieldsExample,
  },
  {
    label: 'Dependent Fields Example Async',
    from: 'https://formik.org/docs/examples/dependent-fields-async-api-request',
    to: '/views/Dependent-Fields-Example-Async',
    Component: DependentFieldsExampleAsync,
  },
  {
    label: 'Field Arrays Example',
    from: 'https://formik.org/docs/examples/field-arrays',
    to: '/views/Field-Arrays-Example',
    Component: FieldArraysExample,
  },
  {
    label: 'Accessible Instant Feedback Example',
    from: 'https://formik.org/docs/examples/instant-feedback',
    to: '/views/Accessible-Instant-Feedback-Example',
    Component: AccessibleInstantFeedbackExample,
  },
  {
    label: 'Material UI',
    from: 'https://formik.org/docs/examples/with-material-ui',
    to: '/views/Material-UI',
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
                <a
                  href={'https://github.com/piying-org/formik-migration/tree/main/src' + item.to + '.tsx'}
                  className="link-secondary btn"
                  target="_blank"
                >
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
