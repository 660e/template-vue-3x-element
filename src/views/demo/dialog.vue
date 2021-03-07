<template>
  <div>
    <el-button @click="openDialog">打开弹窗</el-button>
    <demo-dialog ref="demoDialog" @confirm="onConfirm"></demo-dialog>
  </div>
</template>

<script>
import DemoDialog from './dialog/demo.vue';
export default {
  methods: {
    openDialog() {
      this.$refs.demoDialog.open({ a: 1 });
    },
    onConfirm(resolve) {
      window.console.log(resolve);
    }
  },
  components: {
    DemoDialog
  }
};
</script>
