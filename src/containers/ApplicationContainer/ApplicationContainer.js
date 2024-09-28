import { H1 } from "@salt-ds/core";

import { FormBuilderComponent } from "../../components";

import styles from "./ApplicationContainer.module.css";
import globalStyles from "../../Global.module.css";
import { formASchema } from "../../formSchemas/formA";
import { useForm } from "../../hooks";

export const ApplicationContainer = () => {
  const { formState, formValidation, onFormFieldChange, onFormSubmit } =
    useForm(formASchema);
  console.log("formState", formState);
  console.log("formValidation", formValidation);
  return (
    <section className={`${globalStyles.textCenter}`}>
      <H1>Dynamic Forms</H1>
      <FormBuilderComponent
        formSchema={formASchema}
        onFormFieldChange={onFormFieldChange}
        onFormSubmit={onFormSubmit}
      />
    </section>
  );
};
