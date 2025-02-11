import { useCallback, useState, memo } from "react";
import { AutoField, FieldLabel } from "@measured/puck";
import { FIELDS } from '../../constants/Fields';

type ValueOf<T extends object> = T[keyof T];

interface Props {
  fieldLabel: string;
  fieldType: ValueOf<typeof FIELDS>;
  fieldId: string;
  onChange: (fieldId: string, val: any) => void;
  options?: Array<{ label: string, value: string }>;
}

const Field = ({ fieldLabel, fieldType, fieldId, onChange, options }: Props) => {
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

export default memo(Field);