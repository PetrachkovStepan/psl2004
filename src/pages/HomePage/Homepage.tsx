import { useNavigate } from "react-router";

import Button from "components/Button";
import { DEFAULT_BUTTON } from "constants/buttonClassesCSS";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home page</h1>
      <Button
        className={DEFAULT_BUTTON}
        onClick={() => {
          navigate("form");
        }}
      >
        Form
      </Button>
    </>
  );
}

export default HomePage;
