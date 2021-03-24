<template>
  <el-container>
    <el-form>
      <el-form-item>
        <el-input v-model="username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      username: 'admin',
      password: 12345
    };
  },
  methods: {
    login() {
      sessionStorage.setItem('token', this.username);
      this.$router.push('/demo');
    }
  }
};
</script>

<style lang="less" scoped>
.el-container {
  height: 100vh;
  justify-content: center;
  align-items: center;
  .el-form {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #ccc;
    width: 210px;
    padding: 20px;
    .el-form-item {
      margin-bottom: 20px;
      &:last-child {
        margin: 0;
      }
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
