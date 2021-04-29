import { createStore } from 'vuex'

import { layerModule } from './modules/layerModule.js'

export default createStore({
  modules: {
    layer: layerModule
  }
})
