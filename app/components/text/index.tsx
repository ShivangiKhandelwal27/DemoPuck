import { useState, memo } from "react";
import "./TextInput.css";
import {AutoField, FieldLabel} from "@measured/puck";

const TextInput = ({ onChange }) => {
  const [value, setValue] = useState("");

  return (
    <FieldLabel label={"text feild"}>
      <AutoField
        field={{ type: "text" }}
        onChange={onChange}
        value={value}
      />
    </FieldLabel>
  );
};

export default memo(TextInput);
