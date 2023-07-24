import { useValidate } from "../hooks";
import PasswordStatus from "./PasswordStatus";

const PasswordInput = () => {
  const { value, status, onChange } = useValidate();
  return (
    <div className="container">
      <div className="password">
        <label>
          <p>Enter your password</p>
          <input type="password" value={value} onChange={onChange} />
        </label>
        <PasswordStatus status={status} />
      </div>
    </div>
  );
};

export default PasswordInput;
