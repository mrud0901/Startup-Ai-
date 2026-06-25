import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import DealerDirectory from './pages/DealerDirectory';
import DealerProfile from './pages/DealerProfile';
import LandingPage from './pages/LandingPage';
import DealerHealth from './pages/DealerHealth';
import ChurnPrediction from './pages/ChurnPrediction';
import MarketInsights from './pages/MarketInsights';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/health" element={<DealerHealth />} />
          <Route path="/churn" element={<ChurnPrediction />} />
          <Route path="/insights" element={<MarketInsights />} />
          <Route path="/dealers" element={<DealerDirectory />} />
          <Route path="/dealers/:id" element={<DealerProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
