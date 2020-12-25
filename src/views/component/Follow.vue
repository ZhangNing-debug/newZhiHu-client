<template>
  <div></div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, onUnmounted, watch, watchEffect, computed } from 'vue';
export default {
  name: '',
  components: {},
  setup () {
    const state = reactive({

    });
    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="less" scoped>
//
</style>
