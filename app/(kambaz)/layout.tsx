import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
   <div id="wd-kambaz">
  <div className="d-flex">
    <div>
      <KambazNavigation />
    </div>
    <div className="flex-fill" style={{ marginLeft: "120px" }}>
      {children}
    </div>
  </div>
</div>

);}
