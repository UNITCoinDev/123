
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { init, getUnitsPer } from './AppCleanedUp';
import { getUnitsPer } from './App-site';
import { getName } from './App-site';


function App() {

  const [Units_perNFT, Balance] = useState(0);
  const [NameIt, name] = useState();

  // useEffect(() =>{
  //   init();
  // },[]);

    const fetchUnitsPer = () => {
      getUnitsPer()
      .then(Units_perNFT =>{
        Balance(Units_perNFT);
    })
    .catch(err => {
      console.log(err);
      return;
    });
    };

    const fetchName = () => {
      getName()
      .then(NameIt =>{
        name(NameIt);
    })
    
    .catch(err => {
      console.log(err);
      return;
    });
  }
    

  return <div className="App">

    <p> Units per NFT are {Units_perNFT}</p>
    <button onClick={() => fetchUnitsPer()}>Refresh</button>
    

    <p> NFT Name {NameIt}</p>
    <button onClick={() => fetchName()}>Get name</button>

  </div>
}

export default App;
  