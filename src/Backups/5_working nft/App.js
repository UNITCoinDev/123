
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { init, getUnitsPer } from './AppCleanedUp';
import { getUnitsPer } from './AppCleanedUp';


function App() {

  const [Units_perNFT, Balance] = useState(0);

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

  return <div className="App">

  <p> Units per NFT are {Units_perNFT}</p>
  <button onClick={() => fetchUnitsPer()}>Refresh</button>

  </div>
}

export default App;
  