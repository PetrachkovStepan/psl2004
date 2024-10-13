import { useNavigate } from "react-router";

import Button from "components/Button";
import { DEFAULT_BUTTON } from "constants/buttonClassesCSS";

import "./styled.css";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="pageContainer">
      <h1>404 page</h1>

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
