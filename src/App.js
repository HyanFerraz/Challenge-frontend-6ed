import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import Sectors from "./pages/Setores";
import Ingresso from "./pages/Ingresso";
import MeuIngresso from "./pages/MeuIngresso";
import Informacoes from "./pages/Informacoes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/setores" element={<Sectors/>}/>
        <Route path="/informacoes" element={<Informacoes />}/>
        <Route path="/ingresso" element={<Ingresso/>}/>
        <Route path="/meu-ingresso" element={<MeuIngresso/>}/>
      </Routes>
    </Router>
  );
}

export default App;
