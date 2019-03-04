<template>
    <div class="batting-odi">
        <!-- <h1>Here, we get batting stats for ODI matches.</h1> -->
        <div class="card">
            <Chart
            titleText="Top two Batsmen"
            subTitleText="(for all seasons)"
            chartType="bar"
            :chartData="TopBatsmanData.data"
            :chartOptions="TopBatsmanData.options"
            :parentStyle="chartContainerStyle"
            />
        </div>
    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';

import batting_json from '../../json/batting_ODI.json';

export default {
    name: 'battingODI',
    components: { Chart },
    data() {
     return {
      chartContainerStyle: {
        margin: '20px',
        width: '50vw',
        display: 'inline-block'
      },
      TopBatsmanData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                maxRotation: 0,
                minRotation: 0
              }
            }],
          }
        //   onClick: (evt, item) => {
        //     if (item && item[0] && item[0]._index != null) {
        //       this.focusedBatman = batsman_json[item[0]._index];
        //     }
        //   }
        },
        data: {
          labels: [],
          datasets: []
        }
      }
    }
  },
  mounted() {
    const topBatsmenData = [];
    Object.values(batting_json).forEach(team => {
      topBatsmenData.push({
        name: team.details.Player_Name,
        totalRuns: team.totalRuns
      });
    });
    this.TopBatsmanData.data = {
      labels: topBatsmenData.map(t => t.name),
      datasets: [{
        label: 'Total Runs',
        data: topBatsmenData.map(t => t.totalRuns),
        backgroundColor: '#76D7C4'
      }]
    };
  }
}
</script>

<style scoped>


</style>
