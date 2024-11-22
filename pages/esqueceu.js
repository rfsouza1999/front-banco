// pages/recuperacao.js
import React, { useState } from 'react';
import Head from 'next/head';

const esqueceu = () => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log({ email, telefone });
  };

  return (
    <>
      <Head>
        <title>Banco de Sangue - Recuperação</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>BANCO DE SANGUE</h1>
          <input
            name="email"
            type="email"
            className="input-field"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            name="telefone"
            type="text"
            className="input-field"
            placeholder="TELEFONE"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <button type="submit" className="button">ENVIAR RECUPERAÇÃO</button>
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

export default esqueceu;
