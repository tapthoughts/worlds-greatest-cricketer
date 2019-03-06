<template>
    <div class="batting-test">
        <el-tag class="tags"><b>Consistency of Player:</b> Average runs, Runs at Home VS Away matches & ICC Ranking </el-tag>
        <div class="card">
            <Chart
            titleText="Average Runs Scored"
            subTitleText="A good average score of all matches is what makes a player dependable"
            chartType="horizontalBar"
            :chartData="AvgOverInngsTestData.data"
            :chartOptions="AvgOverInngsTestData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Clearly, Sir Don Bradman rules the average turf. Sachin Tendulkar and Gary Sobers are nearly equal."
            winner="Sir Don Bradman"
            titleText="average runs scored"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Avg Runs Scored (Home vs Away)"
            subTitleText="Let's see which player is durable under pressure"
            chartType="horizontalBar"
            :chartData="HomeAwayScoreData.data"
            :chartOptions="HomeAwayScoreData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Sir Don Bradman outperforms every other player by a significant margin no matter whatever the conditions be."
            winner="Sir Don Bradman"
            titleText="scoring under pressure"
            />
            <br/>
            <el-popover
              placement="top-start"
              title="Home Score"
              width="200"
              trigger="hover"
              content="Score of a player when he scores in the country of his nationality">
              <el-button slot="reference">Home Score</el-button>
            </el-popover>
            <el-popover
              placement="top-start"
              title="Away Score"
              width="200"
              trigger="hover"
              content="Score of a player when he scores in the country in whose oppsition he's playing">
              <el-button slot="reference">Away Score</el-button>
            </el-popover>
        </div>

        <el-tag class="tags bottomtags"><b>Player Dominance:</b> Conversion rate of 50s into 100s, 100s into 200s & Man of the Match Awards </el-tag>
        
        <div class="card">
            <Chart
            titleText="Conversion of 50s to 100s"
            subTitleText="Let's find ability of a player to play big knocks and provide the team with the winning runs"
            chartType="horizontalBar"
            :chartData="ConversionToCenturyData.data"
            :chartOptions="ConversionToCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="It is clearly evident that Sachin Tendulkar is the player who once settled, goes for the big runs. So it is advisable to restrict him before 50 otherwise he is more likely to convert that 50 into 100."
            winner="Sachin Tendulkar"
            titleText="scoring big runs"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Conversion 100s to 200s"
            subTitleText="Let's see who can score a double century"
            chartType="horizontalBar"
            :chartData="ConversionToDoubleCenturyData.data"
            :chartOptions="ConversionToDoubleCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="According to the graph, Sir Don Bradman has most number of double centuries but considering small number of matches played with comparision to Sachin Tendulkar, I think he's the winner."
            winner="Sachin Tendulkar"
            titleText="scoring big runs"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Man of the Match Awards"
            subTitleText="Most number of Man of the Match Awards determine your winning contribution"
            chartType="horizontalBar"
            :chartData="MomData.data"
            :chartOptions="MomData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Sachin Tendulkar has the higher percentage of winning contribution than the rest."
            winner="Sachin Tendulkar"
            titleText="being winning contributor maximum times"
            />
        </div>

        <el-tag class="tags bottomtags"><b>Hitting Strength:</b> Strike Rate, Number of Boundaries </el-tag>
          
        <div class="card">
            <Chart
            titleText="Strike Rate"
            subTitleText="Scoring runs faster always give an edge, whatever innings maybe"
            chartType="horizontalBar"
            :chartData="StrikeRateData.data"
            :chartOptions="StrikeRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Sir Viv Richards have relatively high batting strike rate when compared with any other player."
            winner="Sir Viv Richards"
            titleText="having high strike rate"
            />
            <br/>
            <el-popover
              placement="top-start"
              title="Strike Rate"
              width="200"
              trigger="hover"
              content="Batting strike rate is a measure of how frequently a batsman achieves the primary goal of batting, namely scoring runs">
              <el-button slot="reference">Strike rate</el-button>
            </el-popover>
        </div>

        <div class="card">
            <Chart
            titleText="Number of 4's & 6's"
            subTitleText="A player who hits more boundaries will score runs faster and probably much more than others"
            chartType="horizontalBar"
            :chartData="BoundariesData.data"
            :chartOptions="BoundariesData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Sachin Tendulkar likes to send the balls out of the ground, scoring most of his runs with 4's & 6's"
            winner="Sachin Tendulkar"
            titleText="hitting most boundaries"
            />
        </div>

        <div class="card center">
          <h1>The Test verdict - Batting</h1>
          <span class="result"> Sachin Tendulkar Wins !! </span>
          <span class="result-ps"> PS: Sir Donald Bradman is greatest batsman to be known but considering the career span and facing of all-time fastest bowlers by Sachin Tendulkar, he wins atleast in my personal view. </span>
        </div>

    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';

import location_bat_test from '../../json/locationbattingTest.json';

