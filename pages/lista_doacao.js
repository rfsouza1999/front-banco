// pages/listaDoacao.js
import { useRouter } from 'next/router';
import Head from 'next/head';

const lista_doacao = () => {
  const router = useRouter();

  const redirectToPage = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>Banco de Sangue</title>
        <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
      </Head>

      <div className="container">
        <h1>BANCO DE SANGUE</h1>

        {/* Botão que redireciona */}
        <input
          type="button"
          className="input-field"
          value="NOME 1"
          onClick={() => redirectToPage('/lista_doacao/')}
        />

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
          cursor: pointer;
          text-align: center;
        }

        .input-field:hover {
          background-color: #d08080;
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

export default lista_doacao;
