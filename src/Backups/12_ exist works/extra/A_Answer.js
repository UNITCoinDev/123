In the JSON ABI, the name "Exists" should be lowercase.

//  Web3Client.js
export const checkExists = async (tokenId) => {
	...
  return erc721Contract.methods.exists(tokenId).call()
}

//  App.js
const tokenId = 1; // Or whatever the ID of your token is

const [exists, setExists] = useState(false);

...
checkExists(tokenId)
    .then(result => {
      setExists(result);
    }
...
<p>Exists: {exists}</p>
...