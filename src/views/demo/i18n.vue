<template>
  <div>
    <el-button @click="changeLanguage('zh-cn')">中文</el-button>
    <el-button @click="changeLanguage('en')">English</el-button>
    <h1>{{ $t('demo.hello') }}</h1>
  </div>
</template>

<script>
export default {
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      window.localStorage.setItem('language', lang);
      window.console.log(this.$i18n.getLocaleMessage(lang).el);
      window.console.log(this.$i18n.getLocaleMessage(lang).demo);
    }
  }
};
</script>

<style lang="less" scoped>
h1 {
  padding-top: 20px;
}
</style>
