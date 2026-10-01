import { useState } from "react";
import receitas from "./receitasData";
import ReceitaDetalhe from "./ReceitaDetalhe";

export default function Receitas() {

  const [receitaSelecionada, setReceitaSelecionada] = useState(null);


  if (receitaSelecionada) {
    return <ReceitaDetalhe receita={receitaSelecionada} />;
  }


  return (
    <div
      style={{
        minHeight:"100vh",
        background:"#f8f4ec",
        padding:"20px",
        fontFamily:"Arial, sans-serif"
      }}
    >

      <h1
        style={{
          color:"#245c3a",
          textAlign:"center"
        }}
      >
        🥗 Receitas Low Carb
      </h1>


      <p
        style={{
          textAlign:"center"
        }}
      >
        Escolha uma receita preparada pela Marina.
      </p>


      <div
        style={{
          display:"grid",
          gap:"18px",
          marginTop:"25px"
        }}
      >

        {receitas.map((receita) => (

          <div
            key={receita.id}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"20px",
              boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
            }}
          >

            <h2
              style={{
                color:"#245c3a"
              }}
            >
              🍽️ {receita.nome}
            </h2>


            <p>
              📂 Categoria: {receita.categoria}
            </p>


            <p>
              ⏱️ Tempo: {receita.tempo}
            </p>


            <p>
              {receita.descricao}
            </p>


            <button
              onClick={() => setReceitaSelecionada(receita)}
              style={{
                background:"#45c451",
                color:"white",
                border:"none",
                padding:"12px 25px",
                borderRadius:"25px",
                cursor:"pointer"
              }}
            >
              Ver receita
            </button>


          </div>

        ))}

      </div>

    </div>
  );
}
