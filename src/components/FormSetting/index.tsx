import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import Input from "../Input";

interface FormSettingProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  count: number;
  setInput: Dispatch<SetStateAction<number>>;
}
function FormSetting({ text, count, setInput }: FormSettingProps) {
  return (
    <>
      <h3>{text}</h3>
      <Input
        placeholder="count..."
        value={count}
        type ="number"
        onChange={(e: { target: { value: SetStateAction<number>; }; }) => setInput(e.target.value)}
      ></Input>
    </>
  );
}

export default FormSetting;
