import Vuex from 'vuex'

import defaultState from './state/state'
import getters from './getters/getters'
import mutations from './mutations/mutations'
import actions from './actions/actions'

export default () => {
  const store = new Vuex.Store({
    state: defaultState,
    actions: actions,
    getters: getters,
    mutations: mutations
  })

  // vuex热更新
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './getters/getters',
      './actions/actions',
      './mutations/mutations'
    ], () => {
      const newState = require('./state/state').default
      const newGetters = require('./getters/getters').default
      const newActions = require('./actions/actions').default
      const newMutations = require('./mutations/mutations').default
      store.hotUpdate({
        state: newState,
        getters: newGetters,
        actions: newActions,
        mutations: newMutations
      })
    })
  }
  return store
}
