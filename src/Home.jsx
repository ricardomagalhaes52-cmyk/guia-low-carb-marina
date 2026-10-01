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
        backgroundColor: "#F9F8F6",
        padding: "20px",
        paddingBottom: "90px",
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
          Vamos preparar algo delicioso hoje?
        </p>
      </header>

      {/* FOTO DE DESTAQUE PRINCIPAL DA MARINA */}
      <div
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
          marginBottom: "24px",
          backgroundColor: "#FFFFFF"
        }}
      >
        <img
          src="/marina/MARINA LOWCARB 1.jpg"
          alt="Marina Low Carb"
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
            display: "block"
          }}
        />
        <div style={{ padding: "16px" }}>
          <strong style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", color: "#2D5A27" }}>
            Receita do Dia com a Marina
          </strong>
          <p style={{ color: "#666666", fontSize: "14px", marginTop: "4px" }}>
            Feita com carinho para manter a sua rotina leve e saborosa.
          </p>
        </div>
      </div>

      {/* SEÇÃO ESCOLHA DA MARINA */}
      <section
        style={{
          backgroundColor: "#2D5A27",
          borderRadius: "18px",
          padding: "20px",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          gap: "16px"
        }}
      >
        <img
          src="/marina/MARINA LOWCARB4.jpg"
          alt="Marina Planejando"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #FFFFFF"
          }}
        />
        <div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "18px",
              marginBottom: "6px"
            }}
          >
            Planeamento & Rotina ⭐
          </h2>
          <p style={{ fontSize: "13px", opacity: 0.9 }}>
            Receitas fáceis e organizadas para o seu dia a dia.
          </p>
        </div>
      </section>

      {/* SEÇÃO DE CATEGORIAS */}
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
              <div style={{ fontSize: "30px", marginBottom: "8px" }}>
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

      {/* SEÇÃO RÁPIDAS DA MARINA COM FOTO */}
      <section style={{ marginTop: "28px" }}>
        <h2
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "20px",
            marginBottom: "15px"
          }}
        >
          Prontas em poucos minutos ⏱
        </h2>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
          }}
        >
          <img
            src="/marina/MARINA LOWCARB3.jpg"
            alt="Marina Cozinhando"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "12px",
              objectFit: "cover"
            }}
          />
          <div>
            <strong style={{ fontFamily: "Poppins, sans-serif", fontSize: "15px", color: "#2C2C2C" }}>
              Receitas rápidas da Marina
            </strong>
            <p style={{ color: "#666666", fontSize: "13px", marginTop: "4px" }}>
              Opções práticas para quando o tempo está curto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
