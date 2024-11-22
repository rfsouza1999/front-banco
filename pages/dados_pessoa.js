
import React from 'react';
import Head from 'next/head';

const dados_pessoa = () => {
  return (
    <>
      <Head>
        <title>Banco de Sangue</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <h1>BANCO DE SANGUE</h1>
        <form action="/api/dados_pessoa" method="post">
          <input name='Pessoa_Nome' type="text" className="input-field" placeholder="NOME" />
          <input name='Pessoa_Cpf' type="text" className="input-field" placeholder="CPF" />
          <input name='Pessoa_Telefone1' type="text" className="input-field" placeholder="TELEFONE PRINCIPAL" />
          <input name='Pessoa_Telefone2' type="text" className="input-field" placeholder="TELEFONE SECUNDÁRIO" />
          <input name='Pessoa_Peso' type="text" className="input-field" placeholder="PESO" />
          <input name='Pessoa_Altura' type="text" className="input-field" placeholder="ALTURA" />
          <input name='Pessoa_TipoSanguineo' type="text" className="input-field" placeholder="TIPO SANGUÍNEO" />
          <input name='Pessoa_Sexo' type="text" className="input-field" placeholder="SEXO" />
          <input name='Pessoa_Doacoes' type="text" className="input-field" placeholder="É DOADOR? SIM/NÃO" />
          <input name='Pessoa_DataNascimento' type="text" className="input-field" placeholder="NASCIMENTO" />
          <input
            name='Pessoa_Endereco'
            type="text"
            className="input-field address"
            onClick={() => window.open('/endereco/', '_blank')}
            placeholder="ENDEREÇO"
            autoComplete="off"
          />
          <button className="button">SALVAR</button>
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
export default dados_pessoa;