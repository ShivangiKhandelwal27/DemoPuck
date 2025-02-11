import { useCallback, useState } from "react";
import { AutoField, FieldLabel } from "@measured/puck";

const Field = ({ fieldLabel, fieldType, fieldId, onChange, options }) => {
  const [value, setValue] = useState();

  const handleChange = useCallback((val) => {
    setValue(val);
    onChange(fieldId, val);
  }, [onChange, fieldId]);

  return (
    <FieldLabel label={fieldLabel}>
      <AutoField
        field={{ type: fieldType, options }}
        onChange={handleChange}
        value={value}
        id={fieldId}
      />
    </FieldLabel>
  )
}

export default Field;