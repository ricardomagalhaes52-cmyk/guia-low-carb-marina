export default function Compras() {

  const categorias = [
    {
      nome: "🥩 Proteínas",
      itens: [
        "☐ Frango",
        "☐ Carne",
        "☐ Peixe",
        "☐ Ovos"
      ]
    },
    {
      nome: "🥦 Verduras e legumes",
      itens: [
        "☐ Alface",
        "☐ Brócolis",
        "☐ Abobrinha",
        "☐ Tomate"
      ]
    },
    {
      nome: "🥑 Gorduras boas",
      itens: [
        "☐ Abacate",
        "☐ Azeite",
        "☐ Castanhas"
      ]
    },
    {
      nome: "☕ Café da manhã",
      itens: [
        "☐ Café",
        "☐ Queijo",
        "☐ Iogurte natural"
      ]
    },
    {
      nome: "🧂 Temperos",
      itens: [
        "☐ Sal",
        "☐ Ervas",
        "☐ Pimentas"
      ]
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
        🛒 Lista de Compras
      </h1>


      <p>
        Organize seus ingredientes da semana.
      </p>


      <div
        style={{
          display:"grid",
          gap:"18px",
          marginTop:"25px"
        }}
      >

        {categorias.map((categoria) => (

          <div
            key={categoria.nome}
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
              {categoria.nome}
            </h2>


            {categoria.itens.map((item) => (

              <p
                key={item}
                style={{
                  fontSize:"17px"
                }}
              >
                {item}
              </p>

            ))}


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
              Marcar compras
            </button>


          </div>

        ))}

      </div>


    </div>
  );
}
