export default function Compras() {
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
        🛒 Lista de Compras
      </h1>

      <p>
        Organize seus ingredientes da semana.
      </p>


      <div
        style={{
          background:"white",
          borderRadius:"20px",
          padding:"25px",
          marginTop:"30px"
        }}
      >

        <h2>Minha lista</h2>

        <p>🥑 Abacate</p>
        <p>🥚 Ovos</p>
        <p>🥗 Folhas verdes</p>
        <p>🍅 Tomates</p>
        <p>🍗 Proteínas</p>

      </div>

    </div>
  );
}
