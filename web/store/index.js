import sanityClient from '~/sanityClient'

export const state = () => ({
  global: {}
})

export const mutations = {
  setGlobal(state, global) {
    state.global = global
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const query = `
      *[_id == "general"][0] {
        footer
      }
    `
    await sanityClient.fetch(query).then(response => {
      commit('setGlobal', response)
    });
  }
}
