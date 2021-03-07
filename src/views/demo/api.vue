<template>
  <pre>{{ results }}</pre>
</template>

<script>
import demoApi from '@/api/demo.js';
export default {
  data() {
    return {
      results: []
    };
  },
  mounted() {
    demoApi.getRandomuserData(1).then(response => (this.results = response.data.results));
  }
};
</script>
