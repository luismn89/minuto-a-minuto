import API from '../../../service/api'

const getIncidents = (context) => {
  API.fetchMinamin()
    .then(response => {
      let data = response.body;
      if (data.length && data.period_name) {
        context.commit('setIncidents', data[0].incidents.incidents)
        context.dispatch('score/saveScore', data[0], { root: true });
        context.dispatch('score/initMatch', null, { root: true });
        let note = document.getElementById('container-nota-destacada');
        note.style.display = 'none'
      } else {
        context.dispatch('score/endMatch', null, { root: true });
        let note = document.getElementById('container-nota-destacada');
        note.style.display = 'block'
      }
    })
    .catch(error => {
      console.log(error)
    })
}

export default {
  getIncidents
}

