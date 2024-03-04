"use client"

import { useState } from "react";

interface initialForm {
  [key: string]: string;
}

export function useMultiStepForm() {
  const [form, setForm] = useState<initialForm>({});

  const updateField = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setForm( pervForm => ({
      ...pervForm,
      [e.target.name]: e.target.value,
    }));
  };

  return { form, setForm, updateField };
}