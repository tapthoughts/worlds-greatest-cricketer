<template>
    <div class="batting-odi">
        <!-- <h1>Here, we get batting stats for ODI matches.</h1> -->
        <div class="card">
            <Chart
            titleText="Average Over Innings"
            subTitleText="A consistent good average is what makes a player dependable"
            chartType="bar"
            :chartData="AvgOverInngsData.data"
            :chartOptions="AvgOverInngsData.options"
            :parentStyle="chartContainerStyle"
            />
        </div>
    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';

import location_bat_odi from '../../json/locationbattingODI.json';

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
      AvgOverInngsData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                maxRotation: 0,
                minRotation: 0
              },
              gridLines: {
                offsetGridLines: true
            },
            barThickness: 50
            }],
          }
        },
        data: {
          labels: [],
          datasets: []
        }
      }
    }
  },
  mounted() {
    const avgOverInngsData = [];
    Object.values(location_bat_odi).forEach(player => {
      avgOverInngsData.push({
        name: player.player_name,
        avg: player.details.total.avg
      });
    });
    this.AvgOverInngsData.data = {
      labels: avgOverInngsData.map(t => t.name),
      datasets: [{
        label: 'Average Runs of all Matches',
        data: avgOverInngsData.map(t => t.avg),
        backgroundColor: '#76D7C4'
      }]
    };
  }
};
</script>

<style scoped>


</style>
