import { ReactNode } from "react";

const Highlight = ({ children }: { children: ReactNode }) => {
  return (
    <span className="bg-secondary text-secondary-foreground rounded-sm px-1">
      {children}
    </span>
  );
};

export default Highlight;
