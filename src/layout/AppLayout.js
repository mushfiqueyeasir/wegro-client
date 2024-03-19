import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
const AppLayout = () => {
  return (
    <>
      <Header />
      <div>
        <div className="mt-[4rem]">
          <main className={" min-h-[93.1vh]"}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
