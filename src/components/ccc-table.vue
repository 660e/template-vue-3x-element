<template>
  <div class="ccc-table">
    <el-table :data="sources" v-loading="loading" border stripe>
      <!-- columns -->
      <template v-for="c in options.columns">
        <el-table-column
          v-if="!c.type"
          :key="c.prop"
          :prop="c.prop"
          :label="c.label"
          :width="c.width"
          :formatter="c.formatter"
          :resizable="false"
        ></el-table-column>
        <el-table-column v-if="c.type === 'progress'" :key="c.prop" :label="c.label" :width="c.width" :resizable="false">
          <template #default="scope">
            <el-progress :percentage="scope.row[c.prop]"></el-progress>
          </template>
        </el-table-column>
      </template>
      <!-- handle -->
      <el-table-column v-if="options.handle" :label="options.handle.label" :width="options.handle.width" :resizable="false">
        <template #default="scope">
          <el-button v-for="b in options.handle.buttons" v-text="b.text" type="text" :key="b.text" @click="b.click(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <div class="ccc-table__pagination" v-if="options.pagination">
      <el-pagination
        :total="options.pagination.total"
        :current-page="options.pagination.page"
        :page-size="10"
        :disabled="loading"
        @current-change="onCurrentChange"
        layout="total, prev, pager, next"
        background
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ccc-table',
  props: {
    options: {
      type: Object,
      required: true
    },
    sources: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
    onCurrentChange(page) {
      this.$emit('change', page);
      this.loading = true;
    }
  },
  watch: {
    sources() {
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
.ccc-table__pagination {
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  .el-pagination {
    padding: 0;
    :deep(.btn-next) {
      margin-right: 0;
    }
  }
}
</style>
