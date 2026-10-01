import { useState } from "react";

import Home from "./Home";
import Receitas from "./Receitas";
import Planejamento from "./Planejamento";
import Compras from "./Compras";
// Se já tiver ou for criar o componente de favoritos, pode descomentar a linha abaixo:
// import Favoritos from "./Favoritos";

import { BottomNav } from "./components/BottomNav";

export default function App() {
  const [pagina, setPagina] = useState("home");

  function renderPagina() {
    if (pagina === "receitas") {
      return <Receitas />;
    }
    if (pagina === "favoritos") {
      // Se ainda não criou o arquivo Favoritos.jsx, podemos retornar um aviso temporário ou o componente
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Meus Favoritos ❤️</h2>
          <p>As suas receitas salvas aparecerão aqui em breve!</p>
        </div>
      );
      // Quando criar o Favoritos.jsx, basta usar: return <Favoritos />;
    }
    if (pagina === "planejamento") {
      return <Planejamento />;
    }
    if (pagina === "compras") {
      return <Compras />;
    }

    return <Home />;
  }

  return (
    <div style={{ paddingBottom: "80px", minHeight: "100vh" }}>
      {renderPagina()}

      <BottomNav
        activeTab={pagina}
        setActiveTab={setPagina}
      />
    </div>
  );
}
