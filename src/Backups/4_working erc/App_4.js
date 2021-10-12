
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { init, getUnitsPer } from './AppCleanedUp';
import { getOwnBalance } from './AppCleanedUp';


function App() {

  const [balance, setBalance] = useState(0);

  // useEffect(() =>{
  //   init();
  // },[]);

    const fetchBalance = () => {
      getOwnBalance().then(balance =>{
        setBalance( balance );
    }).catch(err => {
      console.log(err);
    });

  };

  return <div className="App">

  <p> your Balance {balance}</p>
  <button onClick={() => fetchBalance()}>Refresh</button>

  </div>
}

export default App;
  