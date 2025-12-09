import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio";
import QuemSomos from "./pages/quemSomos/QuemSomos";
import Blog from "./pages/blog/Blog";
import SejaParceiro from "./pages/sejaParceiro/SejaParceiro";
import Contato from "./pages/contato/Contato";
import Conta from "./pages/conta/Conta";
import Navbar from "./components/header/Header";
import Cadastro from "./pages/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror:true,
    });
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/minha-conta" element={<Conta />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/seja-parceiro" element={<SejaParceiro />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </div>
  );
}
