import { useState } from "react";

export const useForm = (formSchema) => {
  console.log("In useForm");
  const [formState, setFormState] = useState({});
  const [formValidation, setFormValidation] = useState({});

  const onFormFieldChange = (evt) => {
    const { name, value, checked = null } = evt.target;

    setFormState({
      ...formState,
      [name]: value,
    });
    validateForm(name, value);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    console.log("Form Data >> ", Object.fromEntries(formData.entries()));
  };

  const validationMethods = {
    minLength: (minLength, value) => value.length < minLength,
    maxLength: (maxLength, value) => value.length > maxLength,
  };

  const validateForm = (name, val) => {
    const validationRules = formSchema.fields.filter(
      (field) => name === field.name
    )?.[0]?.validations;
    for (let i = 0; i < validationRules.length; i++) {
      const { type, value, message } = validationRules[i];
      if (validationMethods[type](value, val)) {
        setFormValidation({
          ...formValidation,
          [name]: message,
        });
      }
    }
  };

  return {
    formState,
    formValidation,
    onFormFieldChange,
    onFormSubmit,
    validateForm,
  };
};
