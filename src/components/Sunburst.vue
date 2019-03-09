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
import player_details_json from '../../json/playersOverallData.json';
import { PLAYER_COLOR } from '../playerColor.constants';

export default {
  name: 'sunburst',
  props: ['titleText', 'subTitleText'],
  components: { 
      ChartSunburst,
      ChartTitle
   },
  data () {
      return {
        chartData: {
          label: 'Player Details',
          color: '#3584BB',
          children: []
        }
      }
  },
  mounted() {
    const playerColor = PLAYER_COLOR;
    Object.entries(player_details_json).forEach(([key, player]) => {
      this.chartData.children.push({
        label: player.info.name,
        color: playerColor[key],
        children: [
          {
            label: "Test Matches",
            color: "#3584BB",
            children: [
              {
                label: "Batting Performance",
                color: "#41A941",
                children: [
                  {
                    label: "Boundaries",
                    color: "#9E76C3",
                    children: [
                      {
                        label: "Fours",
                        color: "#8C8C8C",
                        size: 100
                      },
                      {
                        label: "Sixes",
                        color: "#97675D",
                        size: 30
                      }
                    ]
                  },
                  {
                    label: "Non-Boundaries",
                    color: "#DA3D3D",
                    size: 123
                  }
                ]
              },
              {
                label: "Bowling Performance",
                color: "#97675D",
                children: [
                  {
                    label: "Runs conceded",
                    color: "#FF8C26",
                    size: 12
                  }
                ]
              }
            ]
          },
          {
            label: "ODI Matches",
            color: "#FF8C26",
            children: [
              {
                label: "Batting Performance",
                color: "#41A941",
                children: [
                  {
                    label: "Boundaries",
                    color: "#9E76C3",
                    children: [
                      {
                        label: "Fours",
                        color: "#8C8C8C",
                        size: 300
                      },
                      {
                        label: "Sixes",
                        color: "#97675D",
                        size: 1254
                      }
                    ]
                  },
                  {
                    label: "Non-Boundaries",
                    color: "#DA3D3D",
                    size: 55
                  }
                ]
              },
              {
                label: "Bowling Performance",
                color: "#97675D",
                children: [
                  {
                    label: "Runs conceded",
                    color: "#FF8C26",
                    size: 12
                  }
                ]
              }
            ]
          }
        ]
      })
    });
  }

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
