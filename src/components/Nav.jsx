import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-3">
        <div className="font-extrabold text-xl tracking-tight">
          Projeto GS
        </div>
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:underline font-bold">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/solucao" className="hover:underline">Solução</Link>
          <Link to="/sobre" className="hover:underline">Sobre</Link>
          <Link to="/cadastrar" className="hover:underline">Cadastrar</Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-600 flex flex-col gap-4 px-4 pb-4">
          <Link to="/" className="py-2 border-b border-blue-800" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/login" className="py-2 border-b border-blue-800" onClick={() => setOpen(false)}>Login</Link>
          <Link to="/solucao" className="py-2 border-b border-blue-800" onClick={() => setOpen(false)}>Solução</Link>
          <Link to="/sobre" className="py-2 border-b border-blue-800" onClick={() => setOpen(false)}>Sobre</Link>
          <Link to="/cadastrar" className="py-2" onClick={() => setOpen(false)}>Cadastrar</Link>
        </div>
      )}
    </nav>
  );
}

export default Nav;
