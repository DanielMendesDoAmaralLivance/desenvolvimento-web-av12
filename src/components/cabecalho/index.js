import React from "react";
import "./index.css"
import { Logo64px } from "../logo";

export const Cabecalho = () => {
  return (
    <header className="menu">
      <nav>
        <ul>
          <li>
            <a href="/">
              <Logo64px />
            </a>
          </li>
          <li>
            <a href="/">Veículos</a>
          </li>
          <li>
            <a href="/inserir-um-veiculo">Inserir um veículo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
