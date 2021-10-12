
import React, { useEffect } from 'react';
import { init } from './AppCleanedUp';


function App() {

  useEffect(() =>{
    init();

  },[]);

  return <div className="App"></div>
}

export default App;
  