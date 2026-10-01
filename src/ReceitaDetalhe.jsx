export default function ReceitaDetalhe() {

  const ingredientes = [
    "2 ovos",
    "Queijo muçarela",
    "Tomate picado",
    "Temperos a gosto"
  ];


  const preparo = [
    "Bata os ovos em um recipiente.",
    "Adicione o queijo e os ingredientes.",
    "Cozinhe em fogo baixo até dourar.",
    "Sirva e aproveite."
  ];


  return (
    <div
      style={{
        minHeight:"100vh",
        background:"#f8f4ec",
        padding:"20px",
        fontFamily:"Arial, sans-serif"
      }}
    >

      <h1
        style={{
          color:"#245c3a",
          textAlign:"center"
        }}
      >
        🍳 Omelete Low Carb
      </h1>


      <div
        style={{
          background:"white",
          borderRadius:"20px",
          padding:"20px",
          boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
        }}
      >

        <div
          style={{
            height:"220px",
            background:"#eee",
            borderRadius:"15px",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize:"60px"
          }}
        >
          🍳
        </div>


        <h2>
          Omelete Cremoso Low Carb
        </h2>


        <p>
          ⏱ Tempo de preparo: 10 minutos
        </p>


        <hr />


        <h2>
          🛒 Ingredientes
        </h2>

        {ingredientes.map((item) => (
          <p key={item}>
            ✅ {item}
          </p>
        ))}


        <hr />


        <h2>
          👩‍🍳 Modo de preparo
        </h2>

        {preparo.map((item, index) => (
          <p key={item}>
            {index + 1}. {item}
          </p>
        ))}


        <button
          style={{
            width:"100%",
            background:"#45c451",
            color:"white",
            border:"none",
            padding:"15px",
            borderRadius:"25px",
            fontSize:"17px",
            marginTop:"20px",
            cursor:"pointer"
          }}
        >
          ⭐ Salvar receita
        </button>


      </div>

    </div>
  );
}
