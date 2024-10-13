import { useState } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import { RAIBOW_BUTTON } from "../../constants/buttonClassesCSS";
import FormSetting from "../../components/FormSetting";

function FormPage() {
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [inputCount, setInputCount] = useState<number>(1);
  const [textAreaCount, setTextAreaCount] = useState<number>(1);
  const [checkBoxCount, setCheckBoxCount] = useState<number>(2);

  const generateForm = () => {
    if (inputCount | textAreaCount | checkBoxCount) {
      setIsGenerated(true);
    } else {
      setIsGenerated(false);
    }
  };

  return (
    <>
      <h1>Form page</h1>
      <FormSetting text={"Input"} count={inputCount} setInput={setInputCount} />
      <FormSetting
        text={"Text area"}
        count={textAreaCount}
        setInput={setTextAreaCount}
      />
      <FormSetting
        text={"Check box"}
        count={checkBoxCount}
        setInput={setCheckBoxCount}
      />
      <Button className={RAIBOW_BUTTON} onClick={generateForm}>
        Build
      </Button>
      {isGenerated ? (
        <Form
          inputCount={Number(inputCount)}
          textAreaCount={Number(textAreaCount)}
          checkBoxCount={Number(checkBoxCount)}
        ></Form>
      ) : null}
    </>
  );
}

export default FormPage;
