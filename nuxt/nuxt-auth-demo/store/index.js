const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    token: null,
    authenticated: false
  }
}

export const mutations = {
  setToken (state, token) {
    state.token = token
    state.authenticated = !!token
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let token = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        token = parsed.token
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setToken', token)
  }
}
