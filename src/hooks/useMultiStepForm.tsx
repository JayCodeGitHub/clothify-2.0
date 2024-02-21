import { useState } from "react";

const initialForm = {
  fullName: "",
  email: "",
  address: "",
  country: "",
  cardName: "",
  cardNumber: "",
  cardDate: "",
  cardCvv: "",
};

export function useMultiStepForm() {
  const [form, setForm] = useState(initialForm);

  const updateField = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return { form, setForm, updateField, initialForm };
}