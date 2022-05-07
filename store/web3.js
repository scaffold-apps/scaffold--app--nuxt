import Web3 from "web3";

export const state = () => ({
  web3: null,
  currentAccount: null,
  currentWallet: '',
  wallets: ['Metamask']
})

export const mutations = {
  SET_VALUE(state, {item, value}) {
    state[item] = value
  }
}

export const getters = {
  connected(state) {
    return !!state.web3 && !!state.currentAccount
  },
  currentWallet(state) {
    return state.currentWallet
  }
}

export const actions = {
  async initWeb3({commit}) {
    if (window.ethereum) {
      // @ts-ignore
      // TODO: Add handle function for when the current account changes
      await window.ethereum.request({method: 'eth_requestAccounts'});

      window.web3 = new Web3(window.ethereum)

      commit('SET_VALUE', {item: 'web3', value: Object.freeze(window.web3)})
    }
  },

  async initWallet({commit}, payload) {
    commit('SET_VALUE', {item: 'currentWallet', value: payload})
  },

  async setCurrentAccount({commit, state}) {
    if(state.web3) {
      try {
        const [currentAccount, ...rest] = await state.web3.eth.getAccounts()

        commit('SET_VALUE', {
          item: 'currentAccount',
          value: currentAccount
        })
      } catch (e) {
        console.error(e)
      }
    }
  },

  logout({commit}) {
    commit('SET_VALUE', {item: 'currentWallet', value: null})
    commit('SET_VALUE', {item: 'currentAccount', value: null})
    commit('SET_VALUE', {item: 'web3', value: null})
  },

  reconnect({state, dispatch}) {
    const hasConnectedBefore = state.web3 == null && !!state.currentAccount

    if(hasConnectedBefore) {
      dispatch('initWeb3')
    }
  }
}
