<template>
  <div class="player-details-card">
    <div class="info-card" v-if="player">
      <span class="card-heading">
          {{player.player_name}}
      </span>
      <h4>{{player.details.info.nationality}}</h4>
      <p class="card-text">
        Total Runs Scored: <span class="text-value">{{player.details.info.nationality}}</span>
        <br>
        Total Runs Scored: <span class="text-value">{{player.details.info.nationality}}</span>
        <br>
        Total Runs Scored: <span class="text-value">{{player.details.info.nationality}}</span>
        <br>
        Total Runs Scored: <span class="text-value">{{player.details.info.nationality}}</span>
      </p>
    </div>
    <div class="info-card" v-else>
      <p class="not-selected">
        Click any player bar <br> to view his details.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayerDetailCard',
  props: ['person'],
  watch: {
    person: {
      handler: function(newValue) {
        this.player = newValue;
        console.log(this.player)
      }
    }
  },
  data() {
    return {
      player: this.person
    }
  }
}
</script>

<style scoped>
  .info-card {
    border-radius: 2px;
    float: right;
    border: 1px solid rgb(58,55,52);
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;
    color: rgb(58,55,52);
    transition: .3s;
    padding: 10px;
    width: 24%;
    margin-bottom: -150px;
  }

  .player-details-card {
    width: 100%;
    display: block;
    float: right;
    padding: 10px;
  }
</style>
