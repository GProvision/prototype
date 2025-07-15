import { BrowserRouter, Routes, Route } from "react-router";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./templates/App.jsx";
import Auth from "./templates/Auth.jsx";
import Ingresar from "./pages/Ingresar.jsx";
import Home from "./pages/Home.jsx";
import Fichas from "./pages/Fichas.jsx";
import NuevaFicha from "./pages/NuevaFicha.jsx";
import Ficha from "./pages/Ficha.jsx";
import ReporteFichas from "./pages/ReporteFichas.jsx";
import Usuarios from "./pages/Usuarios.jsx";
import NuevoUsuario from "./pages/NuevoUsuario.jsx";
import ReporteUsuarios from "./pages/ReporteUsuarios.jsx";
import Opticas from "./pages/Opticas.jsx";
import NuevaOptica from "./pages/NuevaOptica.jsx";
import ReporteOptica from "./pages/ReporteOptica.jsx";
import Optica from "./pages/Optica.jsx";

const $ = (s) => document.querySelector(s);
const $root = $("#root");
const root = createRoot($root);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="auth" element={<Auth />}>
        <Route index element={<Ingresar />} />
      </Route>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="fichas" element={<Fichas />} />
        <Route path="fichas/nueva" element={<NuevaFicha />} />
        <Route path="fichas/reporte" element={<ReporteFichas />} />
        <Route path="fichas/:id" element={<Ficha />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="usuarios/nuevo" element={<NuevoUsuario />} />
        <Route path="usuarios/reporte" element={<ReporteUsuarios />} />
        <Route path="opticas" element={<Opticas />} />
        <Route path="opticas/nueva" element={<NuevaOptica />} />
        <Route path="opticas/:id" element={<Optica />} />
        <Route path="opticas/:id/reporte" element={<ReporteOptica />} />
      </Route>
    </Routes>
    <App />
  </BrowserRouter>
);
