import React from "react";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#2D5A27", padding: "20px", color: "#FFFFFF", textAlign: "center", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Teste de Imagem Marina</h1>
      
      <div style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", padding: "10px", margin: "20px auto", maxWidth: "400px" }}>
        {/* A apontar diretamente para a segunda foto para testar */}
        <img
          src="/marina/marina-prato.jpg"
          alt="Teste"
          style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "12px", display: "block" }}
        />
        <p style={{ color: "#333", marginTop: "10px", fontWeight: "bold" }}>Se esta foto aparecer, o caminho está correto!</p>
      </div>
    </div>
  );
}
