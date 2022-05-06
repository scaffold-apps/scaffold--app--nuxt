import {getContractABI, getContractMethod} from "~/api/web3";

export const state = () => ({
  web3Contract: null
})

export const mutations = {
  SET_VALUE(state, {item, value}) {
    state[item] = value
  }
}

export const actions = {
  async initContract({state, commit, rootState}) {
    if(!state.web3Contract) {
      const contractABI = await getContractABI(this.$axios)

      commit('SET_VALUE', {
        item: 'web3Contract',
        // TODO need to commit using the web3 instance from the other store
        value: Object.freeze(new rootState.web3.web3.eth.Contract(contractABI, process.env.CONTRACT_ADDRESS))
      })
    }
  },

  async print({state}) {
    const contractMethod = getContractMethod(state, 'print')

    if(contractMethod) {
      const result = await contractMethod().call()
      alert(result)
    }
  }
}
