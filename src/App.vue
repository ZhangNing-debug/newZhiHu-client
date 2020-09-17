<template>
  <router-view />
  <!-- <a-tooltip placement="left">
    <template v-slot:title>
      <span>回到顶部</span>
    </template>
    <a-button type="primary" class="back-to-top">
      <ArrowUpOutlined />
    </a-button>
  </a-tooltip> -->
  <a-tooltip placement="left">
    <template v-slot:title>
      <span>回到顶部</span>
    </template>
    <a-back-top :visibilityHeight="100">
      <a-button type="primary" class="ant-back-top-inner">
        <ArrowUpOutlined />
      </a-button>
    </a-back-top>
  </a-tooltip>
</template>

<script>
import { ArrowUpOutlined } from '@ant-design/icons-vue';
import { Tooltip, BackTop } from 'ant-design-vue';
export default {
  name: 'Home',
  components: {
    ArrowUpOutlined,
    aBackTop: BackTop,
    aTooltip: Tooltip
  }
};
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
}
#app {
  .size;
}
a {
  color: inherit;
  text-decoration: none;
}
h1,
h2,
h3 {
  margin: 0;
  font: inherit;
}
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei,
    Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
  font-size: 15px;
  color: #1a1a1a;
  background: #f6f6f6 !important;
  -webkit-tap-highlight-color: rgba(26, 26, 26, 0);
}
.Card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.ant-back-top {
  bottom: 100px;
  right: 12px;
}
.ant-back-top-inner {
  width: 40px;
  height: 40px;
  background: #fff;
  color: #8590a6;

  padding: 0;

  font-size: 24px;
  border: none;
  box-shadow: 0 1px 3px rgba(18, 18, 18, 0.1);
}
</style>
