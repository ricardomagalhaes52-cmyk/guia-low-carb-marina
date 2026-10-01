import { useState } from "react";
import { receitasData } from "./receitasData";
import ReceitaDetalhe from "./ReceitaDetalhe";

export default function Receitas() {
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);
  const [busca, setBusca] = useState("");

  if (receitaSelecionada) {
    return (
      <ReceitaDetalhe 
        receita={receitaSelecionada} 
        onVoltar={() => setReceitaSelecionada(null)}
      />
    );
  }

  // Corrigido para procurar por 'titulo' (que está no receitasData)
  const receitasFiltradas = receitasData.filter((receita) =>
    receita.titulo
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

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
      <h1
        style={{
          color: "#2C2C2C",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          fontSize: "22px",
          marginBottom: "4px"
        }}
      >
        🥗 Receitas Marina Low Carb
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "12px",
          marginBottom: "16px"
        }}
      >
        Escolha uma receita fácil e saborosa para hoje.
      </p>

      <input
        type="text"
        placeholder="🔍 Buscar receita..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "14px",
          border: "1px solid #ddd",
          fontSize: "14px",
          marginBottom: "16px",
          outline: "none",
          backgroundColor: "#FFFFFF",
          boxSizing: "border-box"
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px"
        }}
      >
        {receitasFiltradas.map((receita) => (
          <div
            key={receita.id}
            onClick={() => setReceitaSelecionada(receita)} // TORNA O CARTÃO CLICÁVEL
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "12px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              cursor: "pointer"
            }}
          >
            <img
              src={receita.foto || "/marina/marina-principal.jpg"}
              alt={receita.titulo}
              style={{ width: "70px", height: "70px", borderRadius: "12px", objectFit: "cover" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                <span style={{ fontSize: "10px", backgroundColor: "#E8F5E9", color: "#2E7D32", padding: "2px 6px", borderRadius: "6px", fontWeight: "bold" }}>
                  {receita.categoria}
                </span>
                <span style={{ fontSize: "11px", color: "#D35400", fontWeight: "bold" }}>⏱ {receita.tempo}</span>
              </div>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontSize: "14px", color: "#2C2C2C", margin: "0 0 4px 0", lineHeight: "1.2" }}>
                {receita.titulo}
              </h3>
              <span style={{ fontSize: "11px", color: "#888888" }}>🔥 {receita.calorias}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
