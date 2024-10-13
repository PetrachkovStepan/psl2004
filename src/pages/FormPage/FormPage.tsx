import { useState } from "react";

import { useNavigate } from "react-router";

import Form from "components/Form";
import Button from "components/Button";
import FormSetting from "components/FormSetting";
import { DEFAULT_BUTTON, RAIBOW_BUTTON } from "constants/buttonClassesCSS";

import "./styled.css";

function FormPage() {
  const navigate = useNavigate();
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
    <div className="pageContainer">
      <h1>Form page</h1>
      <div className="formSettings">
        <FormSetting
          text={"Input"}
          count={inputCount}
          setInput={setInputCount}
        />
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
      </div>
      {isGenerated ? (
        <Form
          inputCount={Number(inputCount)}
          textAreaCount={Number(textAreaCount)}
          checkBoxCount={Number(checkBoxCount)}
        ></Form>
      ) : null}
      <Button
        className={DEFAULT_BUTTON}
        onClick={() => {
          navigate("/");
        }}
      >
        Back home
      </Button>
    </div>
  );
}

export default FormPage;
