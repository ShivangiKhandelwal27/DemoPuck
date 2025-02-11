import type { Config } from "@measured/puck";
import FormRenderer from './app/components/formRenderer';
import { FIELD_OPTIONS } from "./app/constants/Fields";

type Props = {
  Form: { items: Array<{ fieldType: string, fieldLabel: string, }> };
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
          type: "array",
          arrayFields: {
            fieldType: {
              type: "select",
              options: FIELD_OPTIONS,
            },
            fieldLabel: {
              type: "text"
            }
          },
        },
      },
      render: FormRenderer,
    },
  },
};

export default config;
