import { useState } from "react";
import Home from "./Home";
import Receitas from "./Receitas";
import Planejamento from "./Planejamento";
import Compras from "./Compras";
import EbooksView from "./EbooksView"; 
import { BottomNav } from "./components/BottomNav";


export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  function renderPagina() {
    if (activeTab === "home") {
      return <Home />;
    }
    if (activeTab === "receitas") {
      return <Receitas />;
    }
    if (activeTab === "compras") {
      return <Compras />;
    }
    if (activeTab === "planejamento" || activeTab === "agenda") {
      return <Planejamento />;
    }
    if (activeTab === "ebooks") {
      return <EbooksView />;
    }
    return <Home />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {renderPagina()}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
