import React from "react";

export default function Home() {
  const categorias = [
    {
      nome: "Café da Manhã",
      emoji: "☕"
    },
    {
      nome: "Almoço/Jantar",
      emoji: "🍲"
    },
    {
      nome: "Lanches",
      emoji: "🥗"
    },
    {
      nome: "Sobremesas",
      emoji: "🍰"
    },
    {
      nome: "Bebidas",
      emoji: "🥤"
    },
    {
      nome: "Acompanhamentos",
      emoji: "🥦"
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9F8F6",
        padding: "20px",
        paddingBottom: "90px",
        fontFamily: "Inter, sans-serif"
      }}
    >

      <header>
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            color: "#2C2C2C",
            fontSize: "26px",
            marginBottom: "8px"
          }}
        >
          Olá, que bom ter você aqui! 🌿
        </h1>

        <p
          style={{
            color: "#666666",
            fontSize: "15px"
          }}
        >
          Vamos preparar algo delicioso hoje?
        </p>
      </header>


      <section
        style={{
          marginTop: "24px",
          backgroundColor: "#2D5A27",
          borderRadius: "18px",
          padding: "20px",
          color: "#FFFFFF"
        }}
      >

        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "20px",
            marginBottom: "10px"
          }}
        >
          Escolha da Marina ⭐
        </h2>

        <p>
          Receitas fáceis, saborosas e pensadas para sua rotina.
        </p>

        <button
          style={{
            marginTop: "16px",
            backgroundColor: "#D97757",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "12px",
            padding: "12px 18px",
            fontFamily: "Poppins, sans-serif",
            cursor: "pointer"
          }}
        >
          Ver receita destaque
        </button>

      </section>


      <section style={{ marginTop: "28px" }}>

        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "20px",
            marginBottom: "15px"
          }}
        >
          Encontre por categoria
        </h2>


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "12px"
          }}
        >

          {categorias.map((categoria) => (

            <div
              key={categoria.nome}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                padding: "18px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
              }}
            >

              <div
                style={{
                  fontSize: "30px",
                  marginBottom: "8px"
                }}
              >
                {categoria.emoji}
              </div>

              <strong
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  color: "#2C2C2C"
                }}
              >
                {categoria.nome}
              </strong>

            </div>

          ))}

        </div>

      </section>


      <section style={{ marginTop: "28px" }}>

        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "20px"
          }}
        >
          Prontas em poucos minutos ⏱️
        </h2>

        <div
          style={{
            marginTop: "12px",
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "18px"
          }}
        >

          <strong>
            Receitas rápidas da Marina
          </strong>

          <p
            style={{
              color:"#666666",
              marginTop:"8px"
            }}
          >
            Opções práticas para quando o tempo está curto.
          </p>

        </div>

      </section>


    </div>
  );
}
