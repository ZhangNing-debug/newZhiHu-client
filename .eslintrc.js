// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
//   parserOptions: {
//     parser: "babel-eslint"
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
//   }
// };

module.exports = {
    extends: ['alloy', 'alloy/vue'],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
        'vue/component-tags-order': [
            'error',
            {
                order: [['template','script'], 'style']
            }
        ]
    }
};
