import { ReactNode } from "react";

import "./styled.css";

interface FieldProps {
  count: number;
  children: ReactNode;
}

function FieldList({ count, children }: FieldProps) {
  const validate = (count: number) => {
    if(Number(count) < 0){
      return 0
    }
    return count
  }
  return (
    <>
      {Array(validate(count))
        .fill(0)
        .map(() => (
          <div className="fieldItem" key={Math.random()}>
            {children}
          </div>
        ))}
    </>
  );
}

export default FieldList;
