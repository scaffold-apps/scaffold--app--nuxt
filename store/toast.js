const colors = {
  error: 'red accent-2',
  info: 'blue lighten-1',
  warning: 'orange darken-2',
  success: 'green',
}

export const state = () => ({
  show: false,
  message: '',
  color: colors.red,
  tile: false,
  text: true,
  timeout: null,
  showButton: false,
})

export const getters = {
  tile: (state) => state.tile,
  text: (state) => state.text,
  timeout: (state) => state.timeout,
  message: (state) => state.message,
  show: (state) => state.show,
  showButton: (state) => state.showButton,
  color: (state) => state.color,
}

export const mutations = {
  SET_VALUE(state, {item, value}) {
    state[item] = value
  },

  DISPLAY_ERROR(state, message) {
    state.text = false
    state.timeout = null

    state.tile = true
    state.showButton = true
    state.color = colors.error
    state.message = message
    state.show = true
  },

  DISPLAY_INFO(state, message) {
    state.tile = false
    state.timeout = 5000
    state.showButton = false

    state.text = true
    state.color = colors.info
    state.message = message
    state.show = true
  },

  DISPLAY_WARNING(state, message) {
    state.showButton = false
    state.text = false

    state.timeout = 5000
    state.tile = true
    state.color = colors.warning
    state.message = message
    state.show = true
  },

  DISPLAY_SUCCESS(state, message) {
    state.showButton = false
    state.tile = false

    state.text = true
    state.timeout = 5000
    state.color = colors.success
    state.message = message
    state.show = true
  },
}
