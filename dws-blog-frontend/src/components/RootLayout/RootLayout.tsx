import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar";
import "./RootLayout.scss";

export function RootLayout() {
  return (
    <div className="root-layout">
      <TopBar />

      <main className="root-layout__main">
        <Outlet />
      </main>
    </div>
  );
}
