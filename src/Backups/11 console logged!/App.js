import { getExists } from './App-site';
import React, { useState } from 'react';
import './App.css';


function App() {

var tokenId = [11]; 

const [ Exists, setExists] = useState(false);


const fetchExists = () => {
  getExists(tokenId)
    .then(result => {
      setExists(result);
      console.log(result)
    })
    .catch(err => {
      console.log(err);
      console.log("you've errored");
      return;
    });
    };


// checkExists(tokenId) 
//     .then(result => {
//       setExists(result);
//     })

  return <div className="App border">

<p>Exists: {Exists}</p>
    <button onClick={() => fetchExists(tokenId)}>Check Exists</button>


  </div>
}

export default App;
  