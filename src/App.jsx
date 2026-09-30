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

      <h1
        style={{
          color: "#173b2b",
          fontSize: "36px"
        }}
      >
        🌿 Guia Low Carb Fácil
      </h1>


      <img
        src="/marina/marina.png.png"
        alt="Marina"
        style={{
          width: "300px",
          maxWidth: "90%",
          borderRadius: "20px",
          marginTop: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
        }}
      />


      <h2
        style={{
          color: "#173b2b",
          marginTop: "25px"
        }}
      >
        Olá, eu sou a Marina 👩‍🍳
      </h2>


      <p
        style={{
          fontSize: "18px",
          color: "#444",
          maxWidth: "500px",
          margin: "20px auto",
          lineHeight: "1.6"
        }}
      >
        Vou acompanhar você em uma jornada com receitas low carb
        práticas, saborosas e fáceis de preparar.
      </p>


      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "180px"
          }}
        >
          🥑
          <h3>200 receitas</h3>
          <p>Receitas práticas</p>
        </div>


        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "180px"
          }}
        >
          📅
          <h3>Planejamento</h3>
          <p>Organize sua rotina</p>
        </div>


        <div
          style={{
            background: "#ffffff",
            padding: "20px",
            borderRadius: "15px",
            width: "180px"
          }}
        >
          🛒
          <h3>Lista de compras</h3>
          <p>Mais facilidade</p>
        </div>

      </div>


      <button
        style={{
          marginTop: "35px",
          background: "#4cff22",
          border: "none",
          padding: "18px 40px",
          borderRadius: "30px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        COMEÇAR MINHA JORNADA
      </button>


    </div>
  );
}
