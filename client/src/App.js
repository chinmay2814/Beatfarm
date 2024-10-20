import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import BeatDetailPage from '../src/pages/BeatDetailPage';
import Header from '../src/components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beats/:id" element={<BeatDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
