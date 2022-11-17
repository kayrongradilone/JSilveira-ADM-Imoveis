import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import { useDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
  const {  setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Pagina Inicial",
        path: "/pagina-inicial",
        icon: "home",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Dashboard/>
        }
      />
      <Route
        path="/pagina-inicial"
        element={<Navigate to="/pagina-inicial" />}
      />
    </Routes>
  );
};