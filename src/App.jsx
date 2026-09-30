import marina from "./assets/marina.png";

export default function App() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f7f1e7",
        minHeight: "100vh"
      }}
    >

      <h1 style={{ color: "#173b2b" }}>
        🌿 Guia Low Carb Fácil
      </h1>

      <img
        src={marina}
        alt="Marina"
        style={{
          width: "300px",
          borderRadius: "20px",
          marginTop: "20px"
        }}
      />

      <h2 style={{ color: "#173b2b" }}>
        Olá, eu sou a Marina 👩‍🍳
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#333",
          maxWidth: "500px",
          margin: "20px auto"
        }}
      >
        Vou acompanhar você com receitas low carb práticas,
        saborosas e fáceis de preparar para deixar sua rotina
        mais simples e organizada.
      </p>

      <div>
        <button
          style={{
            background: "#32ff1a",
            border: "none",
            padding: "15px 35px",
            borderRadius: "30px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Começar minha jornada
        </button>
      </div>

    </div>
  );
}
