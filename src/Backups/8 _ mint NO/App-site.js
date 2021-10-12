import Web3 from 'web3';

// import './abi.js';

import { erc721Abi } from "./abi";

let selectedAccount;

let erc721Contract;

let isInitialized = false;

export const init = async () => {
let provider = window.ethereum;

if (typeof provider !== 'undefined'){
  // Metamask is installed!
  provider
    .request({ method: 'eth_requestAccounts' })
    .then(accounts => {
    selectedAccount = accounts[0];
    //  console.log(accounts);
     console.log(`Selected account is ${selectedAccount}`);
     console.log("here 1!");
    })
    .catch((err) =>{
     console.log(err);
     return;
    });


  window.ethereum.on('accountsChanged', function (accounts) {
    selectedAccount = accounts[0];
    console.log(`Selected account changed to ${selectedAccount}`);
    console.log("Changed!");
  });
}
  // can comment out this or infura?
 const web3 = new Web3(provider);
// const web3 = new Web3('https://mainnet.infura.io/v3/42e767e5441c4cf99330bb09519c2342');

//new
const networkId = await web3.eth.net.getId();



erc721Contract = new web3.eth.Contract(
  erc721Abi,
  erc721Contract.networks[networkId].address,

  // Mainnet:
  // '0xD72FB1b2D2EaFB6C4651228C4794E39147d5fCa3'

//Rinkeby acc 11 chrome
  '0xAe35771802cDe63791828b267d1F393cfcb82149'
);


isInitialized = true;
};

export const getUnitsPer = async () => {
  if (!isInitialized) {
    await init();
  };
  return erc721Contract.methods
    .Units_perNFT()
    .call()
    .then((Units_perNFT) =>{
      return Web3.utils.fromWei(Units_perNFT);
    });
};

export const getName = async () => {
  if (!isInitialized) {
    await init();
  };
  return erc721Contract.methods
    .name()
    .call()
};

  export const getOwnBalance = async () => {
    if (!isInitialized){
      await init();
    }
    return erc721Contract.methods
    .balanceOf(selectedAccount)
    // .balanceOf('0xb7a126f42dc54Ff2058Cb5684d3622961f2C46cE')
    .call()
    .then((balance) =>{
      return Web3.utils.fromWei(balance);
    });
  };

  export const mintToken = async () => {
    if (!isInitialized){
      await init();
    }
    return erc721Contract.methods
    .mint(selectedAccount)
    .send({from: selectedAccount});
  }