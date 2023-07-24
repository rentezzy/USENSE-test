import { memo } from "react";
import { TStatus } from "../types";

interface IProps {
  status: TStatus;
}

const vocabulary: Record<string, string> = {
  less: "The password must contain more than 8 characters!",
  easy: "The password is too easy!",
  medium:
    "You can come up with a better password, use numbers, letters and symbols!",
  strong: "Perfect!",
};

const PasswordStatus: React.FC<IProps> = ({ status }) => {
  return (
    <div className="password__status__row">
      <div className={`password__status status_${status}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {vocabulary[status]}
    </div>
  );
};

export default memo(PasswordStatus);
