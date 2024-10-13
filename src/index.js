import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { InserirUmVeiculoPage } from "./pages/inserir-um-veiculo";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VeiculosPage } from "./pages/veiculos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <VeiculosPage />,
  },
  {
    path: "/inserir-um-veiculo",
    element: <InserirUmVeiculoPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
