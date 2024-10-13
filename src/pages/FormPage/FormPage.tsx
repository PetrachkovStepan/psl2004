import Form from "../../components/Form";
import FormCreateMenu from "../../components/FormCreateMenu";

function FormPage() {
  return (
    <>
      <h1>Form page</h1>
      <FormCreateMenu/>
      <Form inputCount={2} textAreaCount={2} checkBoxCount={2}></Form>
    </>
  );
}

export default FormPage;
