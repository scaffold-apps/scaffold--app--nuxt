interface ABIResponse {
  message: string
  result: string
  status: string
}

export enum WEB3_ERROR {
  USER_REJECTED = 'User rejected the request.'
}

export async function getContractABI(axios: any) {
  const ETHERSCAN_URL = `${process.env.SCAN_URL}/api?module=contract&action=getabi&address=${process.env.CONTRACT_ADDRESS}&apikey=${process.env.SCAN_API_KEY}`

  const response: ABIResponse = await axios.$get(ETHERSCAN_URL)

  return JSON.parse(response.result)
}

export function getContractMethod(web3Contract: any, methodName: string) {
  if(web3Contract?.web3Contract?.methods) {
    return web3Contract.web3Contract.methods[methodName]
  } else {
    return null
  }
}
