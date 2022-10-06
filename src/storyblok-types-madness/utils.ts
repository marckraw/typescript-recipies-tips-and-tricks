import { Schema as TextSchema, StoryblokGenericFieldType } from "./types";
import { Headings, StoryblokKeyValueOption } from "./types";

export function omitOptions<TOption = Headings>(
  options: StoryblokKeyValueOption<TOption>[],
  toOmit: StoryblokKeyValueOption<TOption>["name"][]
) {
  return options.filter((option) => !toOmit.includes(option.name));
}

export function omitFields<TFields = TextSchema>(
  fields: TFields extends Record<string, StoryblokGenericFieldType>
    ? TFields
    : any,
  toOmit: Array<keyof TFields>
) {
  const newObj = {} as any; // TODO: Have to figure out types here, right now the return type is any...

  Object.entries(fields).map((entry) => {
    if (!toOmit.includes(entry[0] as keyof TFields)) {
      newObj[entry[0]] = entry[1];
    }
  });

  return newObj;
}

export function omitProperties<TProperties>(
  properties: TProperties extends Record<string, StoryblokGenericFieldType>
    ? TProperties
    : any,
  toOmit: Array<keyof TProperties>
) {
  return omitFields<TProperties>(properties, toOmit);
}
