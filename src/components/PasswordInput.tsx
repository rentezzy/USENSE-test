import { useState, useEffect } from "react";
import PasswordStatus from "./PasswordStatus";
import { TStatus } from "../types";

const PasswordInput = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<TStatus>("empty");

  useEffect(() => {
    if (!value.length) {
      setStatus("empty");
      return;
    }
    if (value.length < 8) {
      setStatus("easy");
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

  return (
    <div>
      <label>
        <p>Enter your password</p>
        <input
          type="password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <PasswordStatus status={status} />
    </div>
  );
};

export default PasswordInput;
