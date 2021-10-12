
// import React, { useEffect, useState } from 'react';
import React, { useState } from 'react';
// import { init, getUnitsPer } from './AppCleanedUp';
import { getUnitsPer } from './App-site';
import { getName } from './App-site';
/// Trouble
import { checkExists } from './App-site';
// import { doseExist } from './App-site';
// import { CrackOpen } from './App-site';
// import { id } from './App-site';
import './App.css';


function App() {

  const [Units_perNFT, Balance] = useState(0);
  const [NameIt, name] = useState();
  // const [ExistIt, name1] = useState();

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

  // const fetchExists = () => {
  //   doseExist()
  //   .then(ExistIt =>{

  //     name1(ExistIt);
  //     // console.log();
  // })
  
  // .catch(err => {
  //   console.log(err);
  //   return;
  // });
// }
    
// const [id, CrackOpen] = useState(0);


/// Trouble
// import { checkExists } from './App-site';
const tokenId = 7; // Or whatever the ID of your token is

// const [ifExist, tokenId] = useState();


const [Exists, setExists] = useState(false);


// const fetchExists = () => {
//   checkExists()
//     .then(ifExist =>{
//       name(ifExist);
//   })
//   .catch(err => {console.log(err);return;});
// };

checkExists(tokenId)
    .then(result => {
      setExists(result);
    })
  

  return <div className="App border">

{/* /// Trouble */}
{/* <p>Check if your NFT exists {ifExist}</p> */}
<p>Exists: {Exists}</p>
    <button onClick={() => checkExists()}>Check Exists</button>

    




 
    <p> Units per NFT are {Units_perNFT}</p>
    <button onClick={() => fetchUnitsPer()}>Refresh</button>
    

    <p> NFT Name {NameIt}</p>
    <button onClick={() => fetchName()}>Get name</button>

    
    {/* <p> fetchExists {ExistIt}</p>
    <button onClick={() => fetchExists()}>Get Exist</button> */}


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
  