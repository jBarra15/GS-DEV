import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Solucao from "./routes/solucao";
import Sobre from "./routes/Sobre";
import Cadastrar from "./routes/Cadastrar";
import Error from "./routes/Error";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="min-h-screen p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
