import { H1 } from "@salt-ds/core";

import { FormBuilderComponent } from "../../components";

import styles from "./ApplicationContainer.module.css";
import { formASchema } from "../../formSchemas/formA";

export const ApplicationContainer = () => {
  return (
    <section className={styles.root}>
      <H1>Dynamic Forms</H1>
      <FormBuilderComponent formSchema={formASchema} />
    </section>
  );
};
