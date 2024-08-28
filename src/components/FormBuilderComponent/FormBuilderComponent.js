import {
  Dropdown,
  FormField,
  FormFieldLabel,
  GridItem,
  GridLayout,
  H2,
  Input,
} from "@salt-ds/core";
import { FORM_TYPE } from "../../constants";

import styles from "./FormBuilderComponent.module.css";

export const FormBuilderComponent = ({ formSchema }) => {
  const constructFormField = (formField) => {
    switch (formField.type) {
      case FORM_TYPE.input:
        return (
          <FormField className={styles.formField}>
            <FormFieldLabel>{formField.label}</FormFieldLabel>
            <Input />
          </FormField>
        );
      case FORM_TYPE.dropdown:
        return (
          <FormField className={styles.formField}>
            <FormFieldLabel>{formField.label}</FormFieldLabel>
            <Dropdown />
          </FormField>
        );
    }
  };

  return (
    <>
      <H2>{formSchema.name}</H2>
      <GridLayout columns={formSchema.columns} rows={formSchema.rows}>
        {formSchema.fields.map((formField) => (
          <GridItem colSpan={formField.colSpan} rowSpan={formField.rowSpan}>
            {constructFormField(formField)}
          </GridItem>
        ))}
      </GridLayout>
    </>
  );
};
