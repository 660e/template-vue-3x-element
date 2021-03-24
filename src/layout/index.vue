<template>
  <el-container class="wrapper">
    <el-header>
      <el-button type="danger" icon="el-icon-switch-button" @click="logout" circle></el-button>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu background-color="#545c64" text-color="#fff" active-text-color="#0cf" :default-active="activeIndex" router>
          <el-menu-item v-for="m in menus" :key="m" :index="`/demo/${m}`">{{ m }}</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="layout">
            <keep-alive v-if="$route.meta.keepAlive">
              <component :is="Component"></component>
            </keep-alive>
            <component v-else :is="Component"></component>
          </transition>
        </router-view>
      </el-main>
    </el-container>
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
  mounted() {
    if (!this.loggedIn()) {
      this.logout();
    }
  },
  methods: {
    loggedIn() {
      return !!sessionStorage.getItem('token');
    },
    logout() {
      sessionStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  watch: {
    $route(to) {
      this.activeIndex = to.path;
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  .el-header {
    background-color: #545c64;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .el-container {
    min-height: 0;
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
  }
}
.layout-enter-active {
  transition: opacity 0.5s ease;
}
.layout-enter-from {
  opacity: 0;
}
</style>
