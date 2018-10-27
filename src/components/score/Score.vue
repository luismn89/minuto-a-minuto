<template src="./score.html"></template>
<style src="./score.css"></style>
<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        minuteCrono: '00',
        secondCrono: '00',
        flagCronometer: false
      }
    },
    watch: {
        lastTimeRequest(newVal) {
          if (!this.flagCronometer) {
            this.flagCronometer = true;
            this.initCronometer()
          }
        }
    },
    computed: {
      ...mapGetters({
        phaseMatch : 'score/getPhase',
        dateMatch : 'score/getDate',
        teamsMatch : 'score/getTeamsMatch',
        scoresMatch : 'score/getScores',
        flagMatch : 'score/getFlags',
        groupMatch : 'score/getGroup',
        statusMatch : 'score/getStatusMatch',
        timeMatch : 'score/getCurrentTime',
        stadiumMatch : 'score/getStadium',
        lastTimeRequest : 'score/getTime'
      })
    },
    methods: {
      initCronometer() {
        let dateReq = this.lastTimeRequest,
            minute = Number(dateReq.split(':')[0]),
            second = Number(dateReq.split(':')[1]);
        let statusStop = ['primer tiempo', 'segundo tiempo', 'alargue 1', 'alargue 2']

        let interval = setInterval(() => {
          let dateReq = this.lastTimeRequest,
              currentMinute = Number(dateReq.split(':')[0]),
              currentSecond = Number(dateReq.split(':')[1]);

          if (statusStop.indexOf(this.statusMatch.toLowerCase()) != -1) {
            minute += (second == 59) ? 1 : 0;
            second = (second == 59) ? 0 : second + 1;

            if (minute != currentMinute && (second > 10 && second < 50)){
              minute = currentMinute;
              second = currentSecond;
            }
            // console.log(minute, second)
            let formatMinute = (minute > 9) ? minute : `0${minute}`,
                formatSecond = (second > 9) ? second : `0${second}`;
            this.minuteCrono = formatMinute;
            this.secondCrono = formatSecond;
          } else {
            let formatMinute = (currentMinute > 9) ? currentMinute : `0${currentMinute}`,
                formatSecond = (currentSecond > 9) ? currentSecond : `0${currentSecond}`;
            this.minuteCrono = formatMinute;
            this.secondCrono = formatSecond;
            if (this.statusMatch.toLowerCase() == 'finalizado') clearInterval(interval)
          }
        }, 1000)
      }
    }
  }
</script>
