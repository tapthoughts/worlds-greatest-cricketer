<template>
  <div class="player-details-card">
    <div class="info-card" v-if="player">
      <span class="card-heading">
          {{player.player_name}}
      </span>
      <p class="card-text">
        Nationality: <span class="text-value">{{player.info.nationality}}</span>
        <br>
        Batting Style: <span class="text-value">{{player.info.batting_style}}</span> 
        <br>
        Bowling Style: <span class="text-value">{{player.info.bowling_style}}</span>
        <br>
        Test career span: <span class="text-value">{{player.info.test_career_span}}</span>
        <br>
        ODI career span: <span class="text-value">{{player.info.odi_career_span}}</span>
      </p>
    </div>
    <div class="info-card" v-else>
      <p class="card-heading">
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
    width: 25%;
    margin-bottom: -140px;
    height: 150px;
  }

  .player-details-card {
    width: 100%;
    display: block;
    float: right;
  }

  .card-heading {
    font-size: 18px;
    font-weight: bold;
    color: rgb(58,55,52);
  }

  .card-text {
    font-size: 16px;
    font-weight: bold;
    color: rgb(58,55,52);
  }

  .text-value {
    font-size: 15px;
  }
</style>
