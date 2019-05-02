import Vuex from 'vuex';
import Vue from 'vue';
import images from './modules/images'

import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    images
  }
});