const setScore = (state, data) => {
  state.phase = data.phase
  state.start_date_local = data.start_date_local
  state.date_local = data.date_local
  state.equip_1 = data.equip_1
  state.equip_2 = data.equip_2
  state.group_name = data.group_name
  state.goals_equip_1 = data.goals_equip_1
  state.goals_equip_2 = data.goals_equip_2
  state.flag_equip_1 = data.flag_equip_1
  state.flag_equip_2 = data.flag_equip_2
  state.stadium_name = data.stadium_name
  state.period_name = data.period_name
  state.current_minute = data.current_minute
  state.id = data.id
  state.time = `${data.current_minute == null ? 0 : data.current_minute}:${data.current_second == null ? 0 : data.current_second}`
}
const setInitMatch = (state, status) => state.initMatch = status;

export default {
  setScore,
  setInitMatch
}
