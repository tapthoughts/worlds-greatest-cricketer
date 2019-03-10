<template>
  <div id="app">
    <el-container>
      <el-aside width="225px">
        <div class="logo-container"> Data Visualization </div>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <transition name="page" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(58,55,52);
}

.container {
  max-width: 1200px;
  margin: auto;
}

.el-aside {
  background: #434A50;
  color: white;
  min-height: 100vh;
}

.logo-container {
  padding: 20px;
  text-align: center;
  background: #434A50;
}

.el-main {
  background: #EEF1F4;
}

.card {
    border-radius: 4px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    overflow: hidden;
    color: rgb(58,55,52);;
    transition: .3s;
    padding: 20px;
    width: 96%;
}

.card:hover {
    transition: .5s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

.result {
    color: rgb(58,55,52);
    font-size: 25px;
    font-weight: bold;
    display: block;
    margin-top: 10px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.result-ps {
    color: rgb(58,55,52);
    font-size: 15px;
    font-weight: normal;
    display: block;
    margin-top: 10px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    max-width: 100%;
}

.title-imp {
  color: rgb(58,55,52);
    font-size: 25px;
    font-weight: bold;
    display: block;
    margin-top: 10px;
    margin-block-start: 0.42em;
    margin-block-end: 0.42em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    max-width: 100%;
}

h1 {
    color: rgb(58,55,52);
    font-size: 25px;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>
