import "./styled.css";

function Input({ ...props }) {
  return <input placeholder="Text..." {...props} className="input" />;
}

export default Input;
