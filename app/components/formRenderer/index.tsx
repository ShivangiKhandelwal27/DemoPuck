import { memo, useCallback, useState } from "react";

// components
import Field from '../feild';

interface Props {
  items: Array<{ fieldType: string; fieldLabel: string }>;
  submitButtonLabel: string;
}

const FormRenderer = (props: Props): JSX.Element => {
  const { items, submitButtonLabel } = props;
  const [formValues, setFormValues] = useState({});

  const handleSubmit = useCallback((e) => {
    console.log('Form values --->', formValues);
  }, [formValues]);

  const handleFieldChange = useCallback((fieldId, value) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [fieldId]: value,
    }))
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {
          items?.map(({ fieldType, fieldLabel }, index) => {
            if (!fieldType) return null
            return (
              <li key={index}>
                <Field
                  fieldType={fieldType}
                  fieldLabel={fieldLabel}
                  onChange={handleFieldChange}
                  /*
                   Keeping fieldId same as fieldLabel for simplicity.
                   Ideally it should always be unique.
                 */
                  fieldId={fieldLabel}
                />
              </li>
            )
          })
        }
      </ul>
      <button type="submit">
        {submitButtonLabel}
      </button>
    </form>
  )
};

export default memo(FormRenderer);
