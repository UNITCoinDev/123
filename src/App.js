// import { init, getUnitsPer } from './AppCleanedUp';
// import React, { useEffect, useState } from 'react';
import './App.css';
import React, { useState } from 'react';
import { getUnitsPer } from './App-site';
import { getName } from './App-site';
import { getExists } from './App-site';
import { getCrack } from './App-site';

function App() {
  const [ number , setNumber ] = useState('');
  var tokenId = number;
  // useEffect(() =>{
  //   init();
  // },[]);

  // Units per NFT
   const [Units_perNFT1, Balance] = useState(false);
    const fetchUnitsPer = () => {
      getUnitsPer()
      .then(Units_perNFT1 =>{
        Balance(Units_perNFT1);
    })
    .catch(err => {
      console.log(err);
      return;
    });
    };

// NFT Name
  const [NameIt, name1] = useState();
    const fetchName = () => {
      getName()
      .then(NameIt =>{
        name1(NameIt);
    })
    .catch(err => {
      console.log(err);
      return;
    });
  }

 // Exists 

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

// var tokenId2 = 11;
// const [ setCrack ] = useState(false);
const fetchCrack = () => {
  getCrack(tokenId)
  .then(result =>{
    getCrack(result);
    console.log(result);
})
.catch(err => {
  console.log(err);
  console.log("you've Crack errored");
  return;
});
}



  return <div className="App border">

{/* <p> Crack_Open {CrackIt}</p> */}
<p> Crack_Open</p>
<p >NFT id #{number}<span id ="crack"> to Crack</span></p>

    {/* <input 
        id="userInputC" 
        placeholder="enter id #"
        type="text"
        required
        value = {number}
        onChange ={(e) => setNumber(e.target.value ,  document.getElementById("crack").innerHTML = " CrackIt..")
        }
        /> */}
   <button onClick={() => fetchCrack()}>Crack it</button>     
      
    <p></p>


    <p> Units per NFT are {Units_perNFT1}</p>
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
        onChange ={(e) => setNumber(e.target.value, 
           document.getElementById("demo").innerHTML = " check..")
        }
        />
        <button onClick= {() => fetchExists()}>Check Exists</button>

        {/* <p>{number}</p> */}










    {/* // End of App */}
  </div>
}

export default App;
  