<template>
  <div>
    <el-button type="primary" @click="toggle = !toggle">过渡</el-button>
    <transition name="demo" mode="out-in">
      <h1 v-if="toggle">{{ toggle }}</h1>
      <h1 v-else>{{ toggle }}</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true
    };
  }
};
</script>

<style lang="less" scoped>
h1 {
  background-color: #eee;
  height: 400px;
  width: 400px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo-enter-active {
  transition: opacity 0.5s, margin-left 0.5s;
}
.demo-enter-from {
  margin-left: -20px;
  opacity: 0;
}
.demo-enter-to {
  margin-right: 0;
  opacity: 1;
}
.demo-leave-active {
  transition: opacity 0.5s, margin-left 0.5s;
}
.demo-leave-from {
  margin-left: 0;
  opacity: 1;
}
.demo-leave-to {
  margin-left: 20px;
  opacity: 0;
}
</style>
