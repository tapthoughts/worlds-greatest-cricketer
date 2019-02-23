<template>
    <div class="side-bar">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Getting Started</span>
            </el-menu-item>
            <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>Visualization</span>
            </template>
            <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">ODI</el-menu-item>
                <el-menu-item index="1-2">Test</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">ODI</el-menu-item>
                <el-menu-item index="1-4">Test</el-menu-item>
            </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Readme</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
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
