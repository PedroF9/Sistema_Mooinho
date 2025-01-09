import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColaboradoresApp from './components/pages/ColaboradoresApp';
import ColEspPage from './components/pages/colEspPage';
import InventarioPage from './components/pages/inventarioPage';



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ColaboradoresApp />} />
                <Route path="/colEsp" element={<ColEspPage />} />
                <Route path="/inv" element={<InventarioPage />} />
                {/* other routes can be added here */}
            </Routes>
        </Router>
    );
}

export default App;