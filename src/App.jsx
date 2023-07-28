import React from 'react';
import TipCalculator from './components/TipCalculator';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
       <Header/><br></br>
      <TipCalculator/>
      <Footer/>
      
    </div>
  );
};

export default App;