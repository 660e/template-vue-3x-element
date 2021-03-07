<template>
  <el-dialog v-model="dialogVisible" :close-on-click-modal="false" title="弹窗" width="300px">
    <el-input v-model="input"></el-input>
    <template #footer>
      <el-button @click="close">取消</el-button>
      <el-button @click="ok" type="primary">确定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  emits: ['confirm'],
  data() {
    return {
      dialogVisible: false,
      input: ''
    };
  },
  created() {
    window.console.log('created');
  },
  mounted() {
    window.console.log('mounted');
  },
  updated() {
    window.console.log('updated');
  },
  unmounted() {
    window.console.log('unmounted');
  },
  methods: {
    open(params) {
      this.dialogVisible = true;
      window.console.log(params);
    },
    close() {
      this.dialogVisible = false;
    },
    ok() {
      this.close();
      this.$emit('confirm', { b: this.input });
    }
  }
};
</script>
