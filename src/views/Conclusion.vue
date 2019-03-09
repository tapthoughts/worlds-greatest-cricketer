<template>
  <div class="conclusion">
    <div class="card">
      <Sunburst 
        titleText="Overall Performance"
        subTitleText="Let's see overall performance of all players before our final conclusion"
      />
      <div class="sunburst-hierarchy">
          <button @click="showTreeView = !showTreeView" class="tog-btn">{{!showTreeView ? 'Open Chart Info':'Close View'}}</button>
          <div class="anytihng" v-if="showTreeView">
            <SunburstHierarchy />
          </div>
          <div class="sunburst-observation-text">
            <h3 style="margin-left: 20px">Some Observations</h3>
            <i>
            <ul>
              <li>
                <p>Mumbai Indians scored 6128 single runs which was highest of all.</p>
              </li>
              <li>
                <p>Royal Challengers Bangalore took highest number of sixes, 855!</p>
              </li>
              <li>
                <p>In terms of Bowling, RCB conceded the most (1060) extra runs and they still managed to score above among top 3.</p>
              </li>
              <li>
                <p>Rajasthan Royals scored maximum amount of threes, 63.</p>
              </li>
            </ul>
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sunburst from '@/components/Sunburst.vue';
import SunburstHierarchy from '@/components/SunburstHierarchy.vue';

export default {
  name: 'conclusion',
  components: { 
    Sunburst,
    SunburstHierarchy
  },
  data () {
    return {
      showTreeView: false
    }
  }
};
</script>

<style>
.conclusion {
  /* height: 700px; */
}

.sunburst-hierarchy {
  margin-top: 200px;
}

</style>
