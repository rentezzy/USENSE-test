import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PasswordInput from "./components/PasswordInput";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <PasswordInput />
  </React.StrictMode>
);
