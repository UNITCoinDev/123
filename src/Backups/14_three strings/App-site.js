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


erc721Contract = new web3.eth.Contract(
  erc721Abi,
  // Mainnet:
  // '0xD72FB1b2D2EaFB6C4651228C4794E39147d5fCa3'

//Rinkeby acc 11 chrome
  '0xAe35771802cDe63791828b267d1F393cfcb82149'
);

isInitialized = true;
};

// Units Per NFT
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

// Get Name
export const getName = async () => {
  if (!isInitialized) {
    await init();
  };
  return erc721Contract.methods
    .name()
    .call()
}

/// Exists
export const getExists = async (tokenId) => {
  if (!isInitialized) {
    await init();
  };
  return erc721Contract.methods
  .Exists(tokenId)
  .call()
}