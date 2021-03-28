<template>
  <div class="parent">
    <el-button type="primary" @click="messageToChildA">传值给A</el-button>
    <el-button type="primary" @click="messageToChildB">传值给B</el-button>
    <el-button type="primary" @click="messageToChild">异步传值给AB</el-button>
    <child-a></child-a>
    <child-b></child-b>
  </div>
</template>

<script>
import ChildA from './components/child-a.vue';
import ChildB from './components/child-b.vue';
export default {
  data() {
    return {};
  },
  methods: {
    messageToChildA() {
      this.$store.commit('vuex/setMessage1', 'message 1');
    },
    messageToChildB() {
      this.$store.commit('vuex/setMessage2', 'message 2');
    },
    messageToChild() {
      this.$store.dispatch('vuex/setMessage', 'message 3').then(response => console.log(response));
    }
  },
  components: { ChildA, ChildB }
};
</script>

<style lang="less" scoped>
.parent {
  width: 400px;
}
</style>
