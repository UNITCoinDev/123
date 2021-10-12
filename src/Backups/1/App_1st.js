// import './App.css';
// import React from "react";
import React, { useEffect } from 'react';
import Web3 from 'web3';


function App() {
  const providerUrl = process.env.PROVIDER_URL;

  useEffect(() =>{
    const web3 = new Web3('https://mainnet.infura.io/v3/42e767e5441c4cf99330bb09519c2342');

    let provider = window.ethereum;
    if (typeof provider !== 'undefined'){
      // Metamask is installed!

      provider
        .request({ method: 'eth_requestAccounts' })
        .then(accounts => {
         console.log(accounts);
        })
        .catch((err) =>{
         console.log(err);
        });
    }

      window.ethereum.on('accountsChanged', function (accounts) {
        console.log(accounts);
      });

      // can comment out infura if this active?
  //  const web3 = new Web3(provider);

  },[]);

  return <div className="App"></div>
}

export default App;
  