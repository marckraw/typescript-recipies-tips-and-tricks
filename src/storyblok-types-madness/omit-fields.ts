import { omitFields, omitOptions, omitProperties } from "./utils";
import { schema } from "./data";
import { Schema } from "./types";

const run = () => {
  const OmmitedFieldsSchema = {
    ...omitFields<Schema>(schema, ["as"]),
  };

  const OmmitedAndModifiedSettingsInFieldSchema: Schema = {
    ...schema,
    as: {
      ...omitProperties(schema.as, ["pos", "translatable"]),
      default_value: "h5",
      options: omitOptions(schema.as.options, ["h1"]),
    },
  };

  console.log("Initial Schema");
  console.log(schema);
  console.log(" ");
  console.log(" ");

  console.log("And this is Schema with omitted fields: ");
  console.log(OmmitedFieldsSchema);
  console.log(" ");
  console.log(" ");

  console.log("This is Schema with changed settings of fields: ");
  console.log(OmmitedAndModifiedSettingsInFieldSchema);
  console.log(" ");
  console.log(" ");
};

export { run };
