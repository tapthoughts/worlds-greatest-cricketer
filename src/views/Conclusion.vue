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
                <p>Sachin Tendulkar scored 34,347 single runs which is highest of all.</p>
              </li>
              <li>
                <p>Again, Sachin Tendulkar took highest number of sixes, 264!</p>
              </li>
              <li>
                <p>In terms of Bowling, Brian Lara conceded least number of runs, 89.</p>
              </li>
              <li>
                <p>Michael Bevan made least number of boundaries, (Only 22% of his score).</p>
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
