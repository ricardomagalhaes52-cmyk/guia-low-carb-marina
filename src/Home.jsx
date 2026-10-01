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
        "Grelhe em frigideira antiaderente até dourar de ambos os lados.",
        "Monte o prato com a base de folhas verdes, tomates e abacate.",
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
        "Bata levemente os ovos com um garfo e tempere com ervas finas.",
        "Despeje numa frigideira untada com azeite em fogo baixo.",
        "Adicione os espinafres e o queijo numa metade e dobre ao meio.",
        "Deixe o queijo derreter e sirva quente."
      ]
    }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F4F1EA",
        padding: "16px",
        paddingBottom: "100px",
        fontFamily: "Inter, sans-serif",
        maxWidth: "480px",
        margin: "0 auto"
      }}
    >
      {/* CABEÇALHO COMPACTO MOBILE COM A COZINHA AO FUNDO */}
      <div
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "20px",
          color: "#FFFFFF",
          padding: "24px 16px",
          textAlign: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/marina/marina-cortando.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 10px auto",
            border: "2px solid #FFFFFF",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
          }}
        >
          <img
            src="/marina/marina-principal.jpg"
            alt="Marina"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "4px"
          }}
        >
          Olá, bem-vinda ao Guia! 🌿
        </h1>
        <p style={{ fontSize: "12px", opacity: 0.9, margin: 0 }}>
          Receitas fáceis e saudáveis para o seu dia a dia.
        </p>
      </div>

      {/* SECÇÃO DE SUGESTÕES */}
      <section>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            color: "#2C2C2C",
            marginBottom: "12px",
            paddingLeft: "4px"
          }}
        >
          Sugestões em Destaque 🍳
        </h2>

        {receitasDestaque.map((rec) => (
          <div
            key={rec.id}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "14px",
              marginBottom: "14px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
            }}
          >
            {/* Cabeçalho do Card da Receita */}
            <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "12px" }}>
              <img
                src={rec.foto}
                alt={rec.titulo}
                style={{ width: "55px", height: "55px", borderRadius: "10px", objectFit: "cover" }}
              />
              <div>
                <span style={{ fontSize: "10px", color: "#D35400", fontWeight: "bold" }}>⏱ {rec.tempo}</span>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", color: "#2C2C2C", margin: "2px 0", lineHeight: "1.2" }}>
                  {rec.titulo}
                </h3>
              </div>
            </div>

            {/* Ingredientes Compactos */}
            <div style={{ backgroundColor: "#F9F8F6", padding: "10px", borderRadius: "8px", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "#2D5A27", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                🛒 Ingredientes:
              </span>
              <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "11px", color: "#444444", lineHeight: "1.4" }}>
                {rec.ingredientes.map((ing, index) => (
                  <li key={index}>{ing}</li>
                ))}
              </ul>
            </div>

            {/* Modo de Preparo Compacto */}
            <div style={{ backgroundColor: "#F9F8F6", padding: "10px", borderRadius: "8px" }}>
              <span style={{ fontSize: "12px", color: "#2D5A27", fontWeight: "bold", display: "block", marginBottom: "4px" }}>
                👨‍🍳 Modo de Preparo:
              </span>
              <ol style={{ margin: 0, paddingLeft: "16px", fontSize: "11px", color: "#444444", lineHeight: "1.4" }}>
                {rec.modoPreparo.map((passo, index) => (
                  <li key={index} style={{ marginBottom: "3px" }}>{passo}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
