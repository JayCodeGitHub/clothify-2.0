"use client"

import { useState } from "react";

interface initialError {
  [key: string]: string;
}

export function useError() {
  const [error, setError] = useState<initialError>({});
  return { error, setError};
}