import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import ReadyToUse from './pages/ReadyToUse';
import './App.css';

function App() 
{
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
      <AboutUs />
      <Service />
      <ReadyToUse/>
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
