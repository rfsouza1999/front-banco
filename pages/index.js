// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <Link href="/criar_conta">Ir para a página Criar conta</Link>
      <Link href="/dados_pessoa">Ir para a página Dados Pessoa</Link>
      <Link href="/dados_pessoa2">Ir para a página Dados Pessoa2</Link>
      <Link href="/endereco">Ir para a página Endereço</Link>
      <Link href="/esqueceu">Ir para a página Esqueceu</Link>
      <Link href="/home">Ir para a página Home</Link>
      <Link href="/inicio">Ir para a página Inicio</Link>
      <Link href="/link_compart">Ir para a página Link Compart</Link>
      <Link href="/lista_doacao">Ir para a página Lista Doação</Link>
    </div>
  );
}
