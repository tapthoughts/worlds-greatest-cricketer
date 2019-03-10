<template>
    <div class="sunburst-container chart">
        <ChartTitle :title="titleText" :subTitle="subTitleText" />
        <br>
        <chart-sunburst ref="chart" :data='chartData'></chart-sunburst>
    </div>
</template>

<script>
import ChartTitle from '@/components/ChartTitle.vue';
import { ChartSunburst } from 'vue-d2b';
import playerDetailsJson from '../../json/playersOverallData.json';
import { PLAYER_COLOR } from '../playerColor.constants';

export default {
  name: 'sunburst',
  props: ['titleText', 'subTitleText'],
  components: {
    ChartSunburst,
    ChartTitle,
  },
  data() {
    return {
      chartData: {
        label: 'Player Details',
        color: '#3584BB',
        children: [],
      },
    };
  },
  mounted() {
    const playerColor = PLAYER_COLOR;
    Object.entries(playerDetailsJson).forEach(([key, player]) => {
      this.chartData.children.push({
        label: player.info.name,
        color: playerColor[key],
        children: [
          {
            label: 'Batting Performance',
            color: '#41A941',
            children: [
              {
                label: 'Boundaries',
                color: '#9E76C3',
                children: [
                  {
                    label: 'Fours',
                    color: '#8C8C8C',
                    size: player.cricket.batting.fours,
                  },
                  {
                    label: 'Sixes',
                    color: '#97675D',
                    size: player.cricket.batting.sixes,
                  },
                ],
              },
              {
                label: 'Non-Boundaries',
                color: '#DA3D3D',
                size: player.cricket.batting.non_boundaries,
              },
            ],
          },
          {
            label: 'Bowling Performance',
            color: '#97675D',
            children: [
              {
                label: 'Runs conceded',
                color: '#FF8C26',
                size: player.cricket.bowling.runs_conceded,
              },
            ],
          },
        ],
      });
    });
  },

};
</script>

<style scoped>
  .chart{
    width: 96%;
    height: 500px;
  }

  /* media query to force hide breadcrumbs when the screen is too small */
  @media screen and (max-width: 500px) {
    .d2b-breadcrumbs-frame {
      display: none;
      width: 0px !important;
    }
  }
</style>
