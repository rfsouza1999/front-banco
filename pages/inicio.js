// pages/index.js
import Head from 'next/head';
import { useRouter } from 'next/router';

const inicio = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Banco de Sangue</title>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <h1>BANCO DE SANGUE</h1>
        
        {/* Botão para "Preciso de Doação" */}
        <button onClick={() => router.push('/dados_pessoa')} className="button">
          PRECISO DE DOAÇÃO
        </button>

        {/* Botão para "Quero Doar" */}
        <button onClick={() => router.push('/dados_pessoa2')} className="button">
          QUERO DOAR
        </button>

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
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          background-color: #ff4d4d;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          color: white;
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

export default inicio;
