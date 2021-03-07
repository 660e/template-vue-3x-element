<template>
  <el-container>
    <el-aside width="200px">
      <el-menu background-color="#545c64" text-color="#fff" active-text-color="#0cf" :default-active="activeIndex" router>
        <el-menu-item v-for="m in menus" :key="m" :index="`/demo/${m}`">{{ m }}</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: this.$store.getters.permission_routes,
      activeIndex: this.$route.path
    };
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
}
.el-aside {
  background-color: #545c64;
}
.el-menu {
  border: 0;
  .el-menu-item {
    height: 40px;
    line-height: 40px;
    text-align: right;
  }
}
</style>
