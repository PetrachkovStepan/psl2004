import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styled.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className: string;
}
function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
