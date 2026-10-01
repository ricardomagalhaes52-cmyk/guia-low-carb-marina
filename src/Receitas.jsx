    export default function Receitas() {
  const categorias = [
    {
      emoji: "☕",
      nome: "Café da manhã",
      descricao: "Receitas leves para começar o dia"
    },
    {
      emoji: "🍗",
      nome: "Almoço",
      descricao: "Pratos completos e saborosos"
    },
    {
      emoji: "🥗",
      nome: "Jantar",
      descricao: "Opções práticas para sua rotina"
    },
    {
      emoji: "🍎",
      nome: "Lanches",
      descricao: "Receitas rápidas e nutritivas"
    },
    {
      emoji: "🍰",
      nome: "Sobremesas",
      descricao: "Doces low carb deliciosos"
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
          color:"#245c3a",
          fontSize:"32px"
        }}
      >
        🥗 Receitas Low Carb
      </h1>


      <p
        style={{
          color:"#555",
          fontSize:"17px"
        }}
      >
        Escolha uma categoria e descubra receitas fáceis
        para sua rotina.
      </p>


      <div
        style={{
          display:"grid",
          gap:"18px",
          marginTop:"30px"
        }}
      >

        {categorias.map((item) => (
          <div
            key={item.nome}
            style={{
              background:"white",
              padding:"20px",
              borderRadius:"20px",
              boxShadow:"0 5px 15px rgba(0,0,0,0.08)",
              cursor:"pointer"
            }}
          >

            <div
              style={{
                fontSize:"35px"
              }}
            >
              {item.emoji}
            </div>


            <h2
              style={{
                color:"#245c3a",
                margin:"10px"
              }}
            >
              {item.nome}
            </h2>


            <p>
              {item.descricao}
            </p>


            <button
              style={{
                background:"#45c451",
                color:"white",
                border:"none",
                padding:"12px 25px",
                borderRadius:"25px",
                cursor:"pointer"
              }}
            >
              Ver receitas
            </button>

          </div>
        ))}

      </div>


    </div>
  );
}
