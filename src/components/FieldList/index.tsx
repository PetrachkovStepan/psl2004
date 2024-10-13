import { ReactNode } from "react";

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
          <div key={Math.random()}>{children}</div>
        ))}
    </>
  );
}

export default FieldList;