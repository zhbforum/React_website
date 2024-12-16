import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './App.css';

function App() 
{
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
