import React from "react";

export default function ReceitaDetalhe({ receita, onVoltar }) {
  if (!receita) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Nenhuma receita selecionada.</p>
        <button
          onClick={onVoltar}
          style={{
            backgroundColor: "#2D5A27",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            marginTop: "10px"
          }}
        >
          Voltar
        </button>
      </div>
    );
  }

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
      {/* BOTÃO DE VOLTAR */}
      <button
        onClick={onVoltar}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "#2D5A27",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "12px",
          display: "flex",
          alignItems: "center",
          gap: "6px"
        }}
      >
        ← Voltar
      </button>

      {/* CABEÇALHO DA RECEITA COM FOTO */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          marginBottom: "16px"
        }}
      >
        <img
          src={receita.foto || "/marina/marina-principal.jpg"}
          alt={receita.titulo}
          style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
        />
        <div style={{ padding: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
            <span style={{ fontSize: "11px", backgroundColor: "#E8F5E9", color: "#2E7D32", padding: "3px 8px", borderRadius: "6px", fontWeight: "bold" }}>
              {receita.categoria || "Receita Low Carb"}
            </span>
            <span style={{ fontSize: "12px", color: "#D35400", fontWeight: "bold" }}>⏱ {receita.tempo || "15 mins"}</span>
          </div>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", color: "#2C2C2C", margin: "4px 0" }}>
            {receita.titulo}
          </h2>
          <span style={{ fontSize: "12px", color: "#888888" }}>🔥 {receita.calorias || "250 kcal"}</span>
        </div>
      </div>

      {/* INGREDIENTES */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          padding: "16px",
          marginBottom: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}
      >
        <strong style={{ fontSize: "14px", color: "#2D5A27", display: "block", marginBottom: "10px" }}>
          🛒 Ingredientes:
        </h3>
        <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#444444", lineHeight: "1.6" }}>
          {receita.ingredientes && receita.ingredientes.length > 0 ? (
            receita.ingredientes.map((ing, index) => <li key={index}>{ing}</li>)
          ) : (
            <li>Ingredientes equilibrados para o seu plano low carb.</li>
          )}
        </ul>
      </div>

      {/* MODO DE PREPARO */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
        }}
      >
        <strong style={{ fontSize: "14px", color: "#2D5A27", display: "block", marginBottom: "10px" }}>
          👨‍🍳 Modo de Preparo:
        </h3>
        <ol style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#444444", lineHeight: "1.6" }}>
          {receita.modoPreparo && receita.modoPreparo.length > 0 ? (
            receita.modoPreparo.map((passo, index) => (
              <li key={index} style={{ marginBottom: "6px" }}>{passo}</li>
            ))
          ) : (
            <li>Misture os ingredientes e prepare em fogo baixo até o ponto ideal.</li>
          )}
        </ol>
      </div>
    </div>
  );
}
