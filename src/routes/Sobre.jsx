function Sobre() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full border-l-8 border-blue-700">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">
          Sobre o Projeto
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          Este site foi desenvolvido como parte do projeto integrador da graduação, com o objetivo de apresentar soluções tecnológicas para reduzir os impactos das enchentes no Brasil.
        </p>
        <p className="text-gray-700 mb-4">
          A motivação surgiu ao observar que milhares de brasileiros são afetados todos os anos por eventos extremos, como enchentes e deslizamentos, com grandes perdas humanas e econômicas. O avanço da tecnologia traz oportunidades reais para monitorar, prevenir e salvar vidas.
        </p>
        <div className="bg-blue-50 rounded-xl p-4 mb-4">
          <strong>Dados de impacto:</strong>
          <ul className="list-disc list-inside text-blue-900 mt-2">
            <li>+21 mil inundações no Brasil entre 1991 e 2022</li>
            <li>Mais de 110 milhões de pessoas afetadas</li>
            <li>R$ 8 bilhões em prejuízos anuais</li>
          </ul>
        </div>
        <p className="text-gray-700 mb-2">
        </p>
        <p className="text-gray-700 text-sm">
        </p>
      </div>
    </section>
  );
}

export default Sobre;
