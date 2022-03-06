import {getContractMethod} from "~/api/web3";

async function print() {
  return getContractMethod('print')().call()
}

export default {
  print
}
