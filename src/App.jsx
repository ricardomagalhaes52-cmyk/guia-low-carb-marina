import { useState } from "react";
import Receitas from "./Receitas";
import Planejamento from "./Planejamento";

export default function App() {
 const [pagina, setPagina] = useState("home");
  if (pagina === "receitas") {
  return <Receitas />;
}
if (pagina === "planejamento") {
  return <Planejamento />;
}
 return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f4ec",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center"
      }}
    >

      <h1
        style={{
          color: "#245c3a",
          fontSize: "34px",
          marginBottom: "10px"
        }}
      >
        Guia Low Carb Fácil
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "500px",
          margin: "auto"
        }}
      >
        Receitas práticas, planejamento alimentar e uma jornada
        mais simples com a Marina.
      </p>


      <img
        src="/marina/marina.png.png"
        alt="Marina"
        style={{
          width: "320px",
          maxWidth: "90%",
          borderRadius: "25px",
          marginTop: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
        }}
      />


      <h2
        style={{
          color: "#245c3a",
          marginTop: "25px"
        }}
      >
        Olá, eu sou a Marina 👩‍🍳
      </h2>


      <p
        style={{
          color: "#444",
          fontSize: "17px",
          lineHeight: "1.5"
        }}
      >
        Vou acompanhar você com receitas low carb fáceis,
        saborosas e organizadas para sua rotina.
      </p>


      <button
        style={{
          background:"#4caf50",
          color:"white",
          border:"none",
          padding:"18px 35px",
          borderRadius:"30px",
          fontSize:"18px",
          fontWeight:"bold",
          marginTop:"20px",
          cursor:"pointer"
        }}
      >
        Começar receitas
      </button>


      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(3, 1fr)",
          gap:"15px",
          marginTop:"35px"
        }}
      >

       <div
  onClick={() => setPagina("receitas")}
  style={{
    background:"white",
    padding:"15px",
    borderRadius:"15px",
    cursor:"pointer"
  }}
>
          🥗
          <h3>Receitas</h3>
          <p>200 opções</p>
        </div>


        <div
          style={{
            background:"white",
            padding:"15px",
            borderRadius:"15px"
          }}
        >
          📋
          <h3>Planejamento</h3>
          <p>Organize sua semana</p>
        </div>


        <div
 onClick={() => setPagina("compras")}
  style={{
    background:"white",
    padding:"15px",
    borderRadius:"15px",
    cursor:"pointer"
  }}
>
          🛒
          <h3>Compras</h3>
          <p>Lista inteligente</p>
        </div>

      </div>


    </div>
  );
}


   


        
       
     
