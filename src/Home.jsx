import React from "react";

export default function Home() {
  const receitasDestaque = [
    {
      id: 1,
      titulo: "Frango Dourado com Salada Fresca",
      tempo: "20 mins",
      foto: "/marina/marina-principal.jpg",
      ingredientes: [
        "1 filé de peito de frango",
        "Mix de folhas verdes (rúcula e alface)",
        "Tomates-cereja e abacate em fatias",
        "Azeite extravirgem, limão, sal e pimenta a gosto"
      ],
      modoPreparo: [
        "Tempere o filé de frango com sal, pimenta e um fio de azeite.",
        "Grelhe em frigideira antiaderente até dourar por completo de ambos os lados.",
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
      {/* CABEÇALHO COM A COZINHA/FOTO DE FUNDO EM DESTAQUE */}
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
          marginBottom: "24px",
          color: "#FFFFFF",
          padding: "35px 20px",
          textAlign: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url('/marina/marina-cortando.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "200px",
            borderRadius: "12px",
            overflow: "hidden",
            margin: "0 auto 14px auto",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            border: "2px solid rgba(255,255,255,0.8)"
          }}
        >
          <img
            src="/marina/marina-principal.jpg"
            alt="Marina Low Carb"
            style={{
              width: "100%",
              height: "auto",
              display: "block"
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "22px",
            marginBottom: "6px",
            color: "#FFFFFF"
          }}
        >
          Olá, que bom ter você aqui! 🌿
        </h1>
        <p style={{ fontSize: "13px", opacity: 0.9, maxWidth: "300px", margin: "0 auto", lineHeight: "1.4" }}>
          Vamos preparar receitas deliciosas, leves e saudáveis para a sua rotina.
        </p>
      </div>

      {/* LISTA DE RECEITAS COM INGREDIENTES E MODO DE PREPARO */}
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
