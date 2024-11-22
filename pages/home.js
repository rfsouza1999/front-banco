// pages/login.js
import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const home = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ usuario, senha });
  };

  const goToCreateAccount = () => {
    router.push('/criar_conta');
  };

  return (
    <>
      <Head>
        <title>Banco de Sangue - Login</title>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>BANCO DE SANGUE</h1>
          <input
            name="usuario"
            className="input-field"
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            name="senha"
            className="input-field"
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <a href="/esqueceu-senha" className="forgot-password">Esqueceu a senha?</a>
          <button type="submit" className="button">Entrar</button>
          <div className="separator">ou</div>
          <button type="button" className="button" onClick={goToCreateAccount}>Criar conta</button>
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

        .forgot-password {
          text-align: center;
          font-size: 12px;
          color: #555;
          margin-top: -10px;
          text-decoration: none;
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
          background-color: #ff1a1a;
        }

        .separator {
          margin: 20px 0;
          font-size: 16px;
          color: #555;
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

export default home;
