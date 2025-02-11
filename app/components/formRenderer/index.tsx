import { memo, useCallback } from "react";
import { FIELDS_VS_COMPONENT } from "../../helpers/Field";
import { AutoField, FieldLabel } from "@measured/puck";

interface Props {
  items: Array<{ fieldType: string; fieldLabel: string }>;
}

const FormRenderer = (props: Props): JSX.Element => {
  const { items } = props;
  console.log('hola inside forRenderer', props);

  const handleChange = useCallback((e) => {

  }, []);

  return (
      <ul>
        {
          items?.map(({ fieldType, fieldLabel }, index) => {
            if (!fieldType) return null
            return (
              <li key={index}>
                <FieldLabel label={fieldLabel}>
                  <AutoField
                    field={{ type: fieldType }}
                    onChange={handleChange}
                  />
                </FieldLabel>
              </li>
            )
          })
        }
      </ul>
  )
};

export default memo(FormRenderer);
