<template>
  <div class="conclusion">
    <div class="card">
      <Sunburst 
        titleText="Overall Performance"
        subTitleText="Let's see overall performance of all players before our final conclusion"
      />
      <div class="sunburst-observation-text">
            <h3 style="margin-left: 20px">Observations</h3>
            <ul>
              <li>
                <p>Sachin Tendulkar scored 34,347 single runs which is highest of all.</p>
              </li>
              <li>
                <p>Again, Sachin Tendulkar took highest number of sixes and fours that are 264 & 4,074 respectively!</p>
              </li>
            </ul>
          </div>
      </div>
      <div class="card center">
          <h1 class="medium">Conclusion</h1>
          <span class="result large"> Sachin Tendulkar Wins !! </span>
          <span class="result "> 
            By winning the battle in batting areas of both ODI and Test cricket
            <br>
            as well as bowling in ODI, he proves the statement by 
            <a href="https://en.wikipedia.org/wiki/Sachin_Tendulkar"> wikipedia</a> 
            <br>
            He can truly be regarded as one of the world's greatest cricketer.
          </span>
      </div>
    </div>
</template>

<script>
import Sunburst from '@/components/Sunburst.vue';

export default {
  name: 'conclusion',
  components: { Sunburst }
};
</script>

<style scoped>
.sunburst-observation-text {
  margin-top: 100px;
}

.large {
  font-size: 75px;
}

.medium {
  font-size: 40px;
}

.center {
  text-align: center;
}
</style>
