import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import BusinessGrid from './components/business/BusinessGrid';
import Advertisement from './components/layout/Advertisement';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <Advertisement position="left" />
        <div className="flex-1">
          <BusinessGrid />
        </div>
        <Advertisement position="right" />
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;