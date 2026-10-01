import React from "react";

export default function Home() {
  const categorias = [
    { nome: "Café da Manhã", emoji: "☕" },
    { nome: "Almoço/Jantar", emoji: "🍲" },
    { nome: "Lanches", emoji: "🥗" },
    { nome: "Sobremesas", emoji: "🍰" },
    { nome: "Bebidas", emoji: "🥤" },
    { nome: "Acompanhamentos", emoji: "🥦" }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#2D5A27",
        padding: "20px",
        paddingBottom: "110px",
        fontFamily: "Inter, sans-serif",
        color: "#FFFFFF",
        textAlign: "center"
      }}
    >
      {/* CABEÇALHO DO GUIA */}
      <header style={{ paddingTop: "10px", marginBottom: "20px" }}>
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#FFFFFF",
            marginBottom: "4px",
            letterSpacing: "-0.5px"
          }}
        >
          Guia <span style={{ color: "#A3D98E" }}>LowCarb</span>
        </h1>
        <p
          style={{
            fontSize: "13px",
            opacity: 0.9,
            maxWidth: "280px",
            margin: "0 auto",
            lineHeight: "1.4"
          }}
        >
          Receitas saudáveis, mais sabor e qualidade de vida
        </p>
      </header>

      {/* BLOCO DE DESTAQUE: 100 RECEITAS E PRATO PRINCIPAL */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          overflow: "hidden",
          color: "#2C2C2C",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          marginBottom: "24px",
          textAlign: "left"
        }}
      >
        {/* Selo e Título do Destaque */}
        <div style={{ padding: "20px 20px 10px 20px", textAlign: "center" }}>
          <span
            style={{
              backgroundColor: "#2D5A27",
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: "bold",
              padding: "6px 14px",
              borderRadius: "20px",
              display: "inline-block",
              marginBottom: "12px"
            }}
          >
            100 RECEITAS FUNCIONAIS
          </span>
        </div>

        {/* Imagem do Prato Principal (marina-principal.jpg) */}
        <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
          <img
            src="/marina/marina-principal.jpg"
            alt="Prato Principal Low Carb"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
        </div>

        <div style={{ padding: "16px 20px" }}>
          <strong style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", color: "#2D5A27" }}>
            Especial do Dia com a Marina
          </strong>
          <p style={{ color: "#666666", fontSize: "13px", marginTop: "4px" }}>
            Pratos desenvolvidos para nutrir o seu corpo com sabor e leveza.
          </p>
        </div>
      </div>

      {/* SECÇÃO DE CATEGORIAS Rápidas */}
      <section style={{ textAlign: "left", marginBottom: "24px" }}>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            marginBottom: "12px",
            color: "#FFFFFF"
          }}
        >
          Explorar Categorias
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px"
          }}
        >
          {categorias.slice(0, 3).map((categoria) => (
            <div
              key={categoria.nome}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
                borderRadius: "16px",
                padding: "14px 8px",
                textAlign: "center",
                border: "1px solid rgba(255, 255, 255, 0.15)"
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "6px" }}>
                {categoria.emoji}
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#FFFFFF"
                }}
              >
                {categoria.nome}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* MENU INFERIOR FIXO (Inspirado na referência) */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#1E3D1A",
          padding: "12px 10px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 -4px 15px rgba(0,0,0,0.2)",
          zIndex: 100
        }}
      >
        <div style={{ textAlign: "center", cursor: "pointer", opacity: 1 }}>
          <div style={{ fontSize: "18px" }}>🍽️</div>
          <span style={{ fontSize: "10px", color: "#FFFFFF", display: "block", marginTop: "2px" }}>
            RECEITAS LOW CARB
          </span>
        </div>

        <div style={{ textAlign: "center", cursor: "pointer", opacity: 0.8 }}>
          <div style={{ fontSize: "18px" }}>🌿</div>
          <span style={{ fontSize: "10px", color: "#FFFFFF", display: "block", marginTop: "2px" }}>
            SAÚDE E BEM-ESTAR
          </span>
        </div>

        <div style={{ textAlign: "center", cursor: "pointer", opacity: 0.8 }}>
          <div style={{ fontSize: "18px" }}>💚</div>
          <span style={{ fontSize: "10px", color: "#FFFFFF", display: "block", marginTop: "2px" }}>
            ENERGIA PARA O DIA
          </span>
        </div>
      </div>
    </div>
  );
}
