import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import Input from "../Input";
import FieldList from "../FieldList";

interface FormProps {
  inputCount: number;
  textAreaCount: number;
  checkBoxCount: number;
}

function Form({ inputCount, textAreaCount, checkBoxCount }: FormProps) {
  console.log(inputCount, textAreaCount, checkBoxCount);

  return (
    <>
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
    </>
  );
}

export default Form;
