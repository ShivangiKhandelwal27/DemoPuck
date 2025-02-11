import { memo, useCallback, useState } from "react";

// components
import Field from '../feild';

interface Props {
  items: Array<{ fieldType: string; fieldLabel: string; selectOptions?: Array<{ name: string, value: string }> }>;
  submitButtonLabel: string;
}

const FormRenderer = (props: Props): JSX.Element => {
  const { items, submitButtonLabel } = props;
  const [formValues, setFormValues] = useState({});

  const handleSubmit = useCallback(() => {
    // FormValues against all fields will be printed below:
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
          items?.map(({ fieldType, fieldLabel, fieldName, selectOptions = [] }, index) => {
            if (!fieldType) return null
            return (
              <li key={index}>
                <Field
                  fieldType={fieldType}
                  fieldLabel={fieldLabel}
                  onChange={handleFieldChange}
                  options={selectOptions}
                  fieldId={fieldName}
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
