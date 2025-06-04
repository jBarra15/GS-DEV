import { useState } from "react";

function Cadastrar() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cidade: "",
    estado: ""
  });
  const [enviado, setEnviado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnviado(true);
    // Aqui você pode adicionar envio para API ou outra ação real, se quiser.
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full border-l-8 border-blue-700">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">
          Cadastro de Interesse
        </h1>
        <p className="mb-4 text-gray-600">
          Cadastre-se para receber informações e alertas sobre enchentes em sua região.
        </p>
        {enviado ? (
          <div className="text-green-600 font-bold py-6 text-center">
            Cadastro enviado com sucesso! <br /> Em breve você receberá novidades.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">Nome</label>
              <input
                type="text"
                name="nome"
                required
                value={form.nome}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">E-mail</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="exemplo@email.com"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold">Cidade</label>
                <input
                  type="text"
                  name="cidade"
                  required
                  value={form.cidade}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                  placeholder="Sua cidade"
                />
              </div>
              <div style={{ width: "100px" }}>
                <label className="block text-gray-700 font-semibold">Estado</label>
                <input
                  type="text"
                  name="estado"
                  required
                  value={form.estado}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                  placeholder="UF"
                  maxLength={2}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 rounded transition mt-2"
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Cadastrar;
