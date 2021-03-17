<template>
  <div>
    <el-button type="primary" @click="getMockData1">直接生成</el-button>
    <el-button type="primary" @click="getMockData2">拦截请求</el-button>
    <pre>{{ results }}</pre>
  </div>
</template>

<script>
import demoApi from '@/api/demo.js';
export default {
  data() {
    return {
      results: {}
    };
  },
  methods: {
    getMockData1() {
      demoApi.getMockData1().then(response => (this.results = response));
    },
    getMockData2() {
      demoApi.getMockData2().then(response => (this.results = response.data));
    }
  }
};
</script>

<style lang="less" scoped>
pre {
  padding-top: 20px;
}
</style>
