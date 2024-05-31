import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Posts from './components/Posts';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Posts />
      <Footer />
    </div>
  );
};

export default App;
