import type { Config } from "@measured/puck";
import FormRenderer from './app/components/formRenderer';
import { FIELD_OPTIONS } from "./app/constants/Fields";
import {ReactElement} from "react";

type Props = {
  Form: { field: ReactElement };
};

export const config: Config<Props> = {
  components: {
    Form: {
      fields: {
        field: {
          type: "select",
          options: FIELD_OPTIONS,
        },
        // defaultValue: {
        //
        // }
      },
      render: FormRenderer,
    },
  },
};

export default config;
