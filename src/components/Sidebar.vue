<template>
    <div class="side-bar">
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item @click="routeHome()" index="1">
            <i class="el-icon-d-arrow-right"></i>
            <span>Getting Started</span>
            </el-menu-item>
            <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-view"></i>
                <span>Visualization</span>
            </template>
            <el-menu-item-group title="Batting Statistics">
                <el-menu-item @click="routeBattingODI()" index="1-1">ODI</el-menu-item>
                <el-menu-item @click="routeBattingTest()" index="1-2">Test</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Bowling Statistics">
                <el-menu-item @click="routeBowlingODI()" index="1-3">ODI</el-menu-item>
                <el-menu-item @click="routeBowlingTest()" index="1-4">Test</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-menu-item @click="routeConclusion()" index="4">
            <i class="el-icon-tickets"></i>
            <span>Conclusion</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // route methods
    routeHome() {
      this.$router.push({ path: '/' });
    },
    routeBattingODI() {
      this.$router.push({ path: 'battingODI' });
    },
    routeBattingTest() {
      this.$router.push({ path: 'battingTest' });
    },
    routeBowlingODI() {
      this.$router.push({ path: 'bowlingODI' });
    },
    routeBowlingTest() {
      this.$router.push({ path: 'bowlingTest' });
    },
    routeConclusion() {
      this.$router.push({ path: 'conclusion' });
    },
  },
};
</script>

<style scoped>
.el-menu {
  border-right: 0 !important;
}

/* .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 225px;
    min-height: 400px;
  } */

</style>
