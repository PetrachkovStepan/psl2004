import TextArea from "../TextArea";
import CheckBox from "../CheckBox";
import Input from "../Input";

interface FormProps {
  inputCount: number;
  textAreaCount: number;
  checkBoxCount: number;
}

function Form({ inputCount, textAreaCount, checkBoxCount }: FormProps) {
  console.log(inputCount, textAreaCount, checkBoxCount);

  return (
    <>
      <Input></Input>
      <TextArea></TextArea>
      <CheckBox></CheckBox>
    </>
  );
}

export default Form;
