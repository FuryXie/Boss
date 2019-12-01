import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      city: '北京',
      showTopBar: true,
    },

    actions: {
      changeCity(ctx, city) {
        ctx.commit('changeCity', city)
      },
      changeShowTopBar(ctx, showTopBar) {
        ctx.commit('changeShowTopBar', showTopBar)
      }
    },
    
    mutations: {
      changeCity(state, city) {
        state.city = city
      },
      changeShowTopBar(state, showTopBar) {
        state.showTopBar = showTopBar
      }
    },

  plugins: [persistedState()]
})

