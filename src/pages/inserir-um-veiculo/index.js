import React, { useState, useEffect } from "react";
import { Cabecalho } from "../../components/cabecalho";
import { Titulo } from "../../components/titulo";
import { ContainerPrincipal } from "../../components/container-principal";
import "./index.css";

export const InserirUmVeiculoPage = () => {
  const [placaDoVeiculo, setPlacaDoVeiculo] = useState("");
  const [nomeDoProprietario, setNomeDoProprietario] = useState("");
  const [numeroDoApartamento, setNumeroDoApartamento] = useState("");
  const [blocoDoApartamento, setBlocoDoApartamento] = useState("");
  const [modeloDoVeiculo, setModeloDoVeiculo] = useState("");
  const [corDoVeiculo, setCorDoVeiculo] = useState("");
  const [numeroDaVagaDeEstacionamento, setNumeroDaVagaDeEstacionamento] =
    useState("");

  const inserir = (e) => {
    e.preventDefault();

    console.log("Formulário preenchido com sucesso. Dados: ", {
      placaDoVeiculo,
      nomeDoProprietario,
      numeroDoApartamento,
      blocoDoApartamento,
      modeloDoVeiculo,
      corDoVeiculo,
      numeroDaVagaDeEstacionamento,
    });
    console.log("Inserindo os dados do veículo...");
    alert("Dados inseridos com sucesso!");
  };

  useEffect(() => {
    window.document.title = "Inserir um veículo";
  }, []);

  return (
    <>
      <Cabecalho />
      <ContainerPrincipal>
        <section className="inserir-um-veiculo-form-section">
          <Titulo>Inserir um veículo</Titulo>
          <form id="inserir-um-veiculo-form" onSubmit={inserir}>
            <div>
              <label htmlFor="placa-do-veiculo">Placa do veículo:</label>
              <input
                type="text"
                id="placa-do-veiculo"
                name="placa-do-veiculo"
                value={placaDoVeiculo}
                onChange={(e) => setPlacaDoVeiculo(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="nome-do-proprietario">
                Nome do proprietário:
              </label>
              <input
                type="text"
                id="nome-do-proprietario"
                name="nome-do-proprietario"
                value={nomeDoProprietario}
                onChange={(e) => setNomeDoProprietario(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="numero-do-apartamento">
                Número do apartamento:
              </label>
              <input
                type="number"
                id="numero-do-apartamento"
                name="numero-do-apartamento"
                value={numeroDoApartamento}
                onChange={(e) => setNumeroDoApartamento(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="bloco-do-apartamento">
                Bloco do apartamento:
              </label>
              <input
                type="text"
                id="bloco-do-apartamento"
                name="bloco-do-apartamento"
                value={blocoDoApartamento}
                onChange={(e) => setBlocoDoApartamento(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="modelo-do-veiculo">Modelo do veículo:</label>
              <input
                type="text"
                id="modelo-do-veiculo"
                name="modelo-do-veiculo"
                value={modeloDoVeiculo}
                onChange={(e) => setModeloDoVeiculo(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="cor-do-veiculo">Cor do veículo:</label>
              <input
                type="text"
                id="cor-do-veiculo"
                name="cor-do-veiculo"
                value={corDoVeiculo}
                onChange={(e) => setCorDoVeiculo(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="numero-da-vaga-de-estacionamento">
                Número da vaga de estacionamento:
              </label>
              <input
                type="number"
                id="numero-da-vaga-de-estacionamento"
                name="numero-da-vaga-de-estacionamento"
                value={numeroDaVagaDeEstacionamento}
                onChange={(e) =>
                  setNumeroDaVagaDeEstacionamento(e.target.value)
                }
                required
              />
            </div>

            <div>
              <button id="cadastrar-veiculo-button" type="submit">
                Cadastrar Veículo
              </button>
            </div>
          </form>
        </section>
      </ContainerPrincipal>
    </>
  );
};
