<template>
  <div class="child">
    <h1>{{ $store.getters.getMessage1 }}</h1>
    <h1>{{ $store.getters.getMessage3 }}</h1>
  </div>
</template>

<style src="./child.less" lang="less" scoped></style>
<style lang="less" scoped>
.child::before {
  content: 'child-a';
}
</style>
