import React, { useState, useEffect } from "react";
import Header from "../Header";
import InputChanger from "../InputChanger";

const Home = () => {
  const [pessoa, setPessoa] = useState({});

  const [pessoas, setPessoas] = useState([]);

  useEffect(() => {
    console.log("montou");
  }, []);

  function atualizarPessoa(event) {
    setPessoa({
      ...pessoa,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    console.log(pessoa.id);

    event.preventDefault();
    setPessoas([...pessoas, pessoa]);
  }

  return (
    <Header produtos="teste">
      <h1>Bem vindo ao meu site</h1>
      <h1>{pessoa.nome}</h1>
      <h1>{pessoa.peso}</h1>
      <h1>{pessoa.state}</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <InputChanger
          name="nome"
          placeholder="Nome da pessoa"
          onChange={(event) => atualizarPessoa(event)}
        />
        <InputChanger
          name="peso"
          placeholder="Peso da pessoa"
          onChange={(event) => atualizarPessoa(event)}
        />
        <InputChanger
          name="state"
          placeholder="Estado da pessoa"
          onChange={(event) => atualizarPessoa(event)}
        />
        <button type="submit">Adicionar pessoa</button>
      </form>
      {pessoas.map((pessoa) => (
        <div key={pessoa.id}>
          <h1>{pessoa.nome}</h1>
          <h1>{pessoa.peso}</h1>
          <h1>{pessoa.state}</h1>
          <hr />
        </div>
      ))}
    </Header>
  );
};

export default Home;
