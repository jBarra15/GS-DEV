function Solucao() {
  const solucoes = [
    {
      titulo: "Sistemas de Alerta Precoce",
      desc: "Envio de notificações em tempo real para a população em áreas de risco, permitindo evacuação rápida e segura antes de enchentes.",
      exemplo: "Ex: AlertaGov, J-Alert (Japão), aplicativos de SMS e sirenes integradas."
    },
    {
      titulo: "Monitoramento Inteligente",
      desc: "Sensores, radares e imagens de satélite conectados a softwares de IA, capazes de prever enchentes com até 48h de antecedência.",
      exemplo: "Ex: CEMADEN, IBM Flood Forecasting, satélites do INPE."
    },
    {
      titulo: "Aplicativos de Comunicação",
      desc: "Apps e plataformas digitais que informam rotas de fuga, abrigos e status da enchente, incluindo recursos de colaboração da população.",
      exemplo: "Ex: Alerta Rio, TerraMA², integração com WhatsApp e Telegram."
    },
    {
      titulo: "Planejamento Urbano Digital",
      desc: "Ferramentas de modelagem BIM/GIS simulam cenários de inundação e auxiliam no desenho de cidades mais resilientes e seguras.",
      exemplo: "Ex: Virtual Singapore, sistemas de drenagem em Curitiba e Porto Alegre."
    },
    {
      titulo: "Big Data e Mobilidade Urbana",
      desc: "Análise em tempo real de dados de trânsito, redes sociais e sensores para planejar evacuação e corredores de emergência.",
      exemplo: "Ex: Centro de Operações Rio, XRAIN (Japão), Digital Twin (Amsterdã)."
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">Soluções Tecnológicas Contra Enchentes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        {solucoes.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-700 hover:scale-105 transition transform"
          >
            <h2 className="text-xl font-bold text-blue-700 mb-2">{item.titulo}</h2>
            <p className="text-gray-700 mb-2">{item.desc}</p>
            <p className="text-blue-800 text-sm"><b>{item.exemplo}</b></p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-blue-700 font-medium">
        Investir em tecnologia é salvar vidas e tornar cidades mais preparadas para o futuro!
      </p>
    </section>
  );
}

export default Solucao;
