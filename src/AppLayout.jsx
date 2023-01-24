import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";

export const AppLayout = () => {
  return (
    <div
      style={{
        bgcolor: "#ECECEC",
        width: "80%",
        margin: "auto",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
};
