import { Schema } from "./types";

export const schema: Schema = {
  content: {
    type: "text",
  },
  as: {
    required: false,
    display_name: "As",
    exclude_empty_option: true,
    type: "option",
    options: [
      {
        value: "h1",
        name: "h1",
      },
      {
        value: "h2",
        name: "h2",
      },
      {
        value: "h3",
        name: "h3",
      },
      {
        value: "h4",
        name: "h4",
      },
      {
        value: "h5",
        name: "h5",
      },
      {
        value: "h6",
        name: "h6",
      },
      {
        value: "p",
        name: "p",
      },
      {
        value: "span",
        name: "span",
      },
    ],
    translatable: false,
    default_value: "span",
  },
  inverse: {
    required: false,
    display_name: "Inverse",
    type: "boolean",
    translatable: false,
  },
};
