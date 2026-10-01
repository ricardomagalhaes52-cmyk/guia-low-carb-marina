export default function Planejamento() {

  const dias = [
    {
      dia: "Segunda-feira",
      cafe: "☕ Omelete low carb",
      almoco: "🍗 Frango com salada",
      jantar: "🥗 Legumes com proteína"
    },
    {
      dia: "Terça-feira",
      cafe: "🥚 Ovos mexidos",
      almoco: "🥩 Carne com vegetais",
      jantar: "🍲 Sopa low carb"
    },
    {
      dia: "Quarta-feira",
      cafe: "🥑 Abacate com ovos",
      almoco: "🍗 Frango grelhado",
      jantar: "🥗 Salada completa"
    },
    {
      dia: "Quinta-feira",
      cafe: "☕ Café low carb",
      almoco: "🐟 Peixe com legumes",
      jantar: "🍳 Omelete recheado"
    },
    {
      dia: "Sexta-feira",
      cafe: "🥚 Ovos e queijo",
      almoco: "🥩 Carne com salada",
      jantar: "🥗 Prato leve"
    },
    {
      dia: "Sábado",
      cafe: "🥑 Receita especial",
      almoco: "🍗 Almoço da família",
      jantar: "🍲 Jantar prático"
    },
    {
      dia: "Domingo",
      cafe: "☕ Café tranquilo",
      almoco: "🍖 Receita favorita",
      jantar: "🥗 Preparação da semana"
    }
  ];


  return (
    <div
      style={{
        minHeight:"100vh",
        background:"#f8f4ec",
        padding:"20px",
        fontFamily:"Arial, sans-serif",
        textAlign:"center"
      }}
    >

      <h1
        style={{
          color:"#245c3a"
        }}
      >
        📋 Planejamento Low Carb
      </h1>


      <p>
        Organize suas refeições da semana com a Marina.
      </p>


      <div
        style={{
          display:"grid",
          gap:"15px",
          marginTop:"25px"
        }}
      >

        {dias.map((item) => (

          <div
            key={item.dia}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"20px",
              textAlign:"left",
              boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
            }}
          >

            <h2
              style={{
                color:"#245c3a"
              }}
            >
              📅 {item.dia}
            </h2>


            <p>{item.cafe}</p>
            <p>{item.almoco}</p>
            <p>{item.jantar}</p>


            <button
              style={{
                background:"#45c451",
                color:"white",
                border:"none",
                padding:"10px 20px",
                borderRadius:"20px",
                cursor:"pointer"
              }}
            >
              Adicionar ao plano
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
        
