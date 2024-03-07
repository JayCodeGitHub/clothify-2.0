"use client"

import { useState } from "react";

interface initialForm {
  [key: string]: string;
}

interface initialError {
  [key: string]: string;
}

export function useForm(initialForm: initialForm, initialError: initialError) {
  const [form, setForm] = useState<initialForm>(initialForm);
  const [error, setError] = useState<initialError>(initialError);

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