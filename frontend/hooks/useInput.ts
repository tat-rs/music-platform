import React, { useState } from "react";

export function useInput(initialState: string) {
  const [value, setValue] = useState(initialState);
  function onChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setValue(evt.target.value)
  }

  return {
    value,
    onChange
  }
}