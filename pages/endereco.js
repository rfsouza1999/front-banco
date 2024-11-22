import React from 'react';
import Head from 'next/head';

const endereco = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    window.close(); // Fecha a janela após o envio do formulário (se permitido pelo navegador)
  };

  return (
    <>
      <Head>
        <title>Banco de Sangue - Endereço</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <form action="/endereco/" method="post" onSubmit={handleSubmit}>
          <h1>BANCO DE SANGUE</h1>
          <input name="Endereco_Cep" type="text" className="input-field" placeholder="CEP" />
          <input name="Endereco_Rua" type="text" className="input-field" placeholder="RUA" />
          <input name="Endereco_Numero" type="text" className="input-field" placeholder="NÚMERO" />
          <input name="Endereco_Bairro" type="text" className="input-field" placeholder="BAIRRO" />
          <input name="Endereco_Cidade" type="text" className="input-field" placeholder="CIDADE" />
          <input name="Endereco_Estado" type="text" className="input-field" placeholder="ESTADO" />
          <input name="Endereco_Pais" type="text" className="input-field" placeholder="PAÍS" />
          <input name="Endereco_Obs" type="text" className="input-field" placeholder="OBSERVAÇÃO" />
          <button type="submit" className="button">SALVAR</button>
          <p className="signature">~By Rafael</p>
        </form>
      </div>

      {/* Estilos CSS */}
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #330000;
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .container {
          width: 320px;
          text-align: center;
          border: 1px solid #ccc;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
        }

        h1 {
          font-family: 'Italianno', cursive;
          font-size: 36px;
          color: #8B0000;
          margin-bottom: 40px;
        }

        .input-field {
          display: block;
          width: 90%;
          padding: 10px;
          margin: 10px auto;
          background-color: #f2dede;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          color: #000;
          text-align: left;
        }

        .input-field::placeholder {
          color: #000;
          opacity: 0.5;
        }

        .button {
          display: block;
          width: 90%;
          padding: 10px;
          margin: 10px auto;
          background-color: #ff4d4d;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          color: white;
        }

        .button:hover {
          background-color: #ff3333;
        }

        .signature {
          font-family: 'Italianno', cursive;
          font-size: 22px;
          color: #8B0000;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
};

export default endereco;
