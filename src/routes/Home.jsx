function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-100 to-blue-50 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full border-l-8 border-blue-700">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Enchentes no Brasil: Tecnologia como Solução para Tragédias Anunciadas
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          As enchentes no Brasil são tragédias recorrentes que afetam milhões de pessoas todos os anos. 
          Com o avanço da tecnologia, soluções inovadoras estão ajudando a salvar vidas, prever desastres 
          e reduzir impactos sociais e econômicos.
        </p>
        <ul className="list-disc list-inside text-blue-900 mb-2">
          <li><b>Sistemas de alerta</b> para evacuação em tempo real</li>
          <li><b>Monitoramento inteligente</b> com sensores e IA</li>
          <li><b>Aplicativos</b> que orientam e informam a população</li>
          <li><b>Planejamento urbano</b> com modelagem digital</li>
        </ul>
        <p className="text-blue-700 font-medium mt-4">
          Conheça soluções tecnológicas para um Brasil mais resiliente!
        </p>
        <div className="mt-6 flex justify-end">
  <a
    href="/solucao"
    className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-xl shadow transition"
  >
    Ver Soluções Tecnológicas
  </a>
</div>
<img 
  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  alt="Imagem ilustrativa de enchente"
  className="mt-8 w-full max-w-2xl rounded-2xl shadow-lg object-cover"
  style={{ maxHeight: "240px" }}
/>

      </div>
    </section>
  );
}

export default Home;
