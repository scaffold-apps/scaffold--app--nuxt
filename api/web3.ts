import Web3 from "web3";

interface ABIResponse {
  message: string
  result: string
  status: string
}

export async function init(axios: any) {
  // @ts-ignore
  if (window.ethereum) {
    // @ts-ignore
    // TODO: Add handle function for when the current account changes
    await window.ethereum.request({method: 'eth_requestAccounts'});

    window.web3 = new Web3(window.ethereum)

    await setCurrentAccount()
    await initContract(axios)
  }
}

export async function setCurrentAccount() {
  window.web3.eth.getAccounts().then((accounts: string[]) => {
    window.currentWeb3Account = accounts[0]
  })
}

export async function initContract(axios: any) {
  if(!window.web3Contract) {
    const contractABI = await getContractABI(axios)

    window.web3Contract = new window.web3.eth.Contract(contractABI, process.env.CONTRACT_ADDRESS);
  }
}

export async function getContractABI(axios: any) {
  const ETHERSCAN_URL = `${process.env.SCAN_URL}/api?module=contract&action=getabi&address=${process.env.CONTRACT_ADDRESS}&apikey=${process.env.SCAN_API_KEY}`

  const response: ABIResponse = await axios.$get(ETHERSCAN_URL)

  return JSON.parse(response.result)
}

export function getContractMethod(methodName: string) {
  return window.web3Contract.methods[methodName]
}
