import { useState } from "react";

import Home from "./Home";
import Receitas from "./Receitas";
import Planejamento from "./Planejamento";
import Compras from "./Compras";

import { BottomNav } from "./components/BottomNav";


export default function App() {

  const [pagina, setPagina] = useState("home");


  function renderPagina(){

    if(pagina === "receitas"){
      return <Receitas />;
    }

    if(pagina === "planejamento"){
      return <Planejamento />;
    }

    if(pagina === "compras"){
      return <Compras />;
    }

    return <Home />;

  }


  return (

    <>

      {renderPagina()}


      <BottomNav
        activeTab={pagina}
        setActiveTab={setPagina}
      />


    </>

  );

}
