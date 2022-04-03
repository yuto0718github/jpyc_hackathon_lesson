console.log("hello world");
async function myFunction(){
  const provider = await new ethers.providers.Web3Provider(window.ethereum) 
  const blockNumber = await provider.getBlockNumber();
  alert(blockNumber);
}
