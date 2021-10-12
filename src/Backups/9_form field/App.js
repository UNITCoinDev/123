
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { init, getUnitsPer } from './AppCleanedUp';
import { getUnitsPer } from './App-site';
import { getName } from './App-site';
// import { CrackOpen } from './App-site';
// import { id } from './App-site';
import './App.css';


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
    
// const [id, CrackOpen] = useState(0);



  return <div className="App border">
 
    <p> Units per NFT are {Units_perNFT}</p>
    <button onClick={() => fetchUnitsPer()}>Refresh</button>
    

    <p> NFT Name {NameIt}</p>
    <button onClick={() => fetchName()}>Get name</button>





    <p> form: {}</p>
    <label>inptz</label>
    <form className= "section">

      {/* <input type="number" value={id}/> */}
      <input type="number"/>
      {/* onChange={e=>id(e.target.value)} */}

      <p>_</p>
      <button type="submit">Submit</button>

    </form>



  </div>
}

export default App;
  