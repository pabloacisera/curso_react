import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UseEffect from "./components/useEffect.tsx";
import UseEffectExcersice from "./excersice/UseEffectExcersice.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        {/* Barra de navegación lateral */}
        <nav className="w-1/5 bg-gray-800 p-4 text-white">
          <ul>
            <li>
              <Link
                to="/use_state"
                className="block py-2 px-4 hover:bg-gray-600 font-[helvetica]"
              >
                Lección 1: useState
              </Link>
            </li>
            <li>
              <Link
                to="/use_effect"
                className="block py-2 px-4 hover:bg-gray-600 font-[helvetica]"
              >
                Lección 2: useEffect
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contenido principal */}
        <div className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/use_effect" element={<UseEffect />} />
            <Route path="/dev/use_effect" element={<UseEffectExcersice />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
