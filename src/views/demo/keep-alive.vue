<template>
  <el-form label-width="80px">
    <el-form-item label="数据缓存">
      <el-input v-model="input" clearable></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    };
  }
};
</script>

<style lang="less" scoped>
.el-form {
  width: 300px;
}
</style>
