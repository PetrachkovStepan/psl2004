import Input from "../Input";

interface FormSettingProps {
  text: string;
}
function FormSetting({text}: FormSettingProps) {
  return (
    <>
      <h3>{text}</h3>
      <Input></Input>
    </>
  );
}

export default FormSetting;
