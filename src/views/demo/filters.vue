<template>
  <h1>{{ n }} -> {{ $filters.toThousandFilter(n) }}</h1>
</template>

<script>
export default {
  data() {
    return {
      n: 1234567890
    };
  }
};
</script>
