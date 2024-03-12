"use client";

import { useCallback } from "react";
import { useStore } from "@/state";

export const useAlert = () => {
  const setAlert = useStore((state) => state.setAlert);

  const dispatchAlert = useCallback((message: string) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }, []);

  return { dispatchAlert }
};