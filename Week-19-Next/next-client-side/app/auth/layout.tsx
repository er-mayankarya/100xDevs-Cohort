import { ReactNode } from "react";

export default function ({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="p-2 border-b text-right">Layout from the Auth</div>
      {children}
    </div>
  );
}
