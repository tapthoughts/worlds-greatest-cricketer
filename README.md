# Worlds Greatest Cricketer
Finding world's greatest cricketer by comparing top 5 batsmen of ODI and Test cricket
 given by [Wisden-100](https://en.wikipedia.org/wiki/Wisden_100#Top_5_Test_batsmen) list.
 
Click [here](https://worlds-greatest-cricketer.firebaseapp.com/) to view the deployed webapp.

## Steps to run locally
```
npm install

npm run serve

```
## Project Overview:
We are juding each player's performance in batting and bowling of both Test and ODI format of cricket.
Thus, all visualizations are segregated accordingly.  Each chart has a winner of that particular 
factor. The player who wins in important factors and having most number of wins will be the winner.

## Tech Stack used:
- <b>VueJS Framework</b>: Vue is a progressive framework for building user interfaces.

- <b>Element UI</b>: A Vue 2.0 based component library for developers and designers.

- <b>ChartJS</b>: It is a JavaScript library that allows you to draw different types of charts by using the HTML5 canvas element. 

- <b>vue-d2b</b>: Vue extension for d2b data viz library, used Sunburst Chart from the same which is ideal for displaying hierarchical data. 

## Bonus Points
 * Developed in Vue from scratch, started project via vue-cli. Followed *VC architecture.
 * Precalculated results from given data CSVs and directly using results via JSON files generated, it optimized loading times by a good extent.
 * Loading routes lazily at runtime.
 * Implemented as PWA: 
    * Fully works offline
    * Javascript (which also contain our results json) and CSS chunks are cached after first load hence users can view visualizations with slow/no internet connectivity.
    * User can add to home screen and install the app.