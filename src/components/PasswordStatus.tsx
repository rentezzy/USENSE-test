import { memo } from "react";
import { TStatus } from "../types";

interface IProps {
  status: TStatus;
}

const PasswordStatus: React.FC<IProps> = ({ status }) => {
  return <div>PasswordStatus:{status}</div>;
};

export default memo(PasswordStatus);
