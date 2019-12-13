import Vue from 'vue'
import Vuex from 'vuex'
// 这个是持久化vuex
// import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      city: '北京',
      showTopBar: true,
      showBar: true,
      isActiveVuex:true,
    },

    actions: {
      changeCity(ctx, city) {
        ctx.commit('changeCity', city)
      },
      changeShowTopBar(ctx, showTopBar) {
        ctx.commit('changeShowTopBar', showTopBar)
      },
      changeShowBar(ctx, showBar) {
        ctx.commit('changeShowBar', showBar)
      },
            changeIsActiveVuex(ctx, isActiveVuex) {
              ctx.commit('changeIsActiveVuex', isActiveVuex)
            }
    },
    
    mutations: {
      changeCity(state, city) {
        state.city = city
      },
      changeShowTopBar(state, showTopBar) {
        state.showTopBar = showTopBar
      },
      changeShowBar(state, showBar) {
        state.showBar = showBar
      },
            changeIsActiveVuex(state, isActiveVuex) {
              state.isActiveVuex = isActiveVuex
            }
    },

  // plugins: [persistedState()]
})

