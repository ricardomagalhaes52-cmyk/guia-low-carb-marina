export default function ReceitaDetalhe({ receita }) {

  if (!receita) {
    return (
      <div
        style={{
          padding:"30px",
          textAlign:"center",
          fontFamily:"Arial"
        }}
      >
        Receita não encontrada.
      </div>
    );
  }


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
        🍽️ {receita.nome}
      </h1>


      <div
        style={{
          background:"white",
          padding:"20px",
          borderRadius:"20px",
          boxShadow:"0 5px 15px rgba(0,0,0,0.08)"
        }}
      >

        <div
          style={{
            height:"220px",
            background:"#eee",
            borderRadius:"15px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"60px"
          }}
        >
          🥗
        </div>


        <h2>
          Informações
        </h2>

        <p>
          📂 Categoria: {receita.categoria}
        </p>

        <p>
          ⏱ Tempo de preparo: {receita.tempo}
        </p>

        <p>
          {receita.descricao}
        </p>


        <hr />


        <h2>
          🛒 Ingredientes
        </h2>

        {receita.ingredientes.map((item) => (
          <p key={item}>
            ✅ {item}
          </p>
        ))}


        <hr />


        <h2>
          👩‍🍳 Modo de preparo
        </h2>

        {receita.preparo.map((passo, index) => (
          <p key={passo}>
            {index + 1}. {passo}
          </p>
        ))}


        <button
          style={{
            width:"100%",
            marginTop:"20px",
            background:"#45c451",
            color:"white",
            border:"none",
            padding:"15px",
            borderRadius:"25px",
            fontSize:"17px",
            cursor:"pointer"
          }}
        >
          ⭐ Salvar receita
        </button>


      </div>

    </div>
  );
}
