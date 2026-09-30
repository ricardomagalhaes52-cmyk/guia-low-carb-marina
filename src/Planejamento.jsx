export default function Planejamento() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f4ec",
        padding: "30px",
        textAlign: "center",
        fontFamily: "Arial"
      }}
    >

      <h1 style={{ color: "#245c3a" }}>
        📋 Planejamento Low Carb
      </h1>

      <p>
        Organize sua semana de refeições com a Marina.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "25px",
          marginTop: "30px"
        }}
      >

        <h2>Minha semana</h2>

        <p>☕ Café da manhã</p>
        <p>🥗 Almoço</p>
        <p>🍽️ Jantar</p>
        <p>🍎 Lanches</p>

      </div>

    </div>
  );
}
