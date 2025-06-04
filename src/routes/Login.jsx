import { useState } from "react";

function Login() {
  const [form, setForm] = useState({ email: "", senha: "" });
  const [logado, setLogado] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Login fictício só para mostrar funcionamento!
    if (form.email === "teste@email.com" && form.senha === "123456") {
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos! (Use teste@email.com / 123456)");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full border-l-8 border-blue-700">
        <h1 className="text-2xl font-bold text-blue-800 mb-4">Login</h1>
        {logado ? (
          <div className="text-green-600 font-bold py-6 text-center">
            Login realizado com sucesso!<br />
            Seja bem-vindo(a)
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 font-semibold">E-mail</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="Seu e-mail"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Senha</label>
              <input
                type="password"
                name="senha"
                required
                value={form.senha}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded focus:ring-2 focus:ring-blue-400"
                placeholder="Sua senha"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 rounded transition mt-2"
            >
              Entrar
            </button>
          </form>
        )}
        <p className="text-gray-500 text-sm mt-6 text-center">
          <span className="font-bold">Dica para teste:</span><br />
          E-mail: <span className="font-mono">teste@email.com</span> <br />
          Senha: <span className="font-mono">123456</span>
        </p>
      </div>
    </section>
  );
}

export default Login;
