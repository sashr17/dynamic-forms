import {
  Button,
  Dropdown,
  FormField,
  FormFieldLabel,
  GridItem,
  GridLayout,
  H2,
  Input,
  Option,
} from "@salt-ds/core";
import { FORM_TYPE } from "../../constants";

import styles from "./FormBuilderComponent.module.css";

export const FormBuilderComponent = ({
  formSchema,
  onFormFieldChange,
  onFormSubmit,
}) => {
  const constructFormField = (formField) => {
    switch (formField.type) {
      case FORM_TYPE.input:
        return (
          <FormField className={styles.formField}>
            <FormFieldLabel>{formField.label}</FormFieldLabel>
            <Input
              onChange={onFormFieldChange}
              inputProps={{ name: formField.name }}
            />
          </FormField>
        );
      case FORM_TYPE.dropdown:
        return (
          <FormField className={styles.formField}>
            <FormFieldLabel>{formField.label}</FormFieldLabel>
            <Dropdown
              onSelectionChange={(_, item) =>
                onFormFieldChange({
                  target: { name: formField.name, value: item },
                })
              }
              name={formField.name}
            >
              {formField.options.map((option) => (
                <Option value={option.label} key={option.value} />
              ))}
            </Dropdown>
          </FormField>
        );
    }
  };

  return (
    <>
      <H2>{formSchema.name}</H2>
      <form name={formSchema.name} noValidate={true} onSubmit={onFormSubmit}>
        <GridLayout columns={formSchema.columns} rows={formSchema.rows}>
          {formSchema.fields.map((formField) => (
            <GridItem
              key={formField._uid}
              colSpan={formField.colSpan}
              rowSpan={formField.rowSpan}
            >
              {constructFormField(formField)}
            </GridItem>
          ))}
        </GridLayout>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};
