import Vue from 'vue'
import Vuex from 'vuex'
import scoreModule from './modules/score'
import incidentsModule from './modules/incidents'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    score: scoreModule,
    incidents: incidentsModule
  }
});
