<template>
    <div class="batting-odi">

        <div class="card center">
          <span class="title-imp">Important factors in ODI format</span>
          <hr>
          <br>
          <span class="result-ps">1. <b>Strike Rate</b> plays an important role in the
            One Day format since it is equally important to score big runs as well
            score them fast
          </span>
          <span class="result-ps">2. <b>Number of 6's and 4's</b> provide runs faster
            compared to non-boundaries and hence are prefferable when you have to score fast
          </span>
        </div>

        <el-tag class="tags bottomtags">
          <b>Consistency of Player:</b>
          Average runs, Runs at Home VS Away matches & ICC Ranking
        </el-tag>
        <div class="card">
            <PlayerDetailsCard :person="focusedPlayerBatting" />
            <Chart
            titleText="Average Runs Scored"
            subTitleText="A good average score of all matches is what makes a player dependable"
            chartType="bar"
            :chartData="AvgOverInngsData.data"
            :chartOptions="AvgOverInngsData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
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
            inference="Under pressure, Sir Viv Richards outperforms every other player by a
                       significant margin. Michael Bevan doesn’t care much, he will consistently
                       perform as he usually does."
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
              <el-button slot="reference">Define Home Score</el-button>
            </el-popover>
            <el-popover
              placement="top-start"
              title="Away Score"
              width="200"
              trigger="hover"
              content="Score of a player when he scores in the country in whose oppsition he's playing">
              <el-button slot="reference">Define Away Score</el-button>
            </el-popover>
        </div>

        <el-tag class="tags bottomtags"><b>Player Dominance:</b> Conversion rate of 50s into 100s, 100s into 200s & Man of the Match Awards </el-tag>

        <div class="card">
            <Chart
            titleText="Conversion of 50s to 100s"
            subTitleText="Let's find ability of a player to play big knocks and provide the team
                          with the winning runs"
            chartType="horizontalBar"
            :chartData="ConversionToCenturyData.data"
            :chartOptions="ConversionToCenturyData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="It is clearly evident that Sachin Tendulkar is the player who once settled,
                       goes for the big runs. So it is advisable to restrict him before 50 otherwise
                       he is more likely to convert that 50 into 100."
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
            inference="Only Sachin Tendulkar is the player made a double century in ODI."
            winner="Sachin Tendulkar"
            titleText="scoring big runs"
            />
        </div>

        <div class="card">
            <Chart
            titleText="Man of the Match Awards"
            subTitleText="Most number of Man of the Match Awards determine your winning contribution"
            chartType="bar"
            :chartData="MomData.data"
            :chartOptions="MomData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            winner="Sachin Tendulkar"
            titleText="being winning contributor maximum times"
            />
        </div>

        <el-tag class="tags bottomtags"><b>Hitting Strength:</b> Strike Rate, Number of Boundaries </el-tag>

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
            titleText="Number of 4's & 6's"
            subTitleText="A player who hits more boundaries will score runs faster"
            chartType="horizontalBar"
            :chartData="BoundariesData.data"
            :chartOptions="BoundariesData.options"
            :parentStyle="chartContainerStyle"
            />
            <Inference
            inference="Sachin Tendulkar likes to send the balls out of the ground, scoring most of his
                       runs with 4's & 6's"
            winner="Sachin Tendulkar"
            titleText="hitting most boundaries"
            />
        </div>

        <div class="card center">
          <h1>The ODI verdict - Batting</h1>
          <span class="result"> Sachin Tendulkar Wins !! </span>
          <span class="result-ps">
            Maximum number of wins in individual components is by Sachin Tendulkar.
            <br>
            Also, he's the one to win in Strike rate and other important factors of
            ODI batting.
          </span>
        </div>

    </div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import Inference from '@/components/Inference.vue';
import PlayerDetailsCard from '@/components/PlayerDetailsCard.vue';

import location_bat_odi from '../../json/locationbattingODI.json';