export default {
    name: 'battingTest',
    components: { 
      Chart,
      Inference
    },
    data() {
     return {
      chartContainerStyle: {
        margin: '10px',
        width: '45vw',
        display: 'inline-block'
      },
      AvgOverInngsTestData: {
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
      },
      HomeAwayScoreData: {
        options: {
          responsive: true
        },
        data: {
          labels: [],
          datasets: []
        }
      },
      ConversionToCenturyData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
         }
        },
        data: {
          labels: [],
          datasets: []
        }
      },
      ConversionToDoubleCenturyData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
         }
        },
        data: {
          labels: [],
          datasets: []
        }
      },
      StrikeRateData: {
        options: {
          responsive: true
        },
        data: {
          labels: [],
          datasets: []
        }
      },
      BoundariesData: {
        options: {
          responsive: true,
        //   scales: {
        //     xAxes: [{
        //         stacked: true
        //     }],
        //     yAxes: [{
        //         stacked: true
        //     }]
        //  }
        },
        data: {
          labels: [],
          datasets: []
        }
      },
      MomData: {
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

    const avgOverInngsTestData = [];
    Object.values(location_bat_test).forEach(player => {
      avgOverInngsTestData.push({
        name: player.player_name,
        avg: player.details.total.avg
      });
    });
    avgOverInngsTestData.sort((t1, t2) => {
      return t2.avg - t1.avg
    });
    this.AvgOverInngsTestData.data = {
      labels: avgOverInngsTestData.map(t => t.name),
      datasets: [{
        label: 'Average Runs of all Matches',
        data: avgOverInngsTestData.map(t => t.avg),
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
          'rgb(201, 203, 207, 1)'
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)'
        ]
      }]
    };

    const homeAwayScoreData = [];
    Object.values(location_bat_test).forEach(player => {
      homeAwayScoreData.push({
        name: player.player_name,
        awayAvg: player.details.away.avg,
        homeAvg: player.details.home.avg
      });
    });
    this.HomeAwayScoreData.data = {
      labels: homeAwayScoreData.map(t => t.name),
      datasets: [
        {
          label: 'Away',
          data: homeAwayScoreData.map(t => t.awayAvg),
          backgroundColor: 'rgb(255, 245, 221)',
          borderWidth: 0.5,
          borderColor: '#777'
      },
      {
        label: 'Home',
        data: homeAwayScoreData.map(t => t.homeAvg),
        backgroundColor: 'rgb(219, 242, 242)',
        borderWidth: 0.5,
        borderColor: '#777'
      }]
    };

    const conversionToCenturyData = [];
    Object.values(location_bat_test).forEach(player => {
      conversionToCenturyData.push({
        name: player.player_name,
        hundreds: player.details.total.hundreds,
        fifties: player.details.total.fifties
      });
    });
    this.ConversionToCenturyData.data = {
      labels: conversionToCenturyData.map(t => t.name),
      datasets: [
        {
          label: 'Half Century',
          data: conversionToCenturyData.map(t => t.fifties),
          backgroundColor: 'rgb(255, 224, 230)',
          borderWidth: 0.5,
          borderColor: '#777'
        },
        {
          label: 'Century',
          data: conversionToCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(215, 236, 251)',
          borderWidth: 0.5,
          borderColor: '#777'
        }
      ]
    };

    const conversionToDoubleCenturyData = [];
    Object.values(location_bat_test).forEach(player => {
      conversionToDoubleCenturyData.push({
        name: player.player_name,
        hundreds: player.details.total.hundreds,
        doublecentury: player.details.total.doublecentury
      });
    });
    this.ConversionToDoubleCenturyData.data = {
      labels: conversionToDoubleCenturyData.map(t => t.name),
      datasets: [
        {
          label: 'Century',
          data: conversionToDoubleCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(255, 245, 221)',
          borderWidth: 0.5,
          borderColor: '#777'
        },
        {
          label: 'Double Century',
          data: conversionToDoubleCenturyData.map(t => t.doublecentury),
          backgroundColor: 'rgb(235, 224, 255)',
          borderWidth: 0.5,
          borderColor: '#777'
        }
      ]
    };

    const strikeRateData = [];
    Object.values(location_bat_test).forEach(player => {
      strikeRateData.push({
        name: player.player_name,
        strike_rate: player.details.total.strike_rate
      });
    });
    strikeRateData.sort((t1, t2) => {
      return t2.strike_rate - t1.strike_rate
    });
    this.StrikeRateData.data = {
      labels: strikeRateData.map(t => t.name),
      datasets: [{
        label: 'Strike Rate',
        data: strikeRateData.map(t => t.strike_rate),
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
          'rgb(201, 203, 207, 1)'
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)'
        ]
      }]
    };

    const boundariesData = [];
    Object.values(location_bat_test).forEach(player => {
      boundariesData.push({
        name: player.player_name,
        fours: player.details.total.fours,
        sixes: player.details.total.sixes
      });
    });
    this.BoundariesData.data = {
      labels: boundariesData.map(t => t.name),
      datasets: [
        {
          label: 'Fours',
          data: boundariesData.map(t => t.fours),
          backgroundColor: 'rgb(219, 242, 242)',
          borderWidth: 0.5,
          borderColor: '#777'
        },
        {
          label: 'Sixes',
          data: boundariesData.map(t => t.sixes),
          backgroundColor: 'rgb(255, 236, 217)',
          borderWidth: 0.5,
          borderColor: '#777'
        }
      ]
    };

    const momData = [];
    Object.values(location_bat_test).forEach(player => {
      momData.push({
        name: player.player_name,
        mom: player.details.total.mom
      });
    });
    momData.sort((t1, t2) => {
      return t2.mom - t1.mom
    });
    this.MomData.data = {
      labels: momData.map(t => t.name),
      datasets: [{
        label: 'Man of Match',
        data: momData.map(t => t.mom),
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
          'rgb(201, 203, 207, 1)'
        ],
        hoverBorderWidth: 1.2,
        hoverBorderColor: [
          'rgb(255, 99, 132, 1)',
          'rgb(255, 159, 64, 1)',
          'rgb(255, 205, 86, 1)',
          'rgb(75, 192, 192, 1)',
          'rgb(54, 162, 235, 1)',
          'rgb(153, 102, 255, 1)',
          'rgb(201, 203, 207, 1)'
        ]
      }]
    };

  }
};
</script>

<style scoped>
.tags {
  margin-bottom: 20px;
  font-size: 16px;
}

.bottomtags {
  margin-top: 30px;
}

.center {
  text-align: center;
}
</style>
