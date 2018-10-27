const saveScore = (context, data) => {
  context.commit('setScore', data)
}
const initMatch = context => {
  context.commit('setInitMatch', true)
}
const endMatch = context => context.commit('setInitMatch', false)

export default {
  saveScore,
  initMatch,
  endMatch
}

