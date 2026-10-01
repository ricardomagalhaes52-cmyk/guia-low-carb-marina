import React, { useState } from "react";

export default function Home() {
  const [receitaAtiva, setReceitaAtiva] = useState(null);

  const receitasDestaque = [
    {
      id: 1,
      titulo: "Frango Dourado com Salada Fresca",
      tempo: "20 mins",
      foto: "/marina/marina-principal.jpg",
      ingredientes: [
        "1 filé de peito de frango",
        "Mix de folhas verdes (rúcula e alface)",
        "Tomates-ceraja e abacate em fatias",
        "Azeite extravirgem, limão, sal e pimenta a gosto"
      ],
      modoPreparo: [
        "Tempere o filé de frango com sal, pimenta e um fio de azeite.",
        "Grelhe em frigreideira antiaderente até dourar por completo de ambos os lados.",
        "Monte o prato com a base de folhas verdes, os tomates, o abacate fatiado e o frango fatiado por cima.",
        "Finalize regando com azeite e sumo de limão."
      ]
    },
    {
      id: 2,
      titulo: "Omelete Recheada da Marina",
      tempo: "10 mins",
      foto: "/marina/marina-prato.jpg",
      ingredientes: [
        "2 ovos inteiros",
        "Espinafres frescos picados",
        "Queijo minas curado ralado",
        "Sal e ervas finas a gosto"
      ],
      modoPreparo: [
        "Bata levemente os ovos numa tigela com um garfo e tempere com sal e ervas finas.",
        "Despeje numa frigideira untada com um pouco de azeite em fogo baixo.",
        "Adicione os espinafres e o queijo em metade da omelete.",
        "Dobre ao meio, deixe o queijo derreter e sirva quente."
      ]
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F9F8F6",
        padding: "20px",
        paddingBottom: "100px",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* CABEÇALHO */}
      <header style={{ marginBottom: "20px" }}>
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
        <p style={{ color: "#666666", fontSize: "15px" }}>
          Vamos preparar algo delicioso e saudável hoje?
        </p>
      </header>

      {/* DESTAQUE PRINCIPAL (Com a imagem inteira sem cortes) */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          marginBottom: "24px"
        }}
      >
        <div style={{ width: "100%", maxHeight: "320px", backgroundColor: "#EFECE6", display: "flex", justifyContent: "center" }}>
          <img
            src="/marina/marina-principal.jpg"
            alt="Marina Low Carb"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "320px",
              objectFit: "contain",
              display: "block"
            }}
          />
        </div>
        <div style={{ padding: "18px" }}>
          <span style={{ backgroundColor: "#E8F5E9", color: "#2E7D32", fontSize: "11px", fontWeight: "bold", padding: "4px 10px", borderRadius: "10px" }}>
            DESTAQUE DO DIA
          </span>
          <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", color: "#2D5A27", marginTop: "8px" }}>
            Receita Saudável com a Marina
          </h3>
          <p style={{ color: "#666666", fontSize: "13px", marginTop: "4px" }}>
            Feita com carinho para manter a sua rotina leve, nutritiva e saborosa.
          </p>
        </div>
      </div>

      {/* LISTA DE RECEITAS COM INGREDIENTES E MODO DE PREPARO DETALHADOS */}
      <section style={{ marginTop: "24px" }}>
        <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", marginBottom: "15px", color: "#2C2C2C" }}>
          Sugestões Práticas 🍳
        </h2>

        {receitasDestaque.map((rec) => (
          <div
            key={rec.id}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "16px",
              marginBottom: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
            }}
          >
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
              <img
                src={rec.foto}
                alt={rec.titulo}
                style={{ width: "65px", height: "65px", borderRadius: "12px", objectFit: "cover" }}
              />
              <div>
                <span style={{ fontSize: "11px", color: "#D35400", fontWeight: "bold" }}>⏱ {rec.tempo}</span>
                <h4 style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", color: "#2C2C2C", margin: "2px 0" }}>
                  {rec.titulo}
                </h4>
              </div>
            </div>

            {/* Ingredientes */}
            <div style={{ backgroundColor: "#F9F8F6", padding: "12px", borderRadius: "10px", marginBottom: "10px" }}>
              <strong style={{ fontSize: "13px", color: "#2D5A27", display: "block", marginBottom: "6px" }}>
                🛒 Ingredientes:
              </strong>
              <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#444444", lineHeight: "1.5" }}>
                {rec.ingredientes.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Modo de Preparo */}
            <div style={{ backgroundColor: "#F9F8F6", padding: "12px", borderRadius: "10px" }}>
              <strong style={{ fontSize: "13px", color: "#2D5A27", display: "block", marginBottom: "6px" }}>
                👨‍🍳 Modo de Preparo:
              </strong>
              <ol style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#444444", lineHeight: "1.5" }}>
                {rec.modoPreparo.map((passo, index) => (
                  <li key={index} style={{ marginBottom: "4px" }}>{passo}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
