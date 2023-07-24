import { useState, useEffect } from "react";
import { TStatus } from "./types";

export const useValidate = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<TStatus>("empty");

  useEffect(() => {
    if (!value.length) {
      setStatus("empty");
      return;
    }
    if (value.length < 8) {
      setStatus("less");
      return;
    }

    let validations = 0;
    if (RegExp(/[a-zA-Z]/).test(value)) validations += 1; // letters check
    if (RegExp(/[^\w\s]/).test(value)) validations += 1; //symbols check
    if (RegExp(/\d/).test(value)) validations += 1; // numbers check

    const currentStatus: TStatus =
      validations === 1 ? "easy" : validations === 2 ? "medium" : "strong";
    setStatus(currentStatus);
  }, [value, setStatus]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return { value, status, onChange };
};
