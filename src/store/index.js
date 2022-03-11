import Vuex from 'vuex'

import { user } from './modules/user'
import { priceStore } from './modules/priceStore'

export default Vuex.createStore({
  modules: {
    user,
    priceStore
  }
})
