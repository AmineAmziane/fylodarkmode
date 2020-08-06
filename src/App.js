import React from 'react';
import Navbar from './navbar/'
import Header from './header/'
import Features from './features/'
import Speach from './speach/'
import Footer from './footer/'
import './App.scss';
function App() {
  return (
    <div className="App">
       <Navbar />
       <Header />
       <Features />
       <Speach />
       <Footer />
    </div>
  )
}

export default App;
