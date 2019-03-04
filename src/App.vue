<template>
  <div id="app">
    <el-container>
      <el-aside width="225px">
        <div class="logo-container"> Visualize </div>
        <Sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <transition name="page" mode="out-in">
            <router-view style="margin-top: 40px"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default {
   components: {
     Header,
     Sidebar
   }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1200px;
  margin: auto;
}

.el-aside {
  background: #545c64;
  color: white;
  min-height: 100vh;
}

.logo-container {
  padding: 20px;
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
    color: #303133;
    transition: .3s;
    padding: 20px;
}

.card:hover {
    transition: .5s;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}

h1 {
    color: #333;
    font-size: 25px;
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
</style>
