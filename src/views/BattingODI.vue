<template>
    <div class="batting-odi">
        <el-tag class="tags"><b>Consistency of Player:</b> Average runs, Runs at Home VS Away matches & ICC Ranking </el-tag>
        <div class="card">
            <Chart
            titleText="Average Runs Scored"
            subTitleText="A good average score of all matches is what makes a player dependable"
            chartType="bar"
            :chartData="AvgOverInngsData.data"
            :chartOptions="AvgOverInngsData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Clearly, Michael Bevan rules the average turf. Sachin Tendulkar and Sir Viv Richards are nearly equal."
            winner="Michael Bevan"
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
            inference="Under pressure, Sir Viv Richards outperforms every other player by a significant margin. Michael Bevan doesn’t care much, he will consistently perform as he usually does."
            winner="Sir Viv Richards"
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
            titleText="Conversion 50s to 100s"
            subTitleText="A player who can score in any field is dependable"
            chartType="horizontalBar"
            :chartData="ConversionToCenturyData.data"
            :chartOptions="ConversionToCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="A consistent good average is what makes a player dependable"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Conversion 100s to 200s"
            subTitleText="A player who can score in any field is dependable"
            chartType="horizontalBar"
            :chartData="ConversionToDoubleCenturyData.data"
            :chartOptions="ConversionToDoubleCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="A consistent good average is what makes a player dependable"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Winning Contribution"
            subTitleText="Man of the Match by number of matches played"
            chartType="bar"
            :chartData="MomData.data"
            :chartOptions="MomData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="A consistent good average is what makes a player dependable"
            />
        </div>

        <el-tag class="tags bottomtags"><b>Hitting Strength:</b> Strike Rate, Number of Boundaries </el-tag>
          
        <div class="card">
            <Chart
            titleText="Strike Rate"
            subTitleText="A player who can score in any field is dependable"
            chartType="bar"
            :chartData="StrikeRateData.data"
            :chartOptions="StrikeRateData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="A consistent good average is what makes a player dependable"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Number of 4's & 6's"
            subTitleText="A player who can score in any field is dependable"
            chartType="horizontalBar"
            :chartData="BoundariesData.data"
            :chartOptions="BoundariesData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="A consistent good average is what makes a player dependable"
            />
        </div>

    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';

import location_bat_odi from '../../json/locationbattingODI.json';

export default {
    name: 'battingODI',
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

    const avgOverInngsData = [];
    Object.values(location_bat_odi).forEach(player => {
      avgOverInngsData.push({
        name: player.player_name,
        avg: player.details.total.avg
      });
    });
    avgOverInngsData.sort((t1, t2) => {
      return t2.avg - t1.avg
    });
    this.AvgOverInngsData.data = {
      labels: avgOverInngsData.map(t => t.name),
      datasets: [{
        label: 'Average Runs of all Matches',
        data: avgOverInngsData.map(t => t.avg),
        backgroundColor: [
          'rgb(255, 224, 230)',
          'rgb(255, 245, 221)',
          'rgb(219, 242, 242)',
          'rgb(215, 236, 251)',
          'rgb(235, 224, 255)',
          'rgb(244, 245, 245)',
          'rgb(255, 236, 217)'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 2,
        hoverBorderColor: '#333',
      }]
    };

    const homeAwayScoreData = [];
    Object.values(location_bat_odi).forEach(player => {
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
    Object.values(location_bat_odi).forEach(player => {
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
    Object.values(location_bat_odi).forEach(player => {
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
          backgroundColor: 'rgb(255, 87, 89)',
          borderWidth: 0.5,
          borderColor: '#777'
        },
        {
          label: 'Double Century',
          data: conversionToDoubleCenturyData.map(t => t.doublecentury),
          backgroundColor: 'rgb(89, 161, 79)',
          borderWidth: 0.5,
          borderColor: '#777'
        }
      ]
    };

    const strikeRateData = [];
    Object.values(location_bat_odi).forEach(player => {
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
          'rgb(255, 224, 230)',
          'rgb(255, 245, 221)',
          'rgb(219, 242, 242)',
          'rgb(215, 236, 251)',
          'rgb(235, 224, 255)',
          'rgb(244, 245, 245)',
          'rgb(255, 236, 217)'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 2,
        hoverBorderColor: '#333',
      }]
    };

    const boundariesData = [];
    Object.values(location_bat_odi).forEach(player => {
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
          backgroundColor: 'rgb(255, 87, 89)',
          borderWidth: 0.5,
          borderColor: '#777'
        },
        {
          label: 'Sixes',
          data: boundariesData.map(t => t.sixes),
          backgroundColor: 'rgb(89, 161, 79)',
          borderWidth: 0.5,
          borderColor: '#777'
        }
      ]
    };

    const momData = [];
    Object.values(location_bat_odi).forEach(player => {
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
          'rgb(255, 224, 230)',
          'rgb(255, 245, 221)',
          'rgb(219, 242, 242)',
          'rgb(215, 236, 251)',
          'rgb(235, 224, 255)',
          'rgb(244, 245, 245)',
          'rgb(255, 236, 217)'
        ],
        borderWidth: 1,
        borderColor: '#777',
        hoverBorderWidth: 2,
        hoverBorderColor: '#333',
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
</style>
