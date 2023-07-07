import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashbord from "../Dashboard/Dashbord";
import OrderSettings from "../OrderSettings/OrderSettings";
import { adminRoutes } from "./routes";

export default function AppRouter() {
  return (
    <Routes>
        {adminRoutes.map(route =>
            <Route path={route.path} element={route.element} key={route.path}/>
        )}

      <Route path={"/*"} element={<Navigate to={"/404"} replace />} />
    </Routes>
  );
}
