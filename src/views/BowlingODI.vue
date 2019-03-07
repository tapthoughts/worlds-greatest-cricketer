<template>
  <div class="bowling-odi">
    <div class="card">
            <Chart
            titleText="Total Runs Conceded"
            subTitleText="Lesser number of runs conceded symbolizes a good bowler"
            chartType="bar"
            :chartData="RunsConcededData.data"
            :chartOptions="RunsConcededData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Clearly, Michael Bevan rules the average turf. Sachin Tendulkar and
                       Sir Viv Richards are nearly equal."
            winner="Michael Bevan"
            titleText="average runs scored"
            />
      </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';

import locationBowlingODI from '../../json/locationbowlingODI.json';

export default {
  name: 'bowlingODI',
  components: {
    Chart,
    Inference,
  },
  data() {
    return {
      chartContainerStyle: {
        margin: '10px',
        width: '45vw',
        display: 'inline-block',
      },
      RunsConcededData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              ticks: {
                beginAtZero: true,
                maxRotation: 0,
                minRotation: 0,
              },
              gridLines: {
                offsetGridLines: true,
              },
              barThickness: 50,
            }],
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
    }
  },
  mounted() {
    const runsConcededData = [];
    Object.values(locationBowlingODI).forEach((player) => {
      runsConcededData.push({
        name: player.player_name,
        runs: player.details.total.runs_conceded,
      });
    });
    runsConcededData.sort((t1, t2) => t2.runs - t1.runs);
    this.RunsConcededData.data = {
      labels: runsConcededData.map(t => t.name),
      datasets: [{
        label: 'Runs Conceded in all Matches',
        data: runsConcededData.map(t => t.runs),
        backgroundColor: [
          'rgb(255, 224, 230, 0.5)',
          'rgb(255, 226, 217, 0.5)',
          'rgb(255, 245, 221, 0.5)',
          'rgb(219, 242, 242, 0.5)',
          'rgb(215, 236, 251, 0.5)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 0.8,
        borderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
      }],
    };
  },
};
</script>

<style>

</style>
