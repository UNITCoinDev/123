import Web3 from 'web3';

let selectedAccount;

let erc20Contract;

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
  // can comment out infura for the other two
// const web3 = new Web3('https://mainnet.infura.io/v3/42e767e5441c4cf99330bb09519c2342');

 const web3 = new Web3(provider);
const networkId = await web3.eth.net.getId();

const erc20Abi = [
  {
		"constant": false,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
];

erc20Contract = new web3.eth.Contract(
  erc20Abi,
  '0x8dECd41A5A235d464195224Af177329Ca322bd55'

);

isInitialized = true;
};


export const getOwnBalance = async () => {
  if (!isInitialized){
    await init();
  }
  return erc20Contract.methods
  // .balanceOf(selectedAccount)
  .balanceOf('0xb7a126f42dc54Ff2058Cb5684d3622961f2C46cE')
  .call()
  .then((balance) =>{
    return Web3.utils.fromWei(balance);
  });


}