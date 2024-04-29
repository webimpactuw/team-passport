import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizzesPage } from './pages/QuizzesPage';
import DashboardPage from './pages/DashboardPage';
import './App.css';
import './stylesheets/style.css'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/quiz" element={<QuizzesPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
          {/* add more routes here */}
          {/* probably allows nested layouts too */}
        </Routes>
    </Router>
  );
}

export default App;
