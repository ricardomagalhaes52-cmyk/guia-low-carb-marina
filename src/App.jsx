import marina from "./assets/marina.png";
export default function App() {
  return (
    <div style={{
      textAlign: "center",
      padding: "20px",
      fontFamily: "Arial"
    }}>

      <h1>Guia Low Carb Fácil</h1>

      <img
       src={marina}
        alt="Marina"
        style={{
          width: "300px",
          borderRadius: "20px"
        }}
      />

      <h2>Olá, eu sou a Marina</h2>

      <p>
        Vou te acompanhar com receitas low carb práticas,
        saborosas e fáceis de preparar.
      </p>

      <button>
        Começar receitas
      </button>

    </div>
  );
}
