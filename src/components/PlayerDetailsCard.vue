<template>
  <div class="player-details-card">
    <div class="info-card" v-if="player">
      <span class="card-heading">
          {{player.player_name}}
      </span>
      <h4>{{player.details.home.runs_conceded}}</h4>
      <p class="card-text">
        Total Runs Scored: <span class="text-value">{{player.details.home.wickets}}</span>
      </p>
    </div>
    <div class="info-card" v-else>
      <p class="not-selected">
        Click any player bar to view more info.
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
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #ffffff;
    overflow: hidden;
    color: rgb(58,55,52);
    transition: .3s;
    padding: 10px;
    width: 96%;
  }
</style>
