import ReceitaDetalhe from "./ReceitaDetalhe";
import { useState } from "react";

export default function Receitas() {

  const [receitaAberta, setReceitaAberta] = useState(false);


  if (receitaAberta) {
    return <ReceitaDetalhe />;
  }


  const categorias = [
    {
      emoji: "☕",
      nome: "Café da manhã",
      descricao: "Receitas leves para começar o dia"
    },
    {
      emoji: "🍗",
      nome: "Almoço",
      descricao: "Pratos completos e saborosos"
    },
    {
      emoji: "🥗",
      nome: "Jantar",
      descricao: "Opções práticas para sua rotina"
    },
    {
      emoji: "🍎",
      nome: "Lanches",
      descricao: "Receitas rápidas"
    },
    {
      emoji: "🍰",
      nome: "Sobremesas",
      descricao: "Doces low carb"
    }
  ];


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
        Escolha uma categoria ou veja uma receita.
      </p>


      <div
        style={{
          background:"white",
          padding:"20px",
          borderRadius:"20px",
          marginTop:"25px"
        }}
      >

        <h2>
          🍳 Omelete Cremoso Low Carb
        </h2>

        <p>
          ⏱ 10 minutos
        </p>

        <p>
          Uma receita prática para qualquer momento do dia.
        </p>


        <button
          onClick={() => setReceitaAberta(true)}
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



      <h2
        style={{
          color:"#245c3a",
          marginTop:"30px"
        }}
      >
        Categorias
      </h2>


      <div
        style={{
          display:"grid",
          gap:"15px"
        }}
      >

      {categorias.map((item)=>(
        <div
          key={item.nome}
          style={{
            background:"white",
            padding:"18px",
            borderRadius:"18px"
          }}
        >

          <h2>
            {item.emoji} {item.nome}
          </h2>

          <p>
            {item.descricao}
          </p>

        </div>
      ))}

      </div>


    </div>
  );
}
