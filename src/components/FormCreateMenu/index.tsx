import { RAIBOW_BUTTON } from "../../constants/buttonClassesCSS";
import Button from "../Button";
import FormSetting from "../FormSetting";

function FormCreateMenu() {
  return (
    <>
      <FormSetting text={"Input"}/>
      <FormSetting text={"Text area"}/>
      <FormSetting text={"Check box"}/>
      <Button className={RAIBOW_BUTTON}>Build</Button>
    </>
  );
}

export default FormCreateMenu;
