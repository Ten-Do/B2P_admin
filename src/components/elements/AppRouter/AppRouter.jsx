import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashbord from "../Dashboard/Dashbord";
import OrderSettings from "../OrderSettings/OrderSettings";

export default function AppRouter() {
  return (
    <Routes>
      <Route path={"/"} element={<Dashbord />} />
      <Route path={"/settings"} element={<OrderSettings />} />
      <Route path={"/*"} element={<Navigate to={"/404"} replace />} />
    </Routes>
  );
}
