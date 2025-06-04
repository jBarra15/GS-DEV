import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full border-l-8 border-red-600 flex flex-col items-center">
        <span className="text-red-600 text-7xl font-extrabold mb-2">404</span>
        <h1 className="text-2xl font-bold text-red-700 mb-2">Página não encontrada</h1>
        <p className="text-gray-600 text-center mb-6">
          O endereço que você tentou acessar não existe ou foi removido.<br />
          Se estiver perdido, volte para a página inicial!
        </p>
        <Link
          to="/"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-xl shadow transition"
        >
          Voltar para o Início
        </Link>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/6195/6195700.png"
        alt="Alerta de enchente"
        className="mt-6 w-32 opacity-80"
        style={{ filter: "drop-shadow(0 0 8px #2563eb22)" }}
      />
    </section>
  );
}

export default Error;
