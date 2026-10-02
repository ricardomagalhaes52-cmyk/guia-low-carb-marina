import { useState } from "react";
import Home from "./Home";
import Receitas from "./Receitas";
import Planejamento from "./Planejamento";
import Compras from "./Compras";
import EbooksView from "./EbooksView"; // Importação da tela de E-books

import { BottomNav } from "./components/BottomNav";

export default function App() {
  const [pagina, setPagina] = useState("home");

  function renderPagina() {
    if (pagina === "home") {
      return <Home />;
    }
    if (pagina === "receitas") {
      return <Receitas />;
    }
    if (pagina === "favoritos") {
      // Adicione a tela de favoritos se houver, ou deixe tratato
    }
    if (pagina === "compras") {
      return <Compras />;
    }
    if (pagina === "agenda") {
      return <Planejamento />;
    }
    if (pagina === "ebooks") {
      return <EbooksView />; // Renderiza a tela de E-books quando selecionada
    }
    return <Home />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {renderPagina()}
      <BottomNav paginaAtual={pagina} setPagina={setPagina} />
    </div>
  );
}
