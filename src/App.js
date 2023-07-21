import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
      <AppProvider>
          <div className='container'>
              <Portfolio />
          </div>    
      </AppProvider>
  );
};


export default App;
