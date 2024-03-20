import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./shared/Footer";
import Homepage from "./components/pages/Homepage";
import Cmppage from "./components/pages/Cmppage";
import { Example2 } from "./components/Cpmofgpu";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/cmpofgpu" element={<Example2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
