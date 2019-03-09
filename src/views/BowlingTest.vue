<template>
  <div class="bowling-odi">

          <div class="card">

            <PlayerDetailsCard :person="focusedPlayerBowlingTest" />
            <Chart
            titleText="Strike Rate"
            subTitleText="Getting batsman out faster is primary target"
            chartType="horizontalBar"
            :chartData="StrikeRateData.data"
            :chartOptions="StrikeRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sir Viv Richards"
            titleText="having high strike rate"
            />
            <br/>
            <el-popover
              placement="top-start"
              title="Strike Rate"
              width="200"
              trigger="hover"
              content="Bowling strike rate is a measure of how frequently a  
                       bowler achieves the primary goal of bowling, namely taking wickets ">
              <el-button slot="reference">Define Strike rate</el-button>
            </el-popover>
        </div>

        <div class="card">
            <Chart
            titleText="Economy Rate"
            subTitleText="Lesser number of runs conceded symbolizes a good bowler"
            chartType="horizontalBar"
            :chartData="EconomyRateData.data"
            :chartOptions="EconomyRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Gary Sobers"
            titleText="average runs conceded"
            />
            <br>
            <el-popover
              placement="top-start"
              title="Economy rate"
              width="200"
              trigger="hover"
              content="Economy rate is the average number of runs conceded per over  
                      in cricket. The calculation is (Econ = Runs/Overs bowled).">
              <el-button slot="reference">Define Economy rate</el-button>
            </el-popover>
      </div>

      <div class="card">
            <Chart
            titleText="Average Maiden Overs"
            subTitleText="Bowling a maiden over is very important and difficult"
            chartType="horizontalBar"
            :chartData="MaidenOverData.data"
            :chartOptions="MaidenOverData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Allan Robert Bonder"
            titleText="bowling maiden overs maximum times"
            />
            <br>
            <el-popover
              placement="top-start"
              title="Maiden over"
              width="200"
              trigger="hover"
              content="A maiden over is one in which no  runs are scored.">
              <el-button slot="reference">Define Maiden over</el-button>
            </el-popover>
        </div>

        <div class="card">
            <Chart
            titleText="Bowling Average"
            subTitleText="Lower the bowling average is, the better the bowler is performing"
            chartType="horizontalBar"
            :chartData="WicketsRunsConcededData.data"
            :chartOptions="WicketsRunsConcededData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sir Viv Richards"
            titleText="average runs conceded"
            />
            <br>
            <el-popover
              placement="top-start"
              title="Bowling Average"
              width="200"
              trigger="hover"
              content=" Number of wickets taken for runs  conceded in all matches.">
              <el-button slot="reference">Define Bowling Average</el-button>
            </el-popover>
      </div>

      <div class="card">
            <Chart
            titleText="Catches Taken"
            subTitleText="More catches taken symbolizes a good fielder"
            chartType="horizontalBar"
            :chartData="CatchesTakenData.data"
            :chartOptions="CatchesTakenData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Allen Robert Bonder"
            titleText="average runs conceded"
            />
      </div>

      <div class="card center">
          <h1>The Test verdict - Bowling</h1>
          <span class="result"> Sir Viv Richards Wins !! </span>
          <span class="result-ps"> 
            Maximum number of wins in individual components is neutral.
            <br>
            But, Sir Viv Richards has high score in all factors & hence he wins.
          </span>
      </div>

  </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';
import PlayerDetailsCard from '@/components/PlayerDetailsCard.vue';

import locationBowlingTest from '../../json/locationbowlingTest.json';
import locationBatTest from '../../json/locationbattingTest.json';

export default {
  name: 'bowlingTest',
  components: {
    Chart,
    Inference,
    PlayerDetailsCard,
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
          onClick: (evt, item) => {
            if (item && item[0] && item[0]._index != null) {
              this.focusedPlayerBowlingTest = locationBowlingTest[item[0]._index];
            }
          }
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
      CatchesTakenData: {
        options: {
          responsive: true,
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
      focusedPlayerBowlingTest: null
    }
  },
  mounted() {
    const economyRateData = [];
    Object.values(locationBowlingTest).forEach((player) => {
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
    Object.values(locationBowlingTest).forEach((player) => {
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
    Object.values(locationBowlingTest).forEach((player) => {
      maidenOverData.push({
        name: player.player_name,
        maiden_overs: (player.details.total.maiden_overs / player.details.total.overs)*100,
      });
    });
    maidenOverData.sort((t1, t2) => t2.maiden_overs - t1.maiden_overs);
    this.MaidenOverData.data = {
      labels: maidenOverData.map(t => t.name),
      datasets: [{
        label: 'Percentage of Average Maiden Overs',
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
    Object.values(locationBowlingTest).forEach((player) => {
      wicketsRunsConcededData.push({
        name: player.player_name,
        wickets: (player.details.total.wickets / player.details.total.runs_conceded)*100,
      });
    });
    wicketsRunsConcededData.sort((t1, t2) => t1.wickets - t2.wickets);
    this.WicketsRunsConcededData.data = {
      labels: wicketsRunsConcededData.map(t => t.name),
      datasets: [{
        label: 'Percentage of wickets taken for runs conceded',
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

    const catchesTakenData = [];
    Object.values(locationBatTest).forEach((player) => {
      catchesTakenData.push({
        name: player.player_name,
        catches_taken: player.details.total.catches_taken,
      });
    });
    catchesTakenData.sort((t1, t2) => t2.catches_taken - t1.catches_taken);
    this.CatchesTakenData.data = {
      labels: catchesTakenData.map(t => t.name),
      datasets: [{
        label: 'Strike Rate',
        data: catchesTakenData.map(t => t.catches_taken),
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
  },
};
</script>

<style>
.center {
  text-align: center;
}
</style>
