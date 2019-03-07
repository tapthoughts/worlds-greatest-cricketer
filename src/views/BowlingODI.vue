<template>
  <div class="bowling-odi">

    <div class="card">
            <Chart
            titleText="Economy Rate"
            subTitleText="Lesser number of runs conceded symbolizes a good bowler"
            chartType="bar"
            :chartData="EconomyRateData.data"
            :chartOptions="EconomyRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Though score of Ricky Ponting looks better but he bowled in only 25 overs
                       & others bowled in atleast 300 overs. Neglecting him, 
                       Sachin Tendulkar and Michael Bevan both wins"
            winner="Sachin Tendulkar & Michael Bevan"
            titleText="average runs conceded"
            />
      </div>

      <div class="card">
            <Chart
            titleText="Strike Rate"
            subTitleText="Scoring runs faster in ODI is primary target"
            chartType="bar"
            :chartData="StrikeRateData.data"
            :chartOptions="StrikeRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Both, Sachin Tendulkar and Sir Viv Richards have similarly high batting strike rate."
            winner="both Sir Viv Richards & Sachin Tendulkar"
            titleText="having high strike rate"
            />
            <br/>
            <el-popover
              placement="top-start"
              title="Strike Rate"
              width="200"
              trigger="hover"
              content="Batting strike rate is a measure of how frequently a batsman achieves the primary
                       goal of batting, namely scoring runs">
              <el-button slot="reference">Define Strike rate</el-button>
            </el-popover>
        </div>

        <div class="card">
            <Chart
            titleText="Average Maiden Overs"
            subTitleText="Most number of Man of the Match Awards determine your winning contribution"
            chartType="bar"
            :chartData="MaidenOverData.data"
            :chartOptions="MaidenOverData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Sachin Tendulkar has the higher percentage of winning contribution than the rest."
            winner="Sachin Tendulkar"
            titleText="being winning contributor maximum times"
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
      EconomyRateData: {
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
      StrikeRateData: {
        options: {
          responsive: true,
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
      MaidenOverData: {
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
      WicketsRunsConcededData: {
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
    const economyRateData = [];
    Object.values(locationBowlingODI).forEach((player) => {
      economyRateData.push({
        name: player.player_name,
        economy_rate: player.details.total.economy_rate,
      });
    });
    economyRateData.sort((t1, t2) => t1.economy_rate - t2.economy_rate);
    this.EconomyRateData.data = {
      labels: economyRateData.map(t => t.name),
      datasets: [{
        label: 'Avg Runs Conceded in all Matches',
        data: economyRateData.map(t => t.economy_rate),
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

    const strikeRateData = [];
    Object.values(locationBowlingODI).forEach((player) => {
      strikeRateData.push({
        name: player.player_name,
        strike_rate: player.details.total.strike_rate,
      });
    });
    strikeRateData.sort((t1, t2) => t2.strike_rate - t1.strike_rate);
    this.StrikeRateData.data = {
      labels: strikeRateData.map(t => t.name),
      datasets: [{
        label: 'Strike Rate',
        data: strikeRateData.map(t => t.strike_rate),
        backgroundColor: [
          'rgb(219, 242, 242, 0.5)',
          'rgb(215, 236, 251, 0.5)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(255, 224, 230, 0.5)',
          'rgb(255, 226, 217, 0.5)',
          'rgb(255, 245, 221, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 0.8,
        borderColor: [
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(201, 203, 207, 1)',
        ],
      }],
    };

    const maidenOverData = [];
    Object.values(locationBowlingODI).forEach((player) => {
      maidenOverData.push({
        name: player.player_name,
        maiden_overs: (player.details.total.maiden_overs / player.details.total.overs)*1000,
      });
    });
    maidenOverData.sort((t1, t2) => t2.maiden_overs - t1.maiden_overs);
    this.MaidenOverData.data = {
      labels: maidenOverData.map(t => t.name),
      datasets: [{
        label: 'Average Maiden Overs',
        data: maidenOverData.map(t => t.maiden_overs),
        backgroundColor: [
          'rgb(255, 224, 230, 0.5)',
          'rgb(215, 236, 251, 0.5)',
          'rgb(255, 226, 217, 0.5)',
          'rgb(255, 245, 221, 0.5)',
          'rgb(219, 242, 242, 0.5)',
          'rgb(235, 224, 255, 0.5)',
          'rgb(244, 245, 245, 0.5)',
        ],
        borderWidth: 0.8,
        borderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)',
        ],
      }],
    };

    const wicketsRunsConcededData = [];
    Object.values(locationBowlingODI).forEach((player) => {
      wicketsRunsConcededData.push({
        name: player.player_name,
        wickets: player.details.total.wickets / player.details.total.runs_conceded,
      });
    });
    wicketsRunsConcededData.sort((t1, t2) => t1.wickets - t2.wickets);
    this.WicketsRunsConcededData.data = {
      labels: wicketsRunsConcededData.map(t => t.name),
      datasets: [{
        label: 'Avg Runs Conceded in all Matches',
        data: wicketsRunsConcededData.map(t => t.wickets),
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
