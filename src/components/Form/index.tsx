import Input from "components/Input";
import TextArea from "components/TextArea";
import CheckBox from "components/CheckBox";
import FieldList from "components/FieldList";

import "./styled.css";

interface FormProps {
  inputCount: number;
  textAreaCount: number;
  checkBoxCount: number;
}

function Form({ inputCount, textAreaCount, checkBoxCount }: FormProps) {
  console.log(inputCount, textAreaCount, checkBoxCount);

  return (
    <div className="formContainer">
      <FieldList count={inputCount}>
        <div>Input</div>
        <Input></Input>
      </FieldList>
      <FieldList count={textAreaCount}>
        <div>Text Area</div>
        <TextArea></TextArea>
      </FieldList>
      <FieldList count={checkBoxCount}>
        <CheckBox></CheckBox>
        <div>Check Box</div>
      </FieldList>
    </div>
  );
}

export default Form;
