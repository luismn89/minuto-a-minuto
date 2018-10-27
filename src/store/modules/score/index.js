import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  phase: '',
  start_date_local: '',
  date_local: '',
  equip_1: '',
  equip_2: '',
  group_name: '',
  goals_equip_1: '-',
  goals_equip_2: '-',
  flag_equip_1: '',
  flag_equip_2: '',
  stadium_name: '',
  period_name: '',
  current_minute: '-',
  id: '',
  time: '',
  initMatch: false
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
