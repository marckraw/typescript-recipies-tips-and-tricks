export interface StoryblokGenericFieldType {
  display_name?: string;
  required?: boolean;
  translatable?: boolean;
  description?: string;
  pos?: number;
}

export interface StoryblokTextFieldType extends StoryblokGenericFieldType {
  type: "text";
  default_value?: string;
  no_translate?: boolean;
  max_length?: number;
  regex?: string;
  rtl?: boolean;
}
export interface StoryblokOptionFieldType<TOptions = string>
  extends StoryblokGenericFieldType {
  type: "option";
  options: StoryblokKeyValueOption<TOptions>[];
  source?:
    | "internal_languages"
    | "internal_stories"
    | "external"
    | "internal"
    | "";
  datasource_slug?: string;
  external_datasource?: string;
  folder_slug?: string;
  filter_content_type?: string[];
  default_value?: StoryblokKeyValueOption<TOptions>["value"];
  exclude_empty_option?: boolean;
  use_uuid?: boolean;
}
export interface StoryblokBooleanFieldType extends StoryblokGenericFieldType {
  type: "boolean";
}

export type Headings = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";

export interface StoryblokKeyValueOption<TOption = string> {
  value: TOption;
  name: TOption;
}

export interface Schema {
  content: StoryblokTextFieldType;
  as: StoryblokOptionFieldType<Headings>;
  inverse: StoryblokBooleanFieldType;
}
