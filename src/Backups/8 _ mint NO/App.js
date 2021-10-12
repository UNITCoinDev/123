
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { init, getUnitsPer } from './AppCleanedUp';
import { getUnitsPer } from './App-site';
import { getName } from './App-site';
import { getOwnBalance } from './App-site';
import { init, mintToken } from './App-site';


function App() {

  const [Units_perNFT, Balance] = useState(0);
  const [NameIt, name] = useState();
  const [balance, setBalance] = useState('null');
  const [minted, setMinted] = useState(false);

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
    };

    const fetchBalance = () => {
      getOwnBalance().then(balance =>{
        setBalance( balance );
    }).catch(err => {
      console.log(err);
    });

    };

    const mint = () => {
      mintToken().then(tx =>{
        console.log(tx);
        setMinted(true);
    }).catch(err => {
      console.log(err);
    });

    };


    

  return <div className="App">

    <p> Units per NFT are {Units_perNFT}</p>
    <button onClick={() => fetchUnitsPer()}>Refresh</button>
    

    <p> NFT Name {NameIt}</p>
    <button onClick={() => fetchName()}>Get name</button>

    <p> your Balance {balance}</p>
  <button onClick={() => fetchBalance()}>Refresh</button>
    <p>_</p>
    {!minted ? (<button onClick={() => mint()}>Mint Token</button>
    ) : (
      <p>Token Already Minted</p>
    )};



  </div>
}

export default App;
  