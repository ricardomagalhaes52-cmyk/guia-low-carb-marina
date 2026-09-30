export default function Receitas() {
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
        🥗 Receitas Low Carb
      </h1>

      <p>
        Escolha uma categoria:
      </p>

      <div
        style={{
          display: "grid",
          gap: "15px",
          marginTop: "30px"
        }}
      >

        <button>
          ☕ Café da manhã
        </button>

        <button>
          🍗 Almoço
        </button>

        <button>
          🥗 Jantar
        </button>

        <button>
          🍎 Lanches
        </button>

        <button>
          🍰 Sobremesas
        </button>

      </div>

    </div>
  );
}
