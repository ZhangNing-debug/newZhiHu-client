<template>
<div class="oauth">
  <a-spin tip="Loading...">
    <div class="spin-content">
      授权中,请稍后.
    </div>
  </a-spin>
</div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, onUnmounted, watch, watchEffect, computed } from 'vue';
export default {
  name: '',
  components: {},
  setup () {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
//
.oauth {
  height: 100%;
  ::v-deep(.ant-spin-nested-loading) {
    height: 100%;
    .ant-spin{
      height: 100%;
      max-height: 100%;
    }
  }
}
</style>
