"use client"

import { useState } from "react";

interface initialForm {
  [key: string]: string;
}

interface initialError {
  [key: string]: string;
}

export function useForm() {
  const [form, setForm] = useState<initialForm>({});
  const [error, setError] = useState<initialError>({});

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

  return { form, setForm, updateField, error, setError };
}