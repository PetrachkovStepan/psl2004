import { ReactNode } from "react";

import "./styled.css";

interface FieldProps {
  count: number;
  children: ReactNode;
}

function FieldList({ count, children }: FieldProps) {
  return (
    <>
      {Array(count)
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
