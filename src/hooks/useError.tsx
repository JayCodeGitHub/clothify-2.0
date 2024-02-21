import { useState } from "react";

const initialError = {
  fullName: "",
  email: "",
  address: "",
  country: "",
  cardName: "",
  cardNumber: "",
  cardDate: "",
  cardCvv: "",
};

export function useError() {
  const [error, setError] = useState(initialError);
  return { error, setError, initialError };
}