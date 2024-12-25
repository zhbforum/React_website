import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
<<<<<<< HEAD
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
=======
import Service from './pages/Service'
import ReadyToUse from './pages/ReadyToUse';
>>>>>>> 697974716684aaa8cc8fd324dbbf48fcb91c7208
import './App.css';

function App() 
{
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <HomePage />
      </main>
<<<<<<< HEAD
      <AboutUs />
      <Service />
      <ContactUs />
=======
      <AboutUs/>
      <Service/>
      <ReadyToUse/>
>>>>>>> 697974716684aaa8cc8fd324dbbf48fcb91c7208
      <Footer />
    </div>
  );
}

export default App;
