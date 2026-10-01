import { useState } from "react";
import receitas from "./receitasData";
import ReceitaDetalhe from "./ReceitaDetalhe";

export default function Receitas() {

  const [receitaSelecionada, setReceitaSelecionada] = useState(null);
  const [busca, setBusca] = useState("");


  if (receitaSelecionada) {
    return (
      <ReceitaDetalhe 
        receita={receitaSelecionada} 
      />
    );
  }


  const receitasFiltradas = receitas.filter((receita) =>
    receita.nome
      .toLowerCase()
      .includes(busca.toLowerCase())
  );


  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#F9F8F6",
        padding:"20px",
        paddingBottom:"90px",
        fontFamily:"Inter, sans-serif"
      }}
    >


      <h1
        style={{
          color:"#2C2C2C",
          textAlign:"center",
          fontFamily:"Poppins, sans-serif",
          fontSize:"28px"
        }}
      >
        🥗 Receitas Marina Low Carb
      </h1>


      <p
        style={{
          textAlign:"center",
          color:"#666",
          marginBottom:"20px"
        }}
      >
        Escolha uma receita fácil e saborosa para hoje.
      </p>



      <input

        type="text"

        placeholder="🔍 Buscar receita..."

        value={busca}

        onChange={(e)=>setBusca(e.target.value)}

        style={{

          width:"100%",

          padding:"14px",

          borderRadius:"14px",

          border:"1px solid #ddd",

          fontSize:"15px",

          marginBottom:"25px",

          outline:"none"

        }}

      />



      <div
        style={{
          display:"grid",
          gap:"18px"
        }}
      >


        {receitasFiltradas.map((receita)=>(


          <div

            key={receita.id}

            style={{

              background:"#FFFFFF",

              borderRadius:"16px",

              padding:"18px",

              boxShadow:"0 4px 12px rgba(0,0,0,0.05)"

            }}

          >



            <h2

              style={{

                color:"#2D5A27",

                fontFamily:"Poppins, sans-serif",

                fontSize:"20px"

              }}

            >

              🍽️ {receita.nome}

            </h2>




            <p style={{color:"#666"}}>

              📂 {receita.categoria}

            </p>



            <p style={{color:"#666"}}>

              ⏱️ {receita.tempo}

            </p>



            <p>

              {receita.descricao}

            </p>




            <button

              onClick={() => setReceitaSelecionada(receita)}

              style={{

                background:"#2D5A27",

                color:"#FFFFFF",

                border:"none",

                padding:"12px 25px",

                borderRadius:"12px",

                cursor:"pointer",

                fontFamily:"Poppins, sans-serif",

                fontWeight:"600",

                width:"100%"

              }}

            >

              Ver receita 🍳

            </button>



          </div>


        ))}



      </div>



    </div>

  );

}
