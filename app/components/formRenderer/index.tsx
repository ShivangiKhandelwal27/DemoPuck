import { useState, memo, useCallback } from "react";
import {FIELDS_VS_COMPONENT} from "../../helpers/Field";
import { PuckComponentProps, DropZone } from "@measured/puck";
import { AutoField } from "@measured/puck";
import { FieldLabel } from "@measured/puck";

interface Props {
  field: string;
}

const FormRenderer = (props: Props): JSX.Element => {
  const { field } = props;
  const [val, setval] = useState();
  const handleChange = useCallback((e) => {
    setval(e.target.value);
  }, []);
  const Component = FIELDS_VS_COMPONENT[field];
  if (!Component) return null;
  return (
    <Component onChange={handleChange} />
  );
};

export default memo(FormRenderer);
