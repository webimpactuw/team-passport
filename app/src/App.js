import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import QuizzesPage from './pages/QuizzesPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';
import './stylesheets/style.css'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizzesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* add more routes here */}
          {/* probably allows nested layouts too */}
        </Routes>
    </Router>
  );
}

export default App;
