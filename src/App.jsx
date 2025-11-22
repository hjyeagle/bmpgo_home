import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CompanyIntro from './pages/CompanyIntro';
import SulfurIntro from './pages/SulfurIntro';
import ApplicationFields from './pages/ApplicationFields';
import Notices from './pages/Notices';
import Archives from './pages/Archives';
import Inquiry from './pages/Inquiry';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<CompanyIntro />} />
        <Route path="/product/sulfur" element={<SulfurIntro />} />
        <Route path="/product/fields" element={<ApplicationFields />} />
        <Route path="/community/notices" element={<Notices />} />
        <Route path="/community/archives" element={<Archives />} />
        <Route path="/community/inquiry" element={<Inquiry />} />
      </Routes>
    </Layout>
  );
}

export default App;
