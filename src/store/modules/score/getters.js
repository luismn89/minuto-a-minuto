const getPhase = state => state.phase;
const getInitDate = state => state.start_date_local;
const getDate = state => state.date_local;
const getTeamsMatch = state => {
  return {
    local: state.equip_1,
    visit: state.equip_2
  }
}
const getScores = state => {
  return {
    local: state.goals_equip_1,
    visit: state.goals_equip_2
  }
}
const getFlags = state => {
  return {
    local: state.flag_equip_1,
    visit: state.flag_equip_2
  }
}
const getGroup = state => state.group_name;
const getStatusMatch = state => state.period_name;
const getCurrentTime = state => state.current_minute;
const getIdMatch = state => state.id
const getStadium = state => state.stadium_name
const getInitMatch = state => state.initMatch
const getTime = state => state.time

export default {
  getPhase,
  getInitDate,
  getDate,
  getTeamsMatch,
  getScores,
  getGroup,
  getFlags,
  getStatusMatch,
  getCurrentTime,
  getIdMatch,
  getStadium,
  getInitMatch,
  getTime
}
