<template src="./app.html"></template>
<script>
import Score from './score/Score.vue'
import Incidents from './incidents/Incidents.vue'

import {mapActions, mapGetters} from 'vuex'

const SET_INTERVAL_FETCH = 5000;

export default {
  data () {
    return {
      interval: null
    }
  },
  watch: {
      idMatch(newVal, oldVal) {
        if (newVal != oldVal) this.initMin = true
      },
      initMin(newVal) {
          console.log(newVal)
          if (newVal) this.initIntervalMatch()
      },
      statusMatch(newVal) {
        if (newVal.toLowerCase() == 'finalizado') clearInterval(this.interval)
      }
  },
  components: {
    'score' : Score,
    'incidents' : Incidents
  },
  computed: {
    ...mapGetters({
      idMatch: 'score/getIdMatch',
      statusMatch: 'score/getStatusMatch',
      isInitMatch: 'score/getInitMatch'
    }),
    initMin() {
      return this.isInitMatch;
    }
  },
  methods: {
    ...mapActions({
      'fetchMinami' : 'incidents/getIncidents',
    }),
    initIntervalMatch() {
      this.interval = setInterval(() => {
        this.fetchMinami()
      }, SET_INTERVAL_FETCH)
    }
  },
  mounted() {
    this.fetchMinami()
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>
