import type { Config } from "@measured/puck";
import FormRenderer from './app/components/formRenderer';
import {FIELD_OPTIONS, FIELDS} from "./app/constants/Fields";

type Props = {
  Form: {
    items: Array<{ fieldType: string, fieldLabel: string, }>,
    submitButtonLabel: string
  };
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      label: "Heading Block",
      fields: {
        title: {
          type: "string"
        },
      },
      defaultProps: {
        title: "Enter title of the form"
      },
      render: ({ title }) => {
        return <h2>{title}</h2>;
      },
    },
    Form: {
      fields: {
        items: {
          label: "Add fields",
          type: "array",
          arrayFields: {
            fieldType: {
              label: "Select Field Type",
              type: "select",
              options: FIELD_OPTIONS,
            },
            fieldLabel: {
              label: "Enter Field Label",
              type: "text"
            }
          },
        },
        submitButtonLabel: {
          label: "Submit button Label",
          type: "text"
        },
      },
      defaultProps: {
        submitButtonLabel: "Submit",
      },
      render: FormRenderer,
    },
  },
};

export default config;
