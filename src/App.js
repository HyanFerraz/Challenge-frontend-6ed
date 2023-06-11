import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import Experiencia from "./pages/Experiencia";
import Sectors from "./pages/Sectors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/setores" element={<Sectors/>}/>
      </Routes>
    </Router>
  );
}

export default App;
