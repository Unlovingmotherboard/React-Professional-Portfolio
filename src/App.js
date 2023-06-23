import React from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css'; 1*-- In case we need it 

import './App.css';


// import EXMAPLE_COMPONENT_1 from './components/EXMAPLE_COMPONENT_1'; 4*--  This are where all your components should reside
// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
console.log("What's up dude! We're re-learning React!");
console.log("Week 1 of the rest of my life!");
console.log(`Come back to this and figure out how this narrative could be played out in real time for every instance
the page opens. The purpose is to grip the developer into a journey that unfolds as I am living it.

Come join me on my journey to the stars as we discover a new path foward.`);
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
  
      </header>

      <AppProvider>
          <div className='container'>
              {/* This is where you will be structuring the HTML and CSS. Within JS. In the form of components! 5*-----  */} 
          </div>    
      </AppProvider>
    </div>
  );
};


export default App;
