// import { init, getUnitsPer } from './AppCleanedUp';
// import React, { useEffect, useState } from 'react';
import './App.css';
import React, { useState } from 'react';
import { getUnitsPer } from './App-site';
import { getName } from './App-site';
import { getExists } from './App-site';

function App() {

  const [Units_perNFT, Balance] = useState(false);
  const [NameIt, name] = useState();

  // useEffect(() =>{
  //   init();
  // },[]);

  // Units per NFT
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

// NFT Name
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

 // Exists 
 const [ number , setNumber ] = useState('');
 var tokenId = number;
const [ exists , setExists ] = useState(false);
const fetchExists = () => {
  getExists(tokenId)
    .then(result => {
      setExists(result);
      console.log(result);
      // console.log(theId);
     if (result === true) {
      console.log('this is True');
      document.getElementById("demo").innerHTML = " does exists!";
    } else {
      document.getElementById("demo").innerHTML = " does NOT exists!";
    };
    })
    .catch(err => {
      console.log(err);
      console.log("you've errored");
      return;
    });
    };

  return <div className="App border">

    <p> Units per NFT are {Units_perNFT}</p>
    <button onClick={() => fetchUnitsPer()}>Refresh</button>
    <p></p>

    <p> NFT Name {NameIt}</p>
    <button onClick={() => fetchName()}>Get name</button>
    <p></p>


        {/* <p>Exists: {exists}</p> */}
        <p >id #{number} {exists}<span id ="demo"> to Check for</span></p>

        <input 
        id="userInput" 
        placeholder="enter id #"
        type="text"
        required
        value = {number}
        onChange ={(e) => setNumber(e.target.value ,  document.getElementById("demo").innerHTML = " check..")
        }
        />
        <button onClick= {() => fetchExists()}>Check Exists</button>

        {/* <p>{number}</p> */}










    {/* // End of App */}
  </div>
}

export default App;
  