export default {
  name: 'battingODI',
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
      AvgOverInngsData: {
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
              this.focusedPlayerBatting = location_bat_odi[item[0]._index];
            }
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
      HomeAwayScoreData: {
        options: {
          responsive: true,
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
      ConversionToCenturyData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
            }],
          },
        },
        data: {
          labels: [],
          datasets: [],
        },
      },
      ConversionToDoubleCenturyData: {
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
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
          datasets: [],
        },
      },
      MomData: {
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
      focusedPlayerBatting: null,
    };
  },
  mounted() {
    const avgOverInngsData = [];
    Object.values(location_bat_odi).forEach((player) => {
      avgOverInngsData.push({
        name: player.player_name,
        avg: player.details.total.avg,
      });
    });
    avgOverInngsData.sort((t1, t2) => t2.avg - t1.avg);
    this.AvgOverInngsData.data = {
      labels: avgOverInngsData.map(t => t.name),
      datasets: [{
        label: 'Average Runs of all Matches',
        data: avgOverInngsData.map(t => t.avg),
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

    const homeAwayScoreData = [];
    Object.values(location_bat_odi).forEach((player) => {
      homeAwayScoreData.push({
        name: player.player_name,
        awayAvg: player.details.away.avg,
        homeAvg: player.details.home.avg,
      });
    });
    this.HomeAwayScoreData.data = {
      labels: homeAwayScoreData.map(t => t.name),
      datasets: [
        {
          label: 'Away',
          data: homeAwayScoreData.map(t => t.awayAvg),
          backgroundColor: 'rgb(255, 224, 230, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(255, 99, 132, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 99, 132, 1)',
        },
        {
          label: 'Home',
          data: homeAwayScoreData.map(t => t.homeAvg),
          backgroundColor: 'rgb(219, 242, 242, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(75, 192, 192, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(75, 192, 192, 1)',
        }],
    };

    const conversionToCenturyData = [];
    Object.values(location_bat_odi).forEach((player) => {
      conversionToCenturyData.push({
        name: player.player_name,
        hundreds: player.details.total.hundreds,
        fifties: player.details.total.fifties,
      });
    });
    this.ConversionToCenturyData.data = {
      labels: conversionToCenturyData.map(t => t.name),
      datasets: [
        {
          label: 'Half Century',
          data: conversionToCenturyData.map(t => t.fifties),
          backgroundColor: 'rgb(255, 224, 230, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(255, 99, 132, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 99, 132, 1)',
        },
        {
          label: 'Century',
          data: conversionToCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(219, 242, 242, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(75, 192, 192, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(75, 192, 192, 1)',
        },
      ],
    };

    const conversionToDoubleCenturyData = [];
    Object.values(location_bat_odi).forEach((player) => {
      conversionToDoubleCenturyData.push({
        name: player.player_name,
        hundreds: player.details.total.hundreds,
        doublecentury: player.details.total.doublecentury,
      });
    });
    this.ConversionToDoubleCenturyData.data = {
      labels: conversionToDoubleCenturyData.map(t => t.name),
      datasets: [
        {
          label: 'Century',
          data: conversionToDoubleCenturyData.map(t => t.hundreds),
          backgroundColor: 'rgb(255, 226, 217, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(255, 159, 64, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 159, 64, 1)',
        },
        {
          label: 'Double Century',
          data: conversionToDoubleCenturyData.map(t => t.doublecentury),
          backgroundColor: 'rgb(215, 236, 251, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(54, 162, 235, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(54, 162, 235, 1)',
        },
      ],
    };

    const strikeRateData = [];
    Object.values(location_bat_odi).forEach((player) => {
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

    const boundariesData = [];
    Object.values(location_bat_odi).forEach((player) => {
      boundariesData.push({
        name: player.player_name,
        fours: player.details.total.fours,
        sixes: player.details.total.sixes,
      });
    });
    this.BoundariesData.data = {
      labels: boundariesData.map(t => t.name),
      datasets: [
        {
          label: 'Fours',
          data: boundariesData.map(t => t.fours),
          backgroundColor: 'rgb(255, 226, 217, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(255, 159, 64, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(255, 159, 64, 1)',
        },
        {
          label: 'Sixes',
          data: boundariesData.map(t => t.sixes),
          backgroundColor: 'rgb(215, 236, 251, 0.5)',
          borderWidth: 0.5,
          borderColor: 'rgb(54, 162, 235, 1)',
          hoverBorderWidth: 1,
          hoverBorderColor: 'rgb(54, 162, 235, 1)',
        },
      ],
    };

    const momData = [];
    Object.values(location_bat_odi).forEach((player) => {
      momData.push({
        name: player.player_name,
        mom: player.details.total.mom,
      });
    });
    momData.sort((t1, t2) => t2.mom - t1.mom);
    this.MomData.data = {
      labels: momData.map(t => t.name),
      datasets: [{
        label: 'Man of Match',
        data: momData.map(t => t.mom),
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
  },
};
</script>

<style scoped>
.tags {
  margin-bottom: 25px;
  font-size: 16px;
}

.bottomtags {
  margin-top: 25px;
}

.center {
  text-align: center;
}
</style>
