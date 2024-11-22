// pages/index.js (ou outro nome)
import Head from 'next/head';

const link_compartilhar = () => {
  return (
    <>
      <Head>
        <title>Banco de Sangue</title>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <h1>BANCO DE SANGUE</h1>

        {/* Botão de Link de Compartilhamento */}
        <a href="/link_compartilhar" className="button" target="_blank" rel="noopener noreferrer">
          LINK DE COMPARTILHAMENTO
        </a>

        <p className="signature">~By Rafael</p>
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
          width: 300px;
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

        .button {
          display: block;
          width: calc(100% - 20px);
          padding: 10px;
          margin: 10px auto;
          background-color: #ff4d4d;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          color: white;
          text-decoration: none; 
          text-align: center;
        }

        .button:hover {
          background-color: #f5b7b7;
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

export default link_compartilhar;
