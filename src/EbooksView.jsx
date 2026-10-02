import React from 'react';

export default function EbooksView() {
  const ebooksList = [
    {
      id: 1,
      titulo: "Desafio Low Carb: 7 Dias para Organizar Sua Rotina",
      subtitulo: "Um plano simples, prático e saboroso",
      descricao: "Um guia passo a passo com checklist diário para estruturar sua alimentação sem radicalismo e com muita leveza.",
      tag: "Bônus Exclusivo 01",
      corTag: "bg-emerald-100 text-emerald-800",
      botaoTexto: "Abrir Desafio de 7 Dias",
    },
    {
      id: 2,
      titulo: "Guia Iniciante Low Carb Fácil",
      subtitulo: "Tudo o que você precisa para começar",
      descricao: "Descubra como substituir carboidratos refinados com inteligência, montando pratos coloridos, saborosos e nutritivos.",
      tag: "Bônus Exclusivo 02",
      corTag: "bg-amber-100 text-amber-800",
      botaoTexto: "Ler Guia Iniciante",
    }
  ];

  return (
    <div className="max-w-md mx-auto p-4 pb-24 bg-gray-50 min-h-screen">
      <div className="text-center my-6">
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full">
          Biblioteca da Marina
        </span>
        <h1 className="text-2xl font-bold text-gray-800 mt-2">Seus E-books e Guias</h1>
        <p className="text-sm text-gray-600 mt-1">
          Materiais práticos para acelerar seus resultados e organizar sua rotina.
        </p>
      </div>

      <div className="space-y-4">
        {ebooksList.map((ebook) => (
          <div 
            key={ebook.id} 
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between transition hover:shadow-md"
          >
            <div>
              <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md ${ebook.corTag}`}>
                {ebook.tag}
              </span>
              <h2 className="text-lg font-bold text-gray-800 mt-2 leading-snug">
                {ebook.titulo}
              </h2>
              <p className="text-xs font-medium text-emerald-700 mt-0.5">
                {ebook.subtitulo}
              </p>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                {ebook.descricao}
              </p>
            </div>

            <button 
              onClick={() => alert(`A a abrir o ${ebook.titulo}`)}
              className="mt-5 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs py-3 px-4 rounded-xl transition shadow-sm flex items-center justify-center gap-2"
            >
              📖 {ebook.botaoTexto}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
