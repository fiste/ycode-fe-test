import { createStore } from "vuex";

import { layerModule } from "@/store/modules/layerModule.js";

export default createStore({
  modules: {
    layer: layerModule,
  },
});
