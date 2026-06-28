
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DealerDirectory from './pages/DealerDirectory';
import DealerProfile from './pages/DealerProfile';
import LandingPage from './pages/LandingPage';
import DealerHealth from './pages/DealerHealth';
import ChurnPrediction from './pages/ChurnPrediction';
import MarketInsights from './pages/MarketInsights';
import AICopilot from './pages/AICopilot';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/health" element={<DealerHealth />} />
              <Route path="/churn" element={<ChurnPrediction />} />
              <Route path="/insights" element={<MarketInsights />} />
              <Route path="/dealers" element={<DealerDirectory />} />
              <Route path="/dealers/:id" element={<DealerProfile />} />
              <Route path="/copilot" element={<AICopilot />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
