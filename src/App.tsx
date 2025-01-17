import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UseEffectComponent from './components/useEffect.tsx'; // Renombrado para evitar conflictos

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/useEffect">useEffect</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/useEffect" element={<UseEffectComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
