import { useState } from "react";

export const useInput = (initialValue: any) => {
  const [value, setValue] = useState(initialValue ?? "");

  const handleChange = (e: any) => {
    e.preventDefault();
    const { value } = e.target;
    setValue(value);
  };

  return {
    value,
    onChange: handleChange,
    setValue,
  };
};
