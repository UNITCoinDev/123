import Web3 from 'web3';

let selectedAccount;

export const init = () => {
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
  // can comment out infura if this active?
//  const web3 = new Web3(provider);

const web3 = new Web3('https://mainnet.infura.io/v3/42e767e5441c4cf99330bb09519c2342');
};