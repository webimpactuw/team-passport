import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizzesPage } from './pages/QuizzesPage';
import { DashboardPage } from './pages/DashboardPage';
import './App.css';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizzesPage />} />
          {/* add more routes here */}
          {/* probably allows nested layouts too */}
        </Routes>
    </Router>
  );
}

export default App;
