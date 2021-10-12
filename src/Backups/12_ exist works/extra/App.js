import { getExists } from './App-site';
import React, { useState } from 'react';
import './App.css';



function App() {


    
  // var theId = document.getElementById("userInput");

  var theId,
  element = document.getElementById('userInput');
  if (element != null) {
    theId = element.value;
    console.log(theId);
  }
  else {
    theId = null;
  }



// var tokenId = [test]; 
// const tokenId =[theId]; 


 

const [ exists , setExists ] = useState(false);


const fetchExists = () => {
  getExists(tokenId)
    .then(result => {
      setExists(result);
      console.log(result);
      // console.log(theId);
     if (result === true) {
      console.log('this is True');
      document.getElementById("demo").innerHTML = "this id exists!";
    } else {
      document.getElementById("demo").innerHTML = "this id Does NOT exists!";
    };

    })
    .catch(err => {
      console.log(err);
      console.log("you've errored");
      return;
    });
    };


 const [ number , setNumber ] = useState('');
 var tokenId = number;

    return <div className="App border">

        <p id="demo">Good Evening!</p>
        <p>Exists: {exists}</p>

        <input 
        id="userInput" 
        placeholder="id #"

        type="text"
        required
        value = {number}
        onChange ={(e) => setNumber(e.target.value)}
       
        />

     

        <button onClick= {() => fetchExists()}>Check Exists</button>

        <p>{number}</p>
        

    </div>
}

export default App;
  