import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex gap-6 shadow-md">
      <Link to="/" className="hover:underline font-bold">Home</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/solucao" className="hover:underline">Solução</Link>
      <Link to="/sobre" className="hover:underline">Sobre</Link>
      <Link to="/cadastrar" className="hover:underline">Cadastrar</Link>
    </nav>
  );
}

export default Nav;
