<template src="./incidents.html"></template>
<style src="./incidents.css"></style>
<script>
  import ItemIncident from './subcomponents/item-incident/ItemIncident.vue'

  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        'listIncidents' : 'incidents/getIncidents'
      }),
      listIncidentsVisible() {
        return this.listIncidents;
      }
    },
    components: {
      'itemincident' : ItemIncident
    }
  }
</script>
