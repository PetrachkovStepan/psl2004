import { Dispatch, HTMLAttributes, SetStateAction } from "react";

import Input from "components/Input";

import "./styled.css";

interface FormSettingProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  count: number;
  setInput: Dispatch<SetStateAction<number>>;
}
function FormSetting({ text, count, setInput }: FormSettingProps) {
  return (
    <div className="settingContainer">
      <h3>{text}</h3>
      <Input
        placeholder="count..."
        value={count}
        type="number"
        min="0"
        max="300"
        onChange={(e: { target: { value: SetStateAction<number> } }) => {
          setInput(e.target.value);
        }}
      ></Input>
    </div>
  );
}

export default FormSetting;
