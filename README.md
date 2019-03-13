# Worlds Greatest Cricketer
Finding world's greatest cricketer by comparing top 5 batsmen of ODI and Test cricket
 given by [Wisden-100](https://en.wikipedia.org/wiki/Wisden_100#Top_5_Test_batsmen) list.
 
Click [here](https://worlds-greatest-cricketer.firebaseapp.com/) to view the deployed webapp.

## ***Steps to run locally:***
```
npm install

npm run serve

```
## ***Project Overview:***
We are juding each player's performance in batting and bowling of both Test and ODI format of cricket.
Thus, all visualizations are segregated accordingly. Each chart has a winner of that particular 
factor. The player who wins in important factors and having most number of wins will be the winner.

## ***Objective:***
> Wikipedia says, “Sachin Tendulkar is a former Indian cricketer, widely regarded to be the
greatest cricketer of all time.”

Let's try to prove or disprove the given statement.

## ***Tech Stack used:***
- <b>VueJS Framework</b>: <br/>
Vue is a progressive framework for building user interfaces. <br/>
It provided me features like virtual DOM, client side routing, data-binding and a lot more.

- <b>Element UI</b>: <br/>
 A Vue 2.0 based component library for developers and designers. <br/>
 It provided me some beautiful components cause of which lots of time was saved.

- <b>ChartJS</b>: <br/> 
It is a JavaScript library that allows you to draw different types of charts by using the HTML5 canvas element. <br/>
All my charts are really good looking all because of this highly customisable library.

- <b>vue-d2b</b>: <br/> 
Vue extension for d2b data viz library, used Sunburst Chart from the same <br/>
Sunburst Chart is ideal for displaying hierarchical data. I used it to show overall performances of players.

## ***Challenges Faced:***
 * Collection of raw data and it's verification
 * Processing of raw CSV data into desired JSON format
 * Deciding what to visualize :p

## ***Bonus Points***
 * Developed using Vue, started project via vue-cli. Followed component architecture and other best practices.
 * Precalculated results from given data CSVs and directly using results via JSON files generated, <br/> it optimized the loading time by a good extent.
 * Loading routes lazily at runtime.
 * Project isn't responsive for now.
 * Implemented as PWA: 
    * Fully works offline
    * Javascript (which also contain our results json) and CSS chunks are cached after first load hence users can view visualizations with slow/no internet connectivity.
    * User can add to home screen and install the app.

## Light House Score

![alt LightHouse Score](https://dhruv10.github.io/images/lighthouse_score.png)

## Network Tab Response

![alt NetworkTab Response](https://dhruv10.github.io/images/network_response_ss.png)