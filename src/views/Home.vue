<template>
  <div class="home">
    <div class="card intro-card">
      <span class="big">Hi. 
        <span class="medium"> Let's find out </span>
      </span>
      <blockquote>
      <p class="quote">
        " Who rules the cricket pitch across the globe for ODI and Test? "
      </p>
      </blockquote>
    </div>
    <div class="card">
      <p class="instruction">
        Here, I'hv taken list of top 5 players from 
        <a href="https://en.wikipedia.org/wiki/Wisden_100#Top_5_Test_batsmen">Wisden 100</a> 
        both ODI & Test,
        <br>
        then I'll compare them on basis of three aspects, namely 
        <br>
        <ul>
          <li>Consistency of Player</li>
          <li>Player Dominance</li>
          <li>Winning Contribution</li>
        </ul>
        <br>
        Head over to Visualization :)
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
};
</script>

<style scoped>
.quote {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 70px;
  font-family: 'inconsolata';
}

.big {
  font-family: 'inconsolata';
  font-size: 200px;
  color: rgb(58,55,52);
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.medium {
  font-family: 'inconsolata';
  font-size: 100px;
  color: rgb(58,55,52);
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.intro-card {
  height: 500px;
}

.instruction {
  font-weight: bold;
  font-size: 30px;
  margin-top: 70px;
  /* font-family: 'inconsolata'; */
}
</style>
