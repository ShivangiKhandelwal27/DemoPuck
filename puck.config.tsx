import type { Config } from "@measured/puck";
import FormRenderer from './app/components/formRenderer';
import { FIELD_OPTIONS, FIELDS } from "./app/constants/Fields";

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
            type: FIELDS.SELECT,
            options: FIELD_OPTIONS,
          },
          fieldLabel: {
            label: "Enter Field Label",
            type: FIELDS.TEXT,
          }
        };
        const selectOrRadioFieldType =  items.find(item => item.fieldType === FIELDS.SELECT || FIELDS.RADIO);
        let newSelectFieldOptions = undefined;
        if (selectOrRadioFieldType) {
          const radioOptions = { max: 2};
          newSelectFieldOptions = {
            type: FIELDS.ARRAY,
            label: "Add options for select field",
            arrayFields: {
              label: {
                type: FIELDS.TEXT,
                label: 'Add label',
              },
              value: {
                type: FIELDS.TEXT,
                label: 'Add text',
              },
            },
            ...(selectOrRadioFieldType.fieldType === FIELDS.RADIO ? radioOptions : {})
          };
        }
        return {
          items: {
            label: "Add fields",
            type: FIELDS.ARRAY,
            arrayFields: selectOrRadioFieldType ? {
              ...arrayFields,
              selectOptions: newSelectFieldOptions
            } : arrayFields,
          },
          submitButtonLabel: {
            label: "Submit button Label",
            type: FIELDS.TEXT,
          },
        };
      },
      defaultProps: {
        submitButtonLabel: "Submit",
        items: [],
      },
      render: FormRenderer,
    },
  },
};

export default config;
