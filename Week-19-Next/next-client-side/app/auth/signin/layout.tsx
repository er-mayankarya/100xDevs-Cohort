import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="p-1 border-b text-center">
        20 % OFF for the next 3 days!!
      </div>
      {children}
    </div>
  );
}
