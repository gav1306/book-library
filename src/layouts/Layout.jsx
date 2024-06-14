import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-6 h-full pt-[120px]">
        <Outlet />
      </main>
      <Toaster richColors toastOptions={{}} />
    </>
  );
};

export default Layout;
