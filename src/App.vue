<template>
  <router-view />
</template>

<style lang="less">
// .size {
//   width: 100%;
//   height: 100%;
// }
// html,
// body {
//   .size;
//   overflow: hidden;
//   margin: 0;
//   padding: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
//     Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
//     sans-serif;
// }
// #app {
//   .size;
// }
a {
    color: inherit;
    text-decoration: none;
}
h1, h2, h3 {
    margin: 0;
    font: inherit;
}
html,body {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  font-size: 15px;
  color: #1a1a1a;
  background: #f6f6f6 !important;
  -webkit-tap-highlight-color: rgba(26,26,26,0);
}
.Card {
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>
