import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColaboradoresApp from './components/pages/ColaboradoresApp';
import ColEsp from './components/pages/colEsp';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ColaboradoresApp />} />
                <Route path="/colEsp" element={<ColEsp />} />
                {/* other routes can be added here */}
            </Routes>
        </Router>
    );
}

export default App;