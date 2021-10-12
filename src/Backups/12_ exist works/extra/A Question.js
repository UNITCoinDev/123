{
  "inputs": [{
      "internalType": "uint256",
      "name": "tokenId",
      "type": "uint256"
  }],
  "name": "Exists",
  "outputs": [{
      "internalType": "bool",
      "name": "",
      "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
},


//Web3Client.js -
export const checkExists = async () => {
  if (!isInitialized) {
    await init();
  };
  return erc721Contract.methods
 //  >>  how do I pass in the input id ?   <<
    .name()
    .call()
}

// App.js -
import { checkExists } from './Web3Client';
const [ifExist, tokenId] = useState();

const fetchExists = () => {
  checkExists()
    .then(ifExist =>{
      name(ifExist);
  })
  .catch(err => {console.log(err);return;});
};

<p>Check if your NFT exists {ifExist}</p>
<button onClick={() => fetchExists()}>Check Exists</button>

