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
      resolveFields: ({ props: { items } }) => {
        let arrayFields =  {
          fieldType: {
            label: "Select Field Type",
            type: "select",
            options: FIELD_OPTIONS,
          },
          fieldLabel: {
            label: "Enter Field Label",
            type: "text"
          }
        };
        const selectFieldType =  items.find(item => item.fieldType === FIELDS.SELECT);
        let newSelectFieldOptions = {};
        if (selectFieldType) {
          newSelectFieldOptions = {
            selectOptions: {
              label: "Add options for select field",
              type: "array",
              arrayFields: {
                name: "text",
                value: "text"
              }
            }
          };
        }
        const fields = {
          items: {
            label: "Add fields",
            type: "array",
            arrayFields,
          },
          submitButtonLabel: {
            label: "Submit button Label",
              type: "text"
          },
          ...newSelectFieldOptions,
        };
        return fields;
      },
      defaultProps: {
        submitButtonLabel: "Submit",
      },
      render: FormRenderer,
    },
  },
};

export default config;
