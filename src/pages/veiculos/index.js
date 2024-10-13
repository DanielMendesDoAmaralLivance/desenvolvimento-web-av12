import React, { useEffect, useState } from "react";
import { Cabecalho } from "../../components/cabecalho";
import { ContainerPrincipal } from "../../components/container-principal";
import "./index.css";
import { Titulo } from "../../components/titulo";
import { getQtdVagas, getVeiculos } from "../../utils/api";

export const VeiculosPage = () => {
  const [data, setData] = useState();
  const [qtdVagas, setQtdVagas] = useState();

  useEffect(() => {
    window.document.title = "Veículos";
    listar();
  }, []);

  const listar = () => {
    setData(getVeiculos());
    setQtdVagas(getQtdVagas());
  };

  const editar = (id) => {
    const resposta = window.confirm(`Você quer editar #${id}?`);

    if (resposta) console.log("Editando...");
    else console.log("Cancelando edição...");
  };

  const deletar = (id) => {
    const resposta = window.confirm(`Você quer deletar #${id}?`);

    if (resposta) console.log("Deletando...");
    else console.log("Cancelando deleção...");
  };

  return (
    <>
      <Cabecalho />
      <ContainerPrincipal>
        <section className="veiculos-section">
          <Titulo>Veículos</Titulo>
          <table id="veiculos-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Placa do veículo</th>
                <th>Nome do proprietário</th>
                <th>Número do apartamento</th>
                <th>Bloco do apartamento</th>
                <th>Modelo do veículo</th>
                <th>Cor do veículo</th>
                <th>Número da vaga de estacionamento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>#{x.id}</td>
                    <td>{x.placaDoVeiculo}</td>
                    <td>{x.nomeDoProprietario}</td>
                    <td>{x.numeroDoApartamento}</td>
                    <td>{x.blocoDoApartamento}</td>
                    <td>{x.modeloDoVeiculo}</td>
                    <td>{x.corDoVeiculo}</td>
                    <td>{x.numeroDaVagaDeEstacionamento}</td>
                    <td>
                      <i
                        className="fa fa-pencil"
                        onClick={() => editar(x.id)}
                      ></i>{" "}
                      <i
                        className="fa fa-trash"
                        onClick={() => deletar(x.id)}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>

        <section className="vagas-section">
          <Titulo>Vagas</Titulo>

          <aside className="legenda-vagas">
            <p>
              Cada quadrado abaixo representa uma vaga de estacionamento e seu
              respectivo número. Vagas{" "}
              <span className="indisponivel">indisponíveis</span> são destacadas
              em <span className="indisponivel">vermelho</span>, enquanto as
              vagas <span className="disponivel">disponíveis</span> aparecem em{" "}
              <span className="disponivel">verde</span>.
            </p>
          </aside>

          <div className="vagas-section-container" id="vagas-section-container">
            {qtdVagas &&
              data &&
              Array.from({ length: qtdVagas }).map((_, vaga) => {
                const vagaOcupada = data.some(
                  (x) => x.numeroDaVagaDeEstacionamento === vaga
                );

                return vagaOcupada ? (
                  <div className="vaga indisponivel" key={vaga}>
                    {vaga}
                  </div>
                ) : (
                  <div className="vaga disponivel" key={vaga}>
                    {vaga}
                  </div>
                );
              })}
          </div>
        </section>
      </ContainerPrincipal>
    </>
  );
};